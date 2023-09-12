import React from 'react'
import { images } from '../constants'
import {BsFacebook, BsInstagram, BsYoutube, BsTiktok}from 'react-icons/bs'
import {RiBuilding2Line} from 'react-icons/ri'

const Footer = () => {
  return (
    <section className='bg-dark-hard'>
       <footer className='container mx-auto grid grid-cols-10 px-5 py-10 gap-x-5 gap-y-10 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:grid-x-10'>
        <div className='col-span-5 md:col-span-4 lg:col-span-2'>
          <h3 className='text-white font-bold md:text-lg'>Product</h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4'>
            <li>
              <a className='hover:text-white' href="/">Landingpage</a>
            </li>
            <li>
              <a className='hover:text-white' href="/">Features</a>
            </li>
            <li>
              <a className='hover:text-white' href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className='col-span-5 md:col-span-4 lg:col-span-2'>
          <h3 className='text-white font-bold md:text-lg'>Services</h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4'>
            <li>
              <a className='hover:text-white' href="/">Design</a>
            </li>
            <li>
              <a className='hover:text-white' href="/">Develoment</a>
            </li>
            <li>
              <a className='hover:text-white' href="/">Marketing</a>
            </li>
          </ul>
        </div>
        <div className='col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto'>
          <h3 className='text-white font-bold md:text-lg'>Company</h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4'>
            <li>
              <a className='hover:text-white' href="/">About</a>
            </li>
            <li>
              <a className='hover:text-white' href="/">Terms</a>
            </li>
            <li>
              <a className='hover:text-white' href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className='col-span-5 md:col-span-4 lg:col-span-2'>
          <h3 className='text-white font-bold md:text-lg'>More</h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
            <li>
              <a className='hover:text-white' href="/">Documentation</a>
            </li>
            <li>
              <a className='hover:text-white' href="/">License</a>
            </li>
            <li>
              <a className='hover:text-white' href="/">Changlog</a>
            </li>
          </ul>
        </div>
        <div className='col-span-10 md:order-first md:col-span-4'>
          <img src={images.Logo} alt="logo" className='brightness-0 invert mx-auto md:mx-0 w-40 h-30 md:w-30 md:h-20 lg:w-40 lg:h-20' />
          <p className='text-dark-light text-sm text-center mt-4 md:text-left md:text-base lg:text-sm'>Build a modern and creative website with crealand</p>
          <ul className='flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start'>
            <li>
              <a href=""></a>
               <BsFacebook className='w-6 h-auto hover:text-sky-700'/>
            </li>
            <li>
              <a href=""></a>
               <BsInstagram className='w-6 h-auto hover:text-pink-500'/>
            </li>
            <li>
              <a href=""></a>
               <BsYoutube className='w-6 h-auto hover:text-red-600'/>
            </li>
            <li>
              <a href=""></a>
               <BsTiktok className='w-6 h-auto hover:text-green-500'/>
            </li>
          </ul>
        </div>
         <div className='hidden md:flex flex-col items-center space-y-4 md:col-span-12'>
           <div className='text-white'>
             <RiBuilding2Line className='w-7 h-auto'/>
           
           </div>
           <p className='text-dark-light font-bold '>Copyright &copy; 2023. By keung</p>
         </div>
       </footer>
    </section>
  )
}

export default Footer
