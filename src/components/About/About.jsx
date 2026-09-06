import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/linkedin profile.jpeg'

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
                  'Backend Developer',
                  'Frontend Developer',
                  // 'App Developer',
                  // 'UI/UX Designer',
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
            <div>I'm Anil — a Software Engineer specializing in Java and Spring Boot Spring AI & RAG.</div>
            <div>Building APIs and backend solutions for healthcare and enterprise platforms across 40+ countries.</div>
            <div>Currently working as an Associate Software Engineer at Dure Technologies.</div>
            <div>Passionate about clean code, problem-solving, and continuous learning.</div>
          </p>
          {/*Resume Button*/}
          <a
            href="https://drive.google.com/file/d/1Sm4d7mc0IT-sDS_00_0g6SST-zKA_GW4/view?usp=sharing"
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
