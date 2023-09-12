import React from 'react'
import { images, stables } from '../../../constants'

import { Link } from 'react-router-dom'

const SuggestedPosts = ({className, header, posts= [], tags}) => {
  return (
    <div className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`} >
        <h2 className='font-roboto font-medium text-dark-hard md:text-xl'>{header}</h2>
         <div className='grid grid-y-5 mt-3 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1'>
            {posts.map((item)=>(
                <div key={item._id} className='flex space-x-3 flex-nowrap items-center'>
                   <img 
                   className='aspect-square py-1 object-cover rounded-lg w-1/5' 
                   src={item?.photo ? stables.UPLOAD_FOLDER_BASE_URL + item?.photo : images.samplePostImage} 
                   alt={item.title} />
                   <div className='font-roboto text-sm text-dark-hard text-medium'>
                     <h3 className='text-sm font-roboto text-dark-hard font-medium md:text-base lg:text-lg'>
                      <Link to={`/blog/${item.slug}`}>
                       {item.title}
                      </Link>
                      
                      </h3>
                     <span className='text-xs opacity-60'>{new Date(item.createdAt).toLocaleDateString("en-US",{
                        day:"numeric",
                        month:"short",
                        year:"numeric", 
                     })}</span>
                   </div>
                </div>
            ))} 
         </div>
         <h2 className='text-dark-hard font-roboto mt-8 md:text-xl'>Tags</h2>
         {
          tags.length === 0 ? <p className='text-slate-400 mt-2 text-sm'>There is no tags for this post!</p> : <div className='flex flex-wrap gap-x-2 gap-y-2 mt-4 '>
          {
              tags.map((item, index) =>(
                <Link
                key={index}
                to="/" 
                className='inline-block rounded-md px-3 py-1.5 bg-primary font-roboto text-xs text-white md:text-sm'>{item}</Link>
              ))
          }
       </div>
         }
         
    </div>
  )
}

export default SuggestedPosts
