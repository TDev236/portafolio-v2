import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { SiTailwindcss } from 'react-icons/si'
const FooterMain = () => {
  return (
    <div className='pt-4'>
      <p className='text-center  font-rocks text-xl text-white pb-4'>ONCE YOU START THE CHANGE IS UNSTABABLE.</p>
      <div className='flex  space-x-2 justify-center'>

        <a href="https://api.whatsapp.com/send?phone=573175912109&text=%F0%9F%91%8B">
          <FaWhatsapp className='iconFooter'/>
        </a>

        <a href="https://github.com/tdev236">
          <FaGithub className='iconFooter'/>
        </a>

        <Link href="/contact">
          <AiOutlineMail className='iconFooter'/>
        </Link>

      </div>
      <div className='flex flex-col p-4 mt-10'>
          <p className='flex items-center mx-auto font-bold text-gray-200'>Develop by me <span className='px-2 text-green-500 text-2xl'> tiffani </span></p>
          <p className='flex font-semibold items-center p-2 mx-auto text-gray-200'>Made with <SiTailwindcss className='text-gray-300 hover:text-blue-400 text-3xl px-1'/> </p>
        </div>
    </div>
  )
}

export default FooterMain