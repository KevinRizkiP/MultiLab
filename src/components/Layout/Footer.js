import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-zinc-800 text-white p-10 content-start items-center grid grid-cols-3">
        <div className="w-full">
          <h1>Contact Us</h1>
          <p>
            Lt. 3, Menara PLN, Jl. Lkr. Luar Barat, RT.1/RW.1, Duri Kosambi,
            Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota
            Jakarta 11750{" "}
          </p>
        </div>
        <div className="w-full">
          <h1>Links</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Class</a>
            </li>
            <li>
              <a href="#">Announcement</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h1>Get to know us</h1>
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
