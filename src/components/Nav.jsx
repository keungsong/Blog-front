import React from 'react';
import {MdOutlineCall,MdOutlineEmail}from 'react-icons/md';

const Nav = () => {
  return (
  
      <nav className='sticky -top-0 z-80 bg-dark-hard'>
        <div className='container mx-auto px-5 flex items-center justify-between '>
          <div className='hidden md:flex gap-8 '>
            <label className='flex items-center justify-center text-white gap-2'><MdOutlineCall/>+85620 7730 5046</label>
            <label className='flex items-center justify-center text-white gap-2'><MdOutlineEmail/>keebxyooj2016@gmail.com</label>
          </div>
          <div className='flex gap-2'>
            <label className='hidden md:flex p-4 cursor-pointer  hover:bg-dark-light  justify-center'>LA</label>
            <label className='hidden md:flex p-4 cursor-pointer  hover:bg-dark-light  justify-center'>EN</label>
            
          </div>
        </div>
      </nav>
 
  )
}

export default Nav