import { Outlet } from 'react-router';
import Navbar from '../components/dashboard/Navbar';

function DashboardLayout() {
  return (
    <div className='min-h-screen w-full px-6 py-4'>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
