import Link from 'next/link'
import React from 'react'

const HeaderContact = () => {
  return (
    <div className='h-[50px] px-4'>
        <div className=' py-4'>
            <Link href="/">
            <p className='cursor-pointer text-3xl text-[#00005f] font-rocks'>{`<t/>`}</p>
        </Link>
      </div>
    </div>
  )
}

export default HeaderContact