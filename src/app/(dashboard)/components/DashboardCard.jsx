import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const DashboardCard = ({ title, count, icon }) => {
  return (
    <div className="bg-white p-4 rounded shadow flex items-center justify-between">
      <div>
        <p className="text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{count}</p>
      </div>
      <FontAwesomeIcon icon={icon} className="text-gray-500 text-3xl" />
    </div>
  );
};

// Define the expected prop types
DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.object.isRequired,
};

export default DashboardCard;
