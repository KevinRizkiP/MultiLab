import React, { useEffect } from 'react';
import Cards from '../Cards';
//Kalau Bisa Public gimana ya bang biar dua import ini berlaku untuk global ?
import AOS from 'aos';
import 'aos/dist/aos.css';
const Teams = () => {
  // Use Effect AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div id='teamSection' className='w-full mt-16'>
        <h2 data-aos='fade-up' data-aos-easing='ease-in-out' data-aos-duration='600' className='text-3xl tracking-normal text-center font-bold text-gray-400'>
          Multimedia Laboratory
        </h2>
        <h1 data-aos='fade-up' data-aos-easing='ease-in-out' data-aos-duration='600' className='text-black font-bold text-center tracking-wide text-5xl mt-5'>
          Team
        </h1>
        <div className='flex justify-center mt-10 items-center gap-10'>
          <img data-aos='fade-right' src='/IMG/buYasni.png' alt='buyasni' />
          <div>
            <h1 data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-duration='600' className='text-black font-bold text-center tracking-wide text-3xl'>
              Yasni Djamain, M.Kom
            </h1>
            <h2 data-aos='fade-left' data-aos-easing='ease-in-out' data-aos-duration='600' data-aos-delay='100' className='text-xl text-center  text-gray-400'>
              HEAD OF MULTIMEDIA LABORATORY
            </h2>
          </div>
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Teams;
