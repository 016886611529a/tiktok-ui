import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Tippy from '@tippyjs/react';

import styles from './Header.module.scss';

//import 'HeadlessTippy.js/dist/HeadlessTippy.css'; // optional

import images from '~/assets/images';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const currentUser = true;

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change language
                break;
            default:
        }
    };
    const useMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
            to: '/@long',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Nhận xu',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok"></img>
                </div>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Tải lên video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Tải lên video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Tải lên video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <React.Fragment>
                            <Button text>Tải lên</Button>
                            <Button primary>Đăng nhập</Button>
                        </React.Fragment>
                    )}
                    <Menu items={currentUser ? useMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/7052091919140126746.jpeg?x-expires=1680699600&x-signature=N77NtBFfeYj2x2lH7b2%2FnDfO29Q%3D"
                                alt="long"
                                fallback="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/279612894_163369869469463_6666096359864920987_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=105&ccb=1-7&_nc_sid=05dcb7&_nc_ohc=L5jaL17vUzMAX_25YsU&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBqbg520KMQ0m2ojn1TqYgWEOVUNWlgORMpgXiRzmnYHQ&oe=6430EA1C"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
