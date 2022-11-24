import React from 'react';
const About = () => {
  return (
    <>
      <div id='homeSection' className='hidden lg:flex justify-center animate-fadeIn'>
        <img src='/IMG/Frame1.png' alt='/' />
      </div>
      <div className='flex lg:max-w-7xl justify-between mx-auto items-center animate-fadeIn'>
        <hr class='my-8 h-px w-96 bg-gray-700 border-2' />
        <div className='flex gap-5 '>
          <a href='https://www.instagram.com/multimediaitpln/' className='border rounded-full p-3 hover:border-black'>
            <img alt='ig' src='/IMG/instagram.png' />
          </a>
          <a href='$' className='border rounded-full p-3 hover:border-black'>
            <img alt='ig' src='/IMG/youtube.png' />
          </a>
          <a href='$' className='border rounded-full p-3 hover:border-black'>
            <img alt='ig' src='/IMG/sms.png' />
          </a>
        </div>
        <hr class='my-8 h-px w-96 bg-gray-700 border-2' />
      </div>
    </>
  );
};

export default About;
