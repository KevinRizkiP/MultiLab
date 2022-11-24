import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='bg-zinc-800 text-white p-10 content-start items-center grid grid-cols-3 gap-10'>
        <div className='w-full'>
          <h1 className='font-bold text-5xl mb-6'>Contact Us</h1>
          <p className='w-3/4'>Lt. 3, Menara PLN, Jl. Lkr. Luar Barat, RT.1/RW.1, Duri Kosambi, Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11750 </p>
        </div>
        <div className='w-full'>
          <h1 className='font-bold text-3xl mb-5'>Links</h1>
          <ul>
            <li>
              <a href='#homeSection'>Home</a>
            </li>
            <li>
              <a href='#teamSection'>Team</a>
            </li>
            <li>
              <a href='#classSection'>Class</a>
            </li>
            <li>
              <a href='#announcementSection'>Announcement</a>
            </li>
            <li>
              <a href='#contactSection'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='w-full'>
          <h1 className='text-3xl font-bold mb-5'>Get to know us</h1>
          <div>
            <h1>Instagram</h1>
          </div>
          <div>
            <h1>Youtube</h1>
          </div>
          <div>
            <h1>multimedia@itpln.ac.id</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
