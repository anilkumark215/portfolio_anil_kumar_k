import React from 'react'
import { FaFacebook ,FaTwitter , FaLinkedin ,FaInstagram ,FaYoutube} from 'react-icons/fa';
import { Icons } from 'react-toastify';

const Footer = () => {
  //smooth scroll
  const handleScroll = (sectionId) =>{
    const section = document.getElementById(sectionId);
      if(section) {
        section.scrollIntoView({behavior : "smooth"});
      }
  };

  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'> 
     <div className='conyainer mx-auto text-center'>
       <h2 className='text-xl font-semibold text-purple-500'>
        ANIL KUMAR KAVALI
       </h2>
       {/*Navigation links  */}
       <h2>
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
          {[
            {name:"About", id:"about"},
            {name:"Skills", id:"skills"},
            {name:"Experience", id:"experience"},
            {name:"Work", id:"work"},
            {name:"Education", id:"education"},

       
          ].map((item ,index) => (
            <button
            key = {index}
            onClick={() => handleScroll(item.id)}
            className='hover:text-purple-500 text-sm sm:text-base my-1'
            >
              {item.name}

            </button>
          ))
          
          }

        </nav>
       </h2>
       {/*Socil meadia Icons */}
       <div className='flex flex-wrap justify-center space-x-4 mt-6'>
        {[     
           {icon: <FaFacebook />, link:"https://www.linkedin.com/in/k-anil-kumar/"},
           {icon: <FaTwitter />, link:"https://www.linkedin.com/in/k-anil-kumar/"},
           {icon: <FaLinkedin />, link:"https://www.linkedin.com/in/k-anil-kumar/"},
           {icon: <FaInstagram />, link:"https://www.linkedin.com/in/k-anil-kumar/"},
           {icon: <FaYoutube />, link:"https://www.linkedin.com/in/k-anil-kumar/"},

        ].map((item ,index) =>(
          <a 
           key ={index}
           href={item.link}
           target='_blank'
           rel='noopener noreferrer'
           className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110'
          >
            {item.icon}
            
          </a>
        ))}

       </div>
       {/* copy right text */}
       <p className='text-sm text-gray-400 mt-6'>
        @ 2025 ANIL KUMAR K .All rights reserved.
       </p>
     </div>
    </footer>
  )
}

export default Footer
