import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    console.log(data);
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper className={cx('popper-preview')}>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} src={data.avatar} alt={data.full_name} />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname}t</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>{data.full_name}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
