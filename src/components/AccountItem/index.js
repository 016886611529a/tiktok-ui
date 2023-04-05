import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.18169-1/13892079_1744536825812780_4445392407518343227_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=c0VFGXHfZi8AX-Pwij-&_nc_ht=scontent.fdad3-1.fna&oh=00_AfC7rY6m2Ntbb6TBrlvn8XAuZ2seosnckJVLRjH5CU9heA&oe=64549C7B"
                alt="long"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Long</span>
            </div>
        </div>
    );
}

export default AccountItem;
