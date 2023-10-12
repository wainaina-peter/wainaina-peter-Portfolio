import React from 'react'

function HeroSection() {
  return (
    <div id='hero' className='flex items-center justify-center flex-col py-20'>
        <div className='text-center'>
        <h1 className='text-5xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold font-inter dark:text-indigo-500'>Hello there👋🏽, my name is Peter Wainaina and I am a</h1>
        <img src='src\data\pictures\datascientist.png' />
        <br />
        <p className='text-md md:text-xl mb-3 text-gray-600 dark:text-gray-300'>I have a strong background in statistics and machine learning and I love exploring complex datasets and extracting meaningful insights to drive data-informed decisions.</p>
        <a href="#works" className='inline-block px-8 py-3 border-transparent text-base font-edium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md'>See my Works</a>
        </div>
    </div>
  )
}

export default HeroSection;