import React from 'react'
import WorkCard from './WorkCard'
import { projects } from '../../data'
import FooterTopBox from '../Footer/FooterTopBox'

const RecentWork = () => {
  return (
    <div className=' border-b-4 border-gray-300 shadow-xl mb-[40%] md:mb-[20%]'>
        <p className='recentWorkTitle'>My Recent Work</p>
        <p className='text-lg font-thin text-center pb-6'>{`Aqui Algunos de mis proyectos y diseños `}</p>
        <div className='m-4 grid sm:grid-cols-2 lg:grid-cols-3 '>
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
  )
}

export default RecentWork