import React from 'react'
import Image from 'next/image'

const WorkCard = ({image, weblink, description}) => {
  return (
    <div className='cursor-pointer my-4'>

      <div className='relative'>
          <Image 
            src={image}
            alt=""
            width={500}
            height={300}
            className="w-full h-auto block "
          />

          <div className='absolute top-0 left-0 w-full h-full hover:bg-[#00004f]/80 opacity-0 hover:opacity-100 text-gray-200 rounded-xl'>
            <div className='h-full flex flex-col items-center justify-center text-sm'>
              <p className=''>{description}</p>
              <p className='bg-[#F8378C] p-2 text-white mt-3 rounded-xl hover:transition-all'><a href={weblink}>Visit Page</a></p>
            </div>
            
          </div>

      </div>

    </div>
  )
}

export default WorkCard