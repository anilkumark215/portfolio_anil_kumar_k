import React from 'react'
import {SkillsInfo} from '../../constants'
import Tilt from 'react-parallax-tilt'

const Skills = () => {
  return (
    <section 
    id='skills'
    className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom'
     >
     {/*Section Title */}
     <div className='text-center mb-8'>
      <h2 className='text-3xl sm:text-4xl font-bold text-white'>SKILLS</h2>
      <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2'></div>
      <p className='text-gray-400 mt-4 font-semibold'> A collection of my technical skills and expertise honed through various projects and experiences</p>
     </div>
     {/*Skill Categories*/}
     <div className='flex flex-wrap gap-1 lg:gap-5 py-10 justify-between'>
     {SkillsInfo.map((category) =>(
      <div 
       key = {category.title}
       className = 'bg-gray-900 backdrop-blur-md sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-n2xl boder border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'
       >
        <h3 className='text-2xl sm:text-3xl font-semibold text-gray-400 text-center'>
          {category.title}

        </h3>

        {/*Skill Item  - 3 per row on lager screens */}
         
         <Tilt 
         className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]">

          <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 w-full '> 
          {category.skills.map((skill) => (
          
          <div
          key={skill.name}
          className='flex items-center justify-center space-x-1 bg-transparent border-2 border-gray-700 rounded-3xl py-6 px-3 sm:py-3 sm:px-8 text-center'
          >
          <img
          src={skill.logo}
          alt={`{skill.name} logo `}
          className='w-4 h-4 sm:w-6 sm:h-6'
          ></img>
          <span className='text-xs sm:text-sm text-gray-300'>
            {skill.name}
          </span>
          
          </div>
           
          ))}

        </div>
       
        </Tilt>
         </div>
        
     ))}
     </div>
    </section>
  )
}

export default Skills
