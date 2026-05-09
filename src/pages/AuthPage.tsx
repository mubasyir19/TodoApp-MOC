import { useState } from 'react';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';

const tabs = [
  {
    name: 'signin',
    label: 'Sign In',
  },
  {
    name: 'register',
    label: 'Register',
  },
];

function AuthPage() {
  const [activeTab, setActiveTab] = useState<string>('signin');

  const handleClikTab = (name: string) => {
    setActiveTab(name);
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'signin':
        return <SignIn />;
      case 'register':
        return <SignUp />;
      default:
        return <SignIn />;
    }
  };
  return (
    <div className='grid min-h-screen grid-cols-1 md:grid-cols-2'>
      <div className='bg-cream hidden h-full w-full py-6 md:block md:py-8 lg:py-16 xl:py-24'>
        <div className='flex h-full flex-col justify-between lg:mx-auto lg:w-3/4 xl:w-1/2'>
          <div className='space-y-2'>
            <h1 className={`text-secondary text-3xl font-bold`}>TaskFlow Manager</h1>
            <p className='text-base text-black italic'>Organize your day, achieve more</p>
          </div>
          <div className='space-y-4'>
            <div className='bg-primary/5 h-96 w-full border border-[#BFC9C1] p-6'>
              <img
                src='/todo.jpg'
                width={500}
                height={500}
                alt='todo'
                className='h-full w-full object-cover object-bottom'
              />
            </div>
          </div>
          <div className=''>
            <p className='text-xs text-black uppercase'>EST. 2026 &copy; Submission MOC Group</p>
          </div>
        </div>
      </div>
      <div className='h-full w-full bg-white p-6 md:py-8 lg:mx-auto lg:w-3/4 lg:py-16 xl:w-1/2'>
        <div className='grid w-full grid-cols-2'>
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => handleClikTab(tab.name)}
              className={`cursor-pointer border-b-2 px-4 py-4 text-center font-medium ${activeTab === tab.name ? 'border-secondary' : 'border-gray-300'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className='flex flex-col items-center justify-center'>{renderTab()}</div>
      </div>
    </div>
  );
}

export default AuthPage;
