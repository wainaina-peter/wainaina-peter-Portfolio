import React from 'react'

function HeroSection() {
  return (
    <div id='hero' className='flex items-center justify-center flex-col py-20'>
        <div className='text-center'>
        <h1 className='text-5xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold font-inter dark:text-indigo-500'>Hello there, welcome to my Portfolio</h1>
        <p className='text-md md:text-xl mb-3 text-gray-600 dark:text-gray-300'>My name is Peter Wainaina, a passionate Software developer and Machine Learning enthusiast. I design web and mobile applications, write technical articles and journals, basically love writing code and have an avid interest in the field of Data Science, specifically Machine Learning. I love data and telling stories from it.</p>
        <a href="#works" className='inline-block px-8 py-3 border-transparent text-base font-edium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md'>See my Works</a>
        </div>
    </div>
  )
}

export default HeroSection;