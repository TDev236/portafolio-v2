import React from 'react'
import {FaPencilRuler} from 'react-icons/fa'
import {RiCodeBoxLine } from 'react-icons/ri'

const Third = () => {
  return (
    <div className='bg-blue-500 pb-10'>

        {/**CONTAINER HABILIDADES THIR BOX */}
        <div className='containerHabilidades'>
            {/**Flex box habilidades */}
            <div className='cajaFlexHabilidades'>
                {/**Card Primera Habilidad */}
            <div className='cardHabilidades md:border-r-2 pr-2'>
                <FaPencilRuler className='styleIcon'/>
                <p className='titleBox'>Designer</p>
                <p className='subTextBox'>I appreciate clean design and good interactions</p>
                <div className=''>
                    <p className='text-[#F8378C] font-semibold text-lg mb-4'>Things that i like designing:</p>
                    <p className='font-ligth text-lg text-gray-500'>Brands, UI, Web, Mobile, Apps, Logos</p>
                </div>
                <div>
                    <p className='text-[#F8378C] font-semibold text-md mt-4'>Design Tool:</p>
                    <p className=' font-ligth text-gray-500  text-center mb-10'>Figma</p>
                </div>
            </div>

            {/**Card Segunda Habilidad */}
            <div className='cardHabilidades'>

                <RiCodeBoxLine className='styleIcon'/>

                <p className='titleBox'>Front-end Developer</p>
                <p className='subTextBox'>I like to code things from scratch, and enjoy bringing ideas to life.</p>

                <div className=''>
                    <p className='text-[#F8378C] font-semibold text-lg mb-4'>Languges | speak:</p>
                    <p className='font-ligth text-lg text-gray-500'>HTML, Css, Sass, Less, JavaScript, Typescript</p>
                </div>

                <div className='mb-4'>
                    <p className='text-[#F8378C] font-semibold text-md mt-4'>Frameworks | Libraries</p>
                    <div className='text-gray-500 font-ligth'>
                        <p className=''>React Js</p>
                        <p>Next Js</p>
                        <p>Styled Components</p>
                        <p>API Conections</p>
                        <p>Tailwind Css</p>
                    </div>
                </div>

            </div>
            </div>
            

        </div>

    </div>
  )
}

export default Third