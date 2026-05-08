import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AxiosError } from 'axios';
import { useLogin } from '../../hooks/auth/useLogin';

function SignIn() {
  const navigate = useNavigate();
  const { mutate, isPending } = useLogin();
  const [formData, setFormData] = useState({
    username: 'adminTodo',
    password: 'admin123',
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ username?: string; password?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormError(null);
    if (fieldErrors[name as 'username' | 'password']) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setFieldErrors({});

    const validationErrors: { username?: string; password?: string } = {};
    if (!formData.username.trim()) validationErrors.username = 'Username is required.';
    if (!formData.password.trim()) validationErrors.password = 'Password is required.';

    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      return;
    }

    mutate(formData, {
      onSuccess: (data) => {
        if (data.data) {
          navigate('/dashboard');
        }
      },
      onError: (error: unknown) => {
        const axiosError = error as AxiosError<{ message?: string }>;
        const message =
          axiosError.response?.data?.message ||
          axiosError.response?.statusText ||
          axiosError.message ||
          'Login failed. Please try again.';
        setFormError(message);
      },
    });
  };

  return (
    <>
      <div className='mt-12 w-full'>
        <h1 className='text-secondary text-center text-2xl font-semibold'>Sign In Your Account</h1>
        <p className='mt-2 text-center text-base text-black'>Please fill out the form below</p>
      </div>
      <form onSubmit={handleSubmitLogin} className='mt-8 w-full space-y-6'>
        {formError ? (
          <div className='rounded bg-red-50 p-3 text-sm text-red-600 border border-red-200'>{formError}</div>
        ) : null}
        <div className='group-input space-y-2.5'>
          <label htmlFor='username' className='text-base text-[#40494]'>
            Username
          </label>
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            disabled={isPending}
            className='focus:border-secondary focus:ring-secondary w-full border border-[#6B7280] px-4 py-3.5 text-base transition-all duration-200 outline-none placeholder:text-[#D8DBD7] focus:ring-1 disabled:bg-gray-100'
            placeholder='adminTodo'
            required
          />
          {fieldErrors.username && <p className='mt-1 text-sm text-red-600'>{fieldErrors.username}</p>}
        </div>
        <div className='group-input space-y-2.5'>
          <label htmlFor='password' className='text-base text-[#40494]'>
            Password
          </label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            disabled={isPending}
            className='focus:border-secondary focus:ring-secondary w-full border border-[#6B7280] px-4 py-3.5 text-base transition-all duration-200 outline-none placeholder:text-[#D8DBD7] focus:ring-1 disabled:bg-gray-100'
            placeholder='••••••'
            required
          />
          {fieldErrors.password && <p className='mt-1 text-sm text-red-600'>{fieldErrors.password}</p>}
        </div>
        <div className='flex items-center justify-end'>
          <Link to={`#`}>
            <p className='text-secondary text-base font-medium underline underline-offset-2'>Forgot Password?</p>
          </Link>
        </div>
        <div className=''>
          <button
            type='submit'
            disabled={isPending}
            className='bg-secondary/95 hover:bg-secondary flex w-full cursor-pointer items-center justify-between px-6 py-4 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed'
          >
            {isPending ? (
              <p className='text-center text-base text-white w-full'>Loading...</p>
            ) : (
              <>
                <p className='font-medium text-white'>Sign In</p>
                <ArrowRight className='size-5 text-white' />
              </>
            )}
          </button>
        </div>
      </form>
    </>
  );
}

export default SignIn;
