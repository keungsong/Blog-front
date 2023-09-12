import React from 'react'
import { images, stables } from '../constants'
import {BsCheck} from "react-icons/bs"
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const ArticleCard = ({post, className}) => {
  return (
    <div className= {`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`} >
      <Link to={`/blog/${post.slug}`}>
          <img src={post.photo ? stables.UPLOAD_FOLDER_BASE_URL + post.photo : images.samplePostImage} alt="title" className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60'/>
      </Link>
      
       <div className='p-5'>
       <Link to={`/blog/${post.slug}`}>
          <h2 className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]'>{post.title}</h2>
          <p className='text-sm text-dark-light mt-3 md:text-lg'>{post.caption}</p>
       </Link>
          
          <div className='flex justify-between flex-nowrap items-center mt-6'>
              <div className='flex items-center gap-x-2 md:gap-x-2.5'>
                <img 
                src={post.user.avatar ? stables.UPLOAD_FOLDER_BASE_URL + post.user.avatar : images.userImage} 
                alt="User profile" 
                className='w-9 h-9 rounded-full md:w-10 md:h-10' />
                  <div className='flex flex-col'>
                     <h4 className='font-bold text-dark-soft text-sm md:text-base'>{post.user.name}</h4>

                     <div className='flex items-center gap-x-2'>
                       <span className={`${post.user.verified ? "bg-[#36B37E]" : "bg-red-500"} w-fit bg-opacity-20 p-1.5 rounded-full`}>
                        {
                          post.user.verified ?  <BsCheck className='w-2 h-2 text-[#36B37E]'/> : <AiOutlineClose className='w-2 h-2 text-red-500'/>
                        }
                       </span>
                       <span className='text-dark-light text-xs md:text-sm'>{post.user.verified ? "Verified": "Unverified"} Writer</span>
                     </div>
                  </div>
              </div>
              <span className='font-bold text-dark-light text-sm md:text-base'>{new Date(post.createdAt).getDate()} {new Date(post.createdAt).toLocaleString("default",
              {month: "long"})}</span>
          </div>
       </div>
    </div>
    
  );
  }

export default ArticleCard
