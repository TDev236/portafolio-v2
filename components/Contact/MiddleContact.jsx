import React from 'react'
import Image from 'next/image'
import { BiCabinet } from 'react-icons/bi'
import Link from 'next/link'

const MiddleContact = () => {
  return (
    <div>
        <div className='flex justify-center -mt-10'>
            <img
              className='h-40 absolute '
              src="https://firebasestorage.googleapis.com/v0/b/portafolio-tiffo.appspot.com/o/contact.PNG?alt=media&token=98fcd365-1df7-45af-beb0-dcfb57a4a902"          
            />
            <img 
            className='h-60'
            src="https://firebasestorage.googleapis.com/v0/b/portafolio-tiffo.appspot.com/o/contact-bg.png?alt=media&token=a40c8816-f0eb-4dc3-bf8e-b34858907a92" alt="" />
        </div>
        <p className='text-center text-2xl p-4'>Thank for taking the time to reach me. How can i help you today?</p>
    </div>
  )
}

export default MiddleContact