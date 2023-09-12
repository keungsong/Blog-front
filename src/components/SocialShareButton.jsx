import React from 'react'
import {AiFillFacebook,AiOutlineTwitter,AiOutlineWhatsApp} from 'react-icons/ai'

const SocialShareButton = ({url, title}) => {
  return (
    <div className='w-full flex justify-between'>
       <a target='_blank' rel='noreferrer' href={`https://facebook.com/dialog/share?app_id=&disply=popup&href=${url}`}>
        <AiFillFacebook className='text-[#3b5998] w-12 h-auto'/>
       </a>
       <a target='_blank' rel='noreferrer' href={`https://twitter.com/intent/tweet?url=${url}`}>
        <AiOutlineTwitter className='text-[#00acee] w-12 h-auto'/>
       </a>
       <a target='_blank' rel='noreferrer' href={`https://api.whatsapp.com/send/?text=${url}`}>
        <AiOutlineWhatsApp className='text-[#25D366] w-12 h-auto'/>
       </a>
    </div>
  )
}

export default SocialShareButton
