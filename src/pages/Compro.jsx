import React from 'react';
import Navbar from '../Components/Navbar';

const Compro = () => {
  return (
    <div>
      < Navbar />
      {/* Tulisan Gede dan Carousel Dokumentasi */}
      <div className='text-center'>
        <h1 className='text-3xl font-bold'>Multimedia Laboratory.</h1>
        <h4>Multimedia Laboratory merupakan laboratorium komputer Fakultas Telematika Energi Institut Teknologi PLN yang digunakan untuk menunjang perkuliahan khususnya untuk mata kuliah yang berbasis Multimedia.</h4>
      </div>
      <div className='docSlide'>

      </div>
    </div>
  );
};

export default Compro;
