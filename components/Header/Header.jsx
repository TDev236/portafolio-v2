import React, {useState} from 'react'
import Image from 'next/image'
import Logo from '../../public/t.png'
import  Link  from 'next/link'

const Header = () => {
  return (
    <div className='w-[80%] mx-auto'>
      <div className='flex justify-between items-center pt-4'>
        <Link href="/">
          <p className='font-rocks text-[#00005f] text-3xl'>{`<t/>`}</p>
        </Link>
        <Link
          href='/contact'
        >
          <p className='font-bold shadow-sm text-xl hover:bg-[#F8378C] hover:text-white cursor-pointer p-2 rounded-lg text-[#F8378C]'>{`Let's Meet`}</p>
        </Link>
      </div>
      
        
    </div>
  )
}

export default Header