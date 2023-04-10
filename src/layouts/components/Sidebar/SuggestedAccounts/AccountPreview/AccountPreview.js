import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1681286400&x-signature=EK%2FRfL%2BFxjSc1fzCTq%2FfUdp%2BR50%3D"
                    alt="theanh28"
                />
                <Button className={cx('follow')} primary small>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>theanh28entertainment</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Theanh28 Entertainment</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.9M</strong>
                    <span className={cx('lable')}>Follower</span>
                    <strong className={cx('value')}>727.5M</strong>
                    <span className={cx('lable')}>Thích</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
