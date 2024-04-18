import React from 'react';
import SectionTitle from './SectionTitle';

function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
        <div className='w-full md:w-6/12'>
            <SectionTitle>A little more about me</SectionTitle>
            <p className='text-md text-gray-600 dark:text-gray-300'>Aside from writing code, I also write Technical articles around my tech stack and other interesting stacks I come across. You can have a look at my articles on Medium.</p>
            < br/>
            <a href="https://drive.google.com/drive/folders/1G-cSQW3kKllv9QM73oO9Wakhu5xWeqxw" className='block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underLine hover:text-indigo-500 dark:hover:text-indigo-500'>Communication skills Capstone Project Google Drive</a>
            < br/>
            <h2 className='text-md text-gray-600 dark:text-gray-300'>Below are links to my socials:</h2>
            <ul><a href='https://www.linkedin.com/in/peter-wainaina-94b0351a8' className='block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underLine hover:text-indigo-500 dark:hover:text-indigo-500'> LinkedIn </a></ul>
            <ul><a href='https://medium.com/@wainaina.pierre' className='block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underLine hover:text-indigo-500 dark:hover:text-indigo-500'> Medium </a></ul>
            <ul><a href='https://twitter.com/pierre_wainaina' className='block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underLine hover:text-indigo-500 dark:hover:text-indigo-500'> Twitter </a></ul>
            <a href="mailto:wainaina.pierre@gmail.com" className='block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underLine hover:text-indigo-500 dark:hover:text-indigo-500'>wainaina.pierre@gmail.com</a>
        </div>
        <div>
            <img src={'https://avatars.githubusercontent.com/u/80960028?v=4'} alt="Peter Wainaina" className='w-full md:w-6/12 rounded-lg object-cover'/>
        </div>
    </div>
  )
}

export default About;
