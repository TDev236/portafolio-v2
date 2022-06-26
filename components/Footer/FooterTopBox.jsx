import React from 'react'

const FooterTopBox = () => {
  return (
    <div className='absolute  w-[80%] pt-10 rounded-xl bottom-[70%] md:bottom-[70%] text-center space-y-4 bg-[#00002f] left-[10%] z-10'>
      <div className='p-3 mb-6'>
        <p className='pt-4 text-white text-4xl font-bold'>Start a project</p>
        <p className='font-thin pt-4 text-white'>Insterested in working with toether? We can have a videocall an meet.</p>
        <button className='border-4 mt-4 text-white p-4 border-[#F8378C] font-bold rounded-full'>{`Let's do tis`}</button>
      </div>
    </div>
  )
}

export default FooterTopBox