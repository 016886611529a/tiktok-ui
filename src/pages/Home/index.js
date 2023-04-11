import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useEffect, useState } from 'react';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { data } from 'jquery';
const cx = classNames.bind(styles);
function Home() {
    const [ResultAccounts, SetResultAccounts] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:3000/content`)
            .then((res) => {
                SetResultAccounts(res.data);
            })
            .catch(() => {});
    }, []);

    return ResultAccounts.map((result) => (
        <div key={result.id} className={cx('main-content')}>
            <a>
                <img className={cx('avatar')} src={result.avatar} alt={result.full_name}></img>
            </a>
            <div className={cx('content-info')}>
                <div>
                    <div className={cx('content-info-detail')}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <a>
                                <h3 className={cx('nickname')} style={{ display: 'inline-block' }}>
                                    {result.nickname}
                                </h3>
                                <h4 className={cx('fullname')} style={{ display: 'inline-block' }}>
                                    {result.full_name}🦋
                                </h4>
                            </a>
                            <div>
                                <Button className={cx('follow')} outline small>
                                    Follow
                                </Button>
                            </div>
                        </div>
                        <div>
                            <span>em bé của anh vừa thêm 1 video mới</span>
                        </div>
                        <div style={{ marginTop: '4px', marginBottom: '12px' }}>
                            <a>
                                <FontAwesomeIcon className={cx('music')} icon={faMusic} />
                                nhạc nền - xenia - 𝑿𝒆𝒏𝒊𝒂❦
                            </a>
                        </div>
                    </div>
                </div>
                <div className={cx('content-video')}>
                    <div className={cx('DivActionVideo')}>
                        <video src={result.video} controls autoPlay type="video/mp4"></video>
                    </div>
                    <div className={cx('DivActionItem')}>
                        <button className={cx('tuongtac')}>
                            <span className={cx('icontuongtac')}>
                                <FontAwesomeIcon className={cx('tim')} icon={faHeart} />
                            </span>
                            <strong>106.4K</strong>
                        </button>
                        <button className={cx('tuongtac')}>
                            <span className={cx('icontuongtac')}>
                                <FontAwesomeIcon className={cx('binhluan')} icon={faCommentDots} />
                            </span>
                            <strong>502</strong>
                        </button>
                        <button className={cx('tuongtac')}>
                            <span className={cx('icontuongtac')}>
                                <FontAwesomeIcon className={cx('chiase')} icon={faShare} />
                            </span>
                            <strong>355</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ));
}

export default Home;
