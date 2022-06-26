import React from 'react'

const WorkCard = ({image, weblink, description}) => {
  return (
    <div className='relative shadow-xl my-4 rounded-xl mx-auto '>
      <img
        src={image}
        alt=""
        className="w-full h-auto block rounded-xl"
      />
      <div className='absolute text-transparent hover:text-white hover:bg-black opacity-80 w-full h-full top-0 left-0 rounded-xl'>
        <p className='whitespace-normal text-md font-bold flex justify-center items-center h-full text-center'>{description}</p>
        <p className='
          absolute bottom-[30%] 
          flex items-center justify-center 
          left-[40%]  hover:bg-white  p-2 hover:text-[#F8378C] rounded-xl w-auto
          '><a href={weblink}>Visit Page</a></p>
      </div>
      
    </div>
  )
}

export default WorkCard