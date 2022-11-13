import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInUser } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

const Logins = () => {
  const [username, setUserame] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (e) => {
    setUserame(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandle = async (e) => {
    e.preventDefault();
    try {
      const user = {
        username: username,
        password: password,
      };
      dispatch(signInUser(user)).then((res) => {
        if (res.error.code === 404) {
          alert(res.error.message);
        } else {
          navigate('/dashboard');
        }
        console.log(res);
      });
    } catch (error) {
      setTimeout(() => {
        alert('Invalid Credentials');
      }, 2000);
      navigate('/login');
    }
  };

  return (
    <div>
      <form className='flex flex-col items-center gap-5'>
        <h3>Sign In</h3>
        <div className='flex flex-col'>
          <label htmlFor=''>Email</label>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={handleUsername}
            className='visible bg-transparent border rounded-md py-3 px-4 text-black leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={handlePassword}
            className='visible bg-transparent border rounded-md py-3 px-4 text-black leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300'
          />
        </div>
        <button className='bg-yellow-300 text-white font-bold py-3 px-4 rounded text-2xl hover:bg-yellow-400' onClick={loginHandle}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Logins;
