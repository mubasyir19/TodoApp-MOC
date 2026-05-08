import { LogOut } from 'lucide-react';
import { useLogout } from '../../hooks/auth/useLogout';
import { useAuthStore } from '../../stores/authStore';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';

function Navbar() {
  const user = useAuthStore((state) => state.user);
  const { logout } = useLogout();

  return (
    <nav className='bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between'>
      <div className='flex-1'>
        <p className='text-lg font-semibold text-gray-800'>Dashboard</p>
      </div>
      <div className='flex items-center gap-4'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className='flex items-center gap-2'>
              <div className='w-10 h-10 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center'>
                <span className='text-white font-semibold text-sm'>{user?.username?.charAt(0).toUpperCase()}</span>
              </div>
              <div>
                <p className='text-sm font-medium text-gray-800'>{user?.fullname}</p>
                <p className='text-xs text-gray-500'>@{user?.username}</p>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <button
                onClick={logout}
                className='flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors'
                title='Logout'
              >
                <LogOut className='w-4 h-4' />
                <span className='text-sm font-medium'>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;
