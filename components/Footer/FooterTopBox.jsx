import Link from 'next/link'
import React from 'react'

const FooterTopBox = () => {
  return (
    <div className='containerContacto'>
      <div className='bg-[#00003f] items-center cajaFlexHabilidades space-y-4'>
        <p className='text-gray-200 text-2xl text-center font-semibold'>Start a Project</p>
        <p className='text-gray-400 font-light text-center'>Interested in working with me? Contact me and we meet.</p>
        <Link href="/contact">
          <p className='text-center border-2 p-2 text-white bg-[#F8378C] cursor-pointer rounded-md max-w-[50%] mx-auto'>Say Hello</p>
        </Link>
        
      </div>
    </div>
  )
}

export default FooterTopBox