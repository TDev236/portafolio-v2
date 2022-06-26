import React from 'react'
import Image from 'next/image'
import Logo from '../../public/t.png'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { SiTailwindcss } from 'react-icons/si'
const FooterMain = () => {
  return (
    <div className='bg-[#F8378C] p-10'>
      <p className='text-center mt-[40%] sm:mt-[20%] lg:mt-[10%] p-10 font-rocks text-xl text-white'>ONCE YOU START THE CHANGE IS UNSTABABLE.</p>
      <div className='flex  space-x-2 justify-center mt-10 px-4 py-6'>
        <FaTwitter className='iconFooter'/>
        <FaInstagram className=' iconFooter'/>
        <AiOutlineMail className='iconFooter'/>
      </div>
      <div className='flex flex-col p-4'>
          <p className='flex items-center mx-auto font-bold text-gray-200'>Develop by me <span className='px-2 text-green-500 text-2xl'> tiffani </span></p>
          <p className='flex font-semibold items-center mt-10 p-2 mx-auto text-gray-200'>Made with <SiTailwindcss className='text-gray-300 hover:text-blue-400 text-3xl px-1'/> </p>
        </div>
    </div>
  )
}

export default FooterMain