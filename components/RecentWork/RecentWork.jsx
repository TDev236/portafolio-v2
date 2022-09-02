import React from 'react'
import WorkCard from './WorkCard'
import { projects } from '../../data'
import FooterTopBox from '../Footer/FooterTopBox'

const RecentWork = () => {
  return (
    <div className=''>
      {/**Container Recent work */}
      <div>
        <div className='pt-10'>
          <p className='bg-[#F8378C] rounded-xl text-center text-gray-200 text-2xl font-rocks p-4 max-w-[80%]  mx-auto md:max-w-[60%]'>My Recent Work</p>
          <p className='text-gray-500 text-center py-10'>{`Here Some of My Test Projects`}</p>
        </div>
        {/**Grid Container*/}
        <div className='w-[80%] md:grid md:grid-cols-3 gap-0 mx-auto  rounded-xl mb-20'>
          {projects.map((project) => (
            <WorkCard
              key={project.id}
              image={project.image}
              weblink={project.weblink}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecentWork