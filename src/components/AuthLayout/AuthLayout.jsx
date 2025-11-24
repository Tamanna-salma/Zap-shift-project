import React from 'react';
import Logo from '../Logo';
import authimg from '../../assets/authImage.png';
import { Outlet } from 'react-router'; 
const AuthLayout = () => {
  return (
   <div className='max-w-7xl p-3 mx-auto'>
            <Logo></Logo>
            <div className='flex items-center'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img src={authimg} alt="" />
                </div>
            </div>
        </div>
  )
}

export default AuthLayout