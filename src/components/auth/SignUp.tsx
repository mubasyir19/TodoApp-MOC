import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router';

interface Register {
  fullname: string;
  username: string;
  password: string;
  confirmPassword: string;
}

function SignUp() {
  const [formData, setFormData] = useState<Register>({
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className='mt-12 w-full'>
        <h1 className='text-secondary text-center text-2xl font-semibold'>Create Your Account</h1>
        <p className='mt-2 text-center text-base text-black'>Join a community of focused professionals.</p>
      </div>
      <form className='mt-8 w-full space-y-6'>
        <div className='group-input space-y-2.5'>
          <label htmlFor='fullname' className='text-base text-[#40494]'>
            Full Name
          </label>
          <input
            type='text'
            name='fullname'
            value={formData.fullname}
            onChange={handleChange}
            className='focus:border-secondary focus:ring-secondary w-full border border-[#6B7280] px-4 py-3.5 text-base transition-all duration-200 outline-none placeholder:text-[#D8DBD7] focus:ring-1'
            placeholder='E.g. Julians Barnes'
          />
        </div>
        <div className='group-input space-y-2.5'>
          <label htmlFor='username' className='text-base text-[#40494]'>
            Username
          </label>
          <input
            type='username'
            name='username'
            value={formData.username}
            onChange={handleChange}
            className='focus:border-secondary focus:ring-secondary w-full border border-[#6B7280] px-4 py-3.5 text-base transition-all duration-200 outline-none placeholder:text-[#D8DBD7] focus:ring-1'
            placeholder='adminTodo'
          />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='group-input space-y-2.5'>
            <label htmlFor='password' className='text-base text-[#40494]'>
              Password
            </label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='focus:border-secondary focus:ring-secondary w-full border border-[#6B7280] px-4 py-3.5 text-base transition-all duration-200 outline-none placeholder:text-[#D8DBD7] focus:ring-1'
              placeholder='••••••'
            />
          </div>
          <div className='group-input space-y-2.5'>
            <label htmlFor='confirmPassword' className='text-base text-[#40494]'>
              Confirm Password
            </label>
            <input
              type='password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              className='focus:border-secondary focus:ring-secondary w-full border border-[#6B7280] px-4 py-3.5 text-base transition-all duration-200 outline-none placeholder:text-[#D8DBD7] focus:ring-1'
              placeholder='••••••'
            />
          </div>
        </div>
        <div className=''>
          <div className='flex items-center gap-2'>
            <input type='checkbox' name='agreement' />
            <label htmlFor='agreement' className='text-secondary text-base font-medium'>
              I agree to the{' '}
              <Link to={`#`} className='underline underline-offset-2'>
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to={`#`} className='underline underline-offset-2'>
                Privacy Policy
              </Link>
            </label>
          </div>
        </div>
        <div className=''>
          <button
            type='submit'
            className='bg-secondary/95 hover:bg-secondary flex w-full cursor-pointer items-center justify-between px-6 py-4 transition-all duration-200'
          >
            <p className='font-medium text-white'>Create Account</p>
            <ArrowRight className='size-5 text-white' />
          </button>
        </div>
      </form>
    </>
  );
}

export default SignUp;
