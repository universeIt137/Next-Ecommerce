
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import '@fortawesome/fontawesome-svg-core/styles.css'; // Import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const DashboardLayout = ({ children }) => {

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar/>
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
