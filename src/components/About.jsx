import React from 'react';
import SectionTitle from './SectionTitle';

function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
        <div className='w-full md:w-6/12'>
            <SectionTitle>About me</SectionTitle>
            <p className='text-md text-gray-600 dark:text-gray-300'>Aside from being in Tech, I am a lover of life, good food and cars. I like flexing my imagination well past the point of normal, being my authentic self and basically want to leave the world a better place than I found it.</p>
            <a href="mailto:wainaina.pierre@gmail.com" className='block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underLine hover:text-indigo-500 dark:hover:text-indigo-500'>wainaina.pierre@gmail.com</a>
        </div>
        <div>
            <img src={'https://avatars.githubusercontent.com/u/80960028?v=4'} alt="Peter Wainaina" className='w-full md:w-6/12 rounded-lg object-cover'/>
        </div>
    </div>
  )
}

export default About;