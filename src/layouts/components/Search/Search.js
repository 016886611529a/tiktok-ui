import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { useDebounce } from '~/hooks';
import request from '~/utils/httprequest';
import * as searchServices from '~/services/searchServices';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 1000);
    const inputRef = useRef();
    useEffect(() => {
        //đáng lẻ phải có .trim() để q= value k được rỗng khi bên Back end not null
        if (!debounced) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        // 1 . Dùng fetch để call Api
        //     fetch(`http://localhost:3000/${encodeURIComponent(debounced)}`)
        //         .then((res) => res.json())
        //         .then((res) => {
        //             setSearchResult(res);
        //             setLoading(false);
        //         })
        //         .catch(() => {
        //             setLoading(false);
        //         });
        // }, [debounced]);

        // 2. Dùng Axios để call api

        //         axios.get(`${encodeURIComponent(debounced)}`)
        //         .then((res) => {
        //             setSearchResult(res.data);
        //             setLoading(false);
        //         })
        //         .catch(() => {
        //             setLoading(false);
        //         });
        // }, [debounced]);

        //3.dùng async/await để call api
        const fetchApi = async () => {
            try {
                const res = await request.get(`${encodeURIComponent(debounced)}`);
                setSearchResult(res.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchApi();
        // const fetchApi = async () => {
        //     setLoading(true);
        //     const result = await searchServices.search(debounced);
        //     setSearchResult(result);
        //     setLoading(false);
        // };
        // fetchApi();
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div style={{ height: '46px' }}>
            <HeadlessTippy
                interactive
                visible={showResult && searchResults.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Tài khoản</h4>
                            {searchResults.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Tìm kiếm tài khoản và video"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
