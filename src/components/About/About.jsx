import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/newcrop.jpg'

const About = () => {
  return (
    <section
      id='about'
      className='py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        <div className='md:w-1/2 text-center mt-8 md:mt-0'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>

          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight'>
            ANIL KUMAR K
          </h1>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>

            <span className="text-[#8245ec]">
              <Typewriter
                words={[

                  'Fullstack Developer',
                  'Frontend Developer',
                  'Backend Developer',
                  'App Developer',
                  'UI/UX Designer',
                  'Coder',
                ]}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a recent Information Technology graduate passionate about full stack development.
            Skilled in Java, React, Spring Boot, and building user-friendly web apps.
            I have built projects like Sorting Visualizer, Instagram Clone, and Doctor-Patient Portal.
            I am looking for software development roles to learn, grow, and build impactful solutions.


          </p>
          {/*Resume Button*/}
          <a
            href="https://drive.google.com/file/d/1gNvhCIVDkRyVOJzuNXLD6CK2v00stQNB/view?usp=drive_link"
            target=''
            rel='noopener noreferrer'
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 scale-105'
            style={{
              backgrond: 'linear-gradient(90deg, #8245ec, #a855f7',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',

            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/*Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full">
            <img src={profileImage} alt="ANIL KUMAR K"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />

          </Tilt>

        </div>
      </div>
    </section>
  );
};

export default About;
