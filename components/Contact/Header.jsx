import Link from 'next/link'
import React from 'react'
import { BiHomeSmile, BiCabinet } from 'react-icons/bi'

const Header = () => {
  return(
    <div className=''>
        <div>
        <Link href="/">
            <BiHomeSmile/>
        </Link>
        <Link href="/home">
          <BiCabinet className='cursor-pointer '/>
        </Link>
        </div>
        
    </div>
  )
}

export default Header