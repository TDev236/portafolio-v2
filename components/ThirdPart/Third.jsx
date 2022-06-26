import React from 'react'
import {FaPencilRuler} from 'react-icons/fa'
import {RiCodeBoxLine } from 'react-icons/ri'

const Third = () => {
  return (
    <div className='md:flex mx-4 md:mx-8'>

        <div className='flex flex-col mx-auto mt-[-14%] md:mt-[-4%] rounded-xl z-50 bg-white pb-12 md:px-6 items-center border-2 md:w-[500px]'>
            <FaPencilRuler className='text-4xl mt-10 text-[#F8378C]  '/>
            <p className='titleBox'>Designer</p>
            <p className='subTextBox'>I appreciate clean design and good interactions</p>
            <div className='aptitudesBox'>
                <p className='text-[#F8378C] font-semibold text-lg'>Things that i like designing:</p>
                <p className='font-thin text-lg'>Brands, UI, Web, Mobile, Apps, Logos</p>
            </div>
            <div>
                <p className='text-[#F8378C] font-semibold text-md'>Design Tool:</p>
                <p className='font-thin text-lg text-center'>Figma</p>
            </div>
        </div>

        <div className='flex flex-col border-2 md:mt-[-4%] justify-center items-center bg-white px-6 rounded-xl md:w-[500px] pb-12'>
            <RiCodeBoxLine className='mt-10 text-5xl text-[#F8378C] '/>
            <p className='titleBox'>Front-end Developer</p>
            <p className='subTextBox'>I like to code things from scratch, and enjoy bringing ideas to life.</p>
            <div className='aptitudesBox'>
                <p className='text-[#F8378C] font-semibold text-lg'>Languges | speak:</p>
                <p className='font-thin text-lg'>HTML, Css, Sass, Less, JavaScript, Typescript</p>
            </div>
            <div>
                <p className='text-[#F8378C] font-semibold text-md'>Frameworks | Libraries</p>
                <div className='text-center space-y-2'>
                    <p className='mt-4'>React Js</p>
                    <p>Next Js</p>
                    <p>Styled Components</p>
                    <p>API Conections</p>
                    <p>Tailwind Css</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Third