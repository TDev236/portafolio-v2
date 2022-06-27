import React from 'react'
import Image from 'next/image'
import HeroSvg from '../../public/hero.svg'
import BgMe from '../../public/heroimg.png'

const Hero = () => {
  return (
    <div className='w-full'>

        <div className=' md:grid grid-cols-2 relative'>
          
          <div className='pt-10 mt-5 flex flex-col justify-center pl-4 md:pl-8'>
            <p className='text-3xl pt-10 font-bold md:text-4xl lg:text-5xl text-[#00005f]'>Designer & Front-end Developer</p>
            <p className='text-gray-500 pt-5 pr-2'>I design and code amazing simple things, and i love it.</p>
          </div>

          <div className='flex md:pl-10 '>
            <Image
              src={BgMe}
              className="rounded-xl md:rounded-xl"
              alt='Hero'
            />
          </div>

        </div>

        <div className='relative flex justify-center'>

          <Image
            className=''
            src={HeroSvg}
          />

        </div>
        
    </div>
  )
}

export default Hero