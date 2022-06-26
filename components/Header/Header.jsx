import React, {useState} from 'react'
import Image from 'next/image'
import Logo from '../../public/t.png'
import  Link  from 'next/link'

const Header = () => {
  return (
    <div className='flex items-center justify-between px-4 md:px-12   pt-3'>
      <Link href="/home">
        <p className='font-rocks text-4xl text-[#00005f]'>{`<t/>`}</p>
      </Link>
        
        <a
          href='/contact'
        >
          <p className='buttonHeader'>{`Let's Meet`}</p>
        </a>
        
    </div>
  )
}

export default Header