import React from 'react';
import { Link } from 'react-router-dom';

const Announcement = () => {
  return (
    <>
      <div id='announcementSection' className='px-64 mt-40 mb-40'>
        <div className='bg-zinc-800 text-white p-10 justify-center items-center rounded-xl'>
          <h1 className='text-4xl font-bold text-center'>Announcement</h1>
          <div className='flex justify-center items-center gap-10 mt-20'>
            <img alt='poster' src='/IMG/workshop.png' />
            <div>
              <h1 className='text-2xl font-semibold'>WORKSHOP : "Making 3D Characters For Beginner Using Cinema 4D and Octane Render"</h1>
              <p className='text-lg'>
                Wazzap IT Students!👩‍💻🧑‍💻 <br /> <br /> 2023 katanya bakal ada resesi , trus gimana nanggepinnya? caranya yaitu ningkatin skill kamu dengan ikutan workshop! apalagi kamu yang tertarik
                ingin menjadi seorang Graphic Designer?  Animator? atau ingin membuat 3D sendiri? zaman sekarang animasi itu adalah media paling banyak di gunakan untuk melakukan branding,
                menyampaikan informasi, atau bahkan menghasilkan uang!🤩🥳 <br />
                <br />
                eits jangan takut kalo kamu belum bisa dasarnya! karna kita sama sama belajar untuk beginner kok! gaada kata terlambat untuk belajar!
                <br />
                <br />
                Ini waktu yang tepat buat kamu join di Workshop online yang diselenggarakan oleh Multimedia Laboratory!!! <br />
                <br />
                ...
              </p>
              <Link>
                <button className=' text-white font-bold text-lg rounded-xl text-center float-right'>Selengkapnya</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcement;
