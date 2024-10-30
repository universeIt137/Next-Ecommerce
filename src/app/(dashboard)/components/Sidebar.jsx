"use client"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThLarge, faFlag, faRedo, faBoxes, faLeaf,
    faDollarSign, faPalette, faExpandArrowsAlt, faAngleRight, faImage, faShoppingBag, faBars,
    faCreditCard, faUsers, faFire, faTag, faBullhorn, faChevronRight, faCalendarDay, faStar, faPhone, faSnowflake, faSignOutAlt, faDotCircle
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Sidebar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleDropdownClick = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const menuItems = [
        { name: 'Dashboard', icon: faThLarge, link: '/dashboard' },
        {
            name: 'Website Info',
            icon: faFlag,
            link: '',
            dropdownItems: [
                { name: 'Website Info List', link: '/dashboard/infoList' },
                { name: 'Add Website Info', link: '/website-info/add' }
            ]
        },
        {
            name: 'Return Product',
            icon: faRedo,
            link: '',
            dropdownItems: [
                { name: 'Return List', link: '/return-product/list' },
                { name: 'Add Return', link: '/return-product/add' }
            ]
        },
        { name: 'Category', icon: faBoxes, link: '/category' },
        { name: 'Brand', icon: faLeaf, link: '/brand' },
        { name: 'Price Range', icon: faDollarSign, link: '/price-range' },
        { name: 'Colors', icon: faPalette, link: '/colors' },
        { name: 'Sizes', icon: faExpandArrowsAlt, link: '/sizes' },
        { name: 'Banner', icon: faImage, link: '/banner' },
        { name: 'Product', icon: faShoppingBag, link: '/product' },
        { name: 'Order', icon: faBars, link: '/order' },
        { name: 'Payment', icon: faCreditCard, link: '/payment' },
        { name: 'Vendors', icon: faUsers, link: '/vendors' },
        {
            name: 'Payment Request',
            icon: faCreditCard,
            link: '',
            dropdownItems: [
                { name: 'Request List', link: '/payment-request/list' },
                { name: 'New Request', link: '/payment-request/add' }
            ]
        },
        { name: 'Users', icon: faUsers, link: '/users' },
        {
            name: 'Flashsale',
            icon: faFire,
            link: '',
            dropdownItems: [
                { name: 'Flashsale List', link: '/flashsale/list' },
                { name: 'Add Flashsale', link: '/flashsale/add' }
            ]
        },
        { name: 'Coupon', icon: faTag, link: '/coupon' },
        {
            name: 'Campaign',
            icon: faBullhorn,
            link: '',
            dropdownItems: [
                { name: 'Campaign List', link: '/campaign/list' },
                { name: 'Add Campaign', link: '/campaign/add' }
            ]
        },
        { name: 'Deal Of The Day', icon: faCalendarDay, link: '/deal-of-the-day' },
        { name: 'Review & Rating', icon: faStar, link: '/review-rating' },
        { name: 'Contact Us', icon: faPhone, link: '/contact-us' },
        { name: 'Front End', icon: faSnowflake, link: '/front-end' },
        { name: 'Logout', icon: faSignOutAlt, link: '/logout' }
    ];


    return (
        <aside className="w-80 bg-white p-4 shadow-md">
            <div className="text-2xl font-bold text-black mb-8">SHOP.CO</div>
            <nav className="flex flex-col space-y-4 text-gray-700 ">
                {menuItems.map((item, index) => (
                    <div key={index}>
                        <Link href={item.link}>
                            <div className="flex justify-around ">
                                <button
                                    onClick={() => handleDropdownClick(item.name)}
                                    className={`flex items-center space-x-3 text-gray-700 hover:text-blue-500 w-full text-left ${activeDropdown === item.name ? 'font-semibold' : ''
                                        }`}
                                >
                                    <FontAwesomeIcon icon={item.icon} />
                                    <span>{item.name}</span>
                                </button>
                                <div className=" w-1/3 ">
                                    <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '9px' }} />
                                </div>
                            </div>


                        </Link>

                        {item.dropdownItems && activeDropdown === item.name && (
                            <div className="ml-6 mt-2 space-y-2">
                                {item.dropdownItems.map((dropdownItem, i) => (
                                    <Link href={dropdownItem.link} key={i}>
                                        <div className="flex items-center space-x-3 text-gray-500 hover:text-blue-500">
                                            <FontAwesomeIcon icon={faDotCircle} style={{ fontSize: '9px' }} />
                                            <span>{dropdownItem.name}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
