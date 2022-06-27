import React from 'react'
import Image from 'next/image'
import ContactBg from '../../public/contactimg.png'
import Link from 'next/link'


const MiddleContact = () => {
  return (
    <div>
        <div className='flex justify-center '>
            <Image
              src={ContactBg}
              width={200} 
              height={200}
            />
        </div>
        <p className='text-center text-[#00004f] text-2xl p-4'>Thank you for taking the time to contact me. How can i help you?</p>
    </div>
  )
}

export default MiddleContact