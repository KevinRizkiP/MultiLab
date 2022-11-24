import React from 'react';
import Cards from '../Cards';
//Kalau Bisa Public gimana ya bang biar dua import ini berlaku untuk global ?

const Teams = () => {
  return (
    <>
      <div id='teamSection' className='w-full mt-16'>
        <h2 className='text-3xl tracking-normal text-center font-bold text-gray-400'>Multimedia Laboratory</h2>
        <h1 className='text-black font-bold text-center tracking-wide text-5xl mt-5'>Team</h1>
        <div className='flex justify-center mt-10 items-center gap-10'>
          <img src='/IMG/buYasni.png' alt='buyasni' />
          <div>
            <h1 className='text-black font-bold text-center tracking-wide text-3xl'>Yasni Djamain, M.Kom</h1>
            <h2 className='text-xl text-center  text-gray-400'>HEAD OF MULTIMEDIA LABORATORY</h2>
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
