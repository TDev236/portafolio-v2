import React from 'react'
import Me from '../../public/me.png'
import Image from 'next/image'
import HeroSvg from '../../public/hero.svg'
import BgMe from '../../public/mebg.png'

const Hero = () => {
  return (
    <div className='flex flex-col  justify-center items-center'>
        <div className='mt-10 pt-10'>
            <p className='pl-8 font-bold text-3xl mb-6 md:text-5xl text-[#00005f]'>Designer & Front-end Developer</p>
            <p className='text-sm text-center text-gray-500 md:text-lg'>I design and code amazing simple things, and i love it.</p>
        </div>
        <div className='relative'>
            <Image
              className=''
              src={BgMe}
              alt="me"
            />
            <div className='absolute top-[6%] left-[10%] mx-auto'>
              <Image
                className=''
                src={Me}
                layout='fixed'
                width={400}
                height={400}
                alt="me"
              />
            </div>
        </div>

        <div className='mt-8 ml-6'>
          <Image
            className=''
            src={HeroSvg}
          />
        </div>
        
    </div>
  )
}

export default Hero