import { useState, useEffect, useRef } from 'react';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const inputRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2]);
        }, 0);
    }, []);
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Tài khoản</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
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
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => {
                        setShowResult(true);
                    }}
                />
                {!!searchValue && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
