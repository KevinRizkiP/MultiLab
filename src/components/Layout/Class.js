import React from 'react';

const Class = () => {
  return (
    <>
      <div id='classSection' className='jsutify-center mt-40'>
        <h1 className='text-black font-bold text-center tracking-wide text-5xl'>Class</h1>
        <div className='flex flex-col gap-10 justify-center items-center mt-20'>
          <div className='flex items-center justify-center gap-10'>
            <img alt='video' src='/IMG/video.png' className='w-52' />
            <div className='bg-orange-500 w-fit p-20 rounded-xl'>
              <h1 className='text-black font-bold text-3xl'>Sistem Multimedia</h1>
              <h1 className='font-semibold text-xl'>
                Mata kuliah yang mengajari kita bagaiman sistem multimedia <br />
                bekerja
              </h1>
            </div>
          </div>
          <div className='flex items-center justify-center gap-10'>
            <img alt='video' src='/IMG/phone.png' className='w-52' />
            <div className='bg-green-500 w-fit p-20 rounded-xl'>
              <h1 className='text-black font-bold text-3xl'>Pemrograman Mobile Lanjut</h1>
              <h1 className='font-semibold text-xl'>
                Mata kuliah yang mengajari kita bagaimana cara membuat <br /> tampilan aplikasi pada sistem operasi Android
              </h1>
            </div>
          </div>
          <div className='flex items-center justify-center gap-10'>
            <img alt='video' src='/IMG/camera.png' className='w-52' />
            <div className='bg-indigo-500 w-fit p-20 rounded-xl'>
              <h1 className='text-black font-bold text-3xl'>Grafika Komputer dan Animasi</h1>
              <h1 className='font-semibold text-xl'>
                Mata kuliah yang mengajari kita bagaimana cara membuat <br /> animasi 2D maupun 3D
              </h1>
            </div>
          </div>
          <div className='flex items-center justify-center gap-10'>
            <img alt='video' src='/IMG/notebook.png' className='w-52' />
            <div className='bg-yellow-400 w-fit p-20 rounded-xl'>
              <h1 className='text-black font-bold text-3xl'>Simulasi & Pemodelan</h1>
              <h1 className='font-semibold text-xl'>
                Mata kuliah yang mengajari kita bagaimana cara move on dari <br /> masa lalu
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Class;
