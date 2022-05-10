import React from 'react'
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import menu from '../images/download.svg'

export const Navbar = () => {
  return (
    <div className="p-5 pb-0 flex flex-wrap justify-center items-center">
        <div className="flex justify-between items-center space-x-5 w-screen">
            <div className= 'container mx-auto'>
                <nav className='flex justify-content space-x-4'>
                    <a href='.' className='py-2 px-2'>
                        <img src={logo} alt="logo" className=""/>
                    </a>
                    <ul className='hidden grow sm:block sm:ml-6'>
                        <div className='flex space-x-10'>
                            <li><a href='/features' className='block px-3 py-2 rounded-md text-base font-medium'>Features</a></li>
                            <li><a href='/company' className='block px-3 py-2 rounded-md text-base font-medium'>Company</a></li>
                            <li><a href='/careers' className='block px-3 py-2 rounded-md text-base font-medium'>Careers</a></li>
                            <li><a href='/about' className='block px-3 py-2 rounded-md text-base font-medium'>About</a></li>
                        </div>           
                    </ul>
                        <div className='w-48 text-right items-right space-x-10 sm:text-right hidden sm:block'>
                            <button>
                                Login
                            </button>
                            <button className='p-1 text-black-400 hover:text-slate-800 outline-none ring-2 ring-black h-12 px-6 rounded-lg item-center justify-center'>
                                Register
                            </button>
                        </div>
                    <div className='md:hidden'>
                        <img src={menu} alt="menu" width="30" className='inline ml-3' />
                    </div>    
                </nav>
            </div>
        </div>
    </div>
  )
}


