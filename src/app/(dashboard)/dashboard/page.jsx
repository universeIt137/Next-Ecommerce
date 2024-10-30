import React from 'react';
import DashboardCard from '../components/DashboardCard';
import { faShoppingCart, faShoppingBasket, faChartLine, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const page = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <DashboardCard title="Total Product" count="64" icon={faShoppingCart} />
            <DashboardCard title="My Product" count="64" icon={faShoppingBasket} />
            <DashboardCard title="Total Revenue" count="0" icon={faChartLine} />
            <DashboardCard title="Total Customers" count="499" icon={faUserFriends} />
            {/* Add more cards as needed */}
        </div>
    );
};

export default page;