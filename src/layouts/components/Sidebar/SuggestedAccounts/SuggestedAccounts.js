import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import httprequest from '~/utils/httprequest';
import axios from 'axios';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
function SuggestedAccounts({ label }) {
    const [ResultAccounts, SetResultAccounts] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:3000/h`)
            .then((res) => {
                SetResultAccounts(res.data);
            })
            .catch(() => {});
    }, []);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {ResultAccounts.map((result) => (
                <AccountItem key={result.id} data={result} />
            ))}
            <p className={cx('more-btn')}>Xem tất cả</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
