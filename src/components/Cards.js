import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Cards = () => {
  return (
    <>
      <div className="w-full flex gap-5 items-center px-64 justify-center">
        <div className="w-full">
          <h1 className="text-black font-bold text-right tracking-wide text-3xl">
            Angkatan 2019
          </h1>
          <h2 className="text-xl text-right text-gray-400 ">
            MULTIMEDIA LABORATORY ASSISTANT
          </h2>
          <h2 className="text-xl font-bold text-right text-gray-400 mt-3">
            Slide for more
          </h2>
        </div>
        <div className="w-full bg-gray-100 bg-opacity-50 mt-20">
          <Swiper
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div>
                <img src="/IMG/Raihan.png" alt="raihan" />
                <h1 className="text-black font-bold tracking-wide text-xl">
                  Muhammad Raihan
                </h1>
                <h2 className="text-lg tracking-widest text-gray-400 ">
                  COORDINATOR OF LAB
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/IMG/Vivi.png" alt="raihan" />
                <h1 className="text-black font-bold tracking-wide text-xl">
                  Vivi Donita Siahaan
                </h1>
                <h2 className="text-lg tracking-widest text-gray-400 ">
                  SECRETARY OF LAB
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/IMG/Yolan.png" alt="raihan" />
                <h1 className="text-black font-bold tracking-wide text-xl">
                  Yolanda Sundari
                </h1>
                <h2 className="text-lg tracking-widest text-gray-400 ">
                  TRAESEURER OF LAB
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/IMG/Yoan.png" alt="raihan" />
                <h1 className="text-black font-bold tracking-wide text-xl">
                  Yoan Arsyika
                </h1>
                <h2 className="text-lg tracking-widest text-gray-400 ">
                  INVENTORY MANAGER
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/IMG/Acel.png" alt="raihan" />
                <h1 className="text-black font-bold tracking-wide text-xl">
                  Rachel Tsania Mumtaz
                </h1>
                <h2 className="text-lg tracking-widest text-gray-400 ">
                  DIGITAL CREATIVE
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/IMG/Fauzi.png" alt="raihan" />
                <h1 className="text-black font-bold tracking-wide text-xl">
                  Achamd Fauzi Ilham
                </h1>
                <h2 className="text-lg tracking-widest text-gray-400 ">
                  HARDWARE SPECIALIST
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/IMG/Shertin.png" alt="raihan" />
                <h1 className="text-black font-bold tracking-wide text-xl">
                  Shertin Nhismi Hamidah
                </h1>
                <h2 className="text-lg tracking-widest text-gray-400 ">
                  SOFTWARE SPECIALIST
                </h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* 2020 */}
      <div className="w-full flex gap-5 items-center px-64 justify-center">
        <div className="w-full bg-gray-100 bg-opacity-50 mt-20">
          <Swiper
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div>
                <img src="/IMG/Raihan.png" alt="raihan" />
                <h1 className="text-black font-bold tracking-wide text-xl">
                  Muhammad Raihan
                </h1>
                <h2 className="text-lg tracking-widest text-gray-400 ">
                  COORDINATOR OF LAB
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/IMG/Vivi.png" alt="raihan" />
                <h1 className="text-black font-bold tracking-wide text-xl">
                  Vivi Donita Siahaan
                </h1>
                <h2 className="text-lg tracking-widest text-gray-400 ">
                  SECRETARY OF LAB
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/IMG/Yolan.png" alt="raihan" />
                <h1 className="text-black font-bold tracking-wide text-xl">
                  Yolanda Sundari
                </h1>
                <h2 className="text-lg tracking-widest text-gray-400 ">
                  TRAESEURER OF LAB
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/IMG/Yoan.png" alt="raihan" />
                <h1 className="text-black font-bold tracking-wide text-xl">
                  Yoan Arsyika
                </h1>
                <h2 className="text-lg tracking-widest text-gray-400 ">
                  INVENTORY MANAGER
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/IMG/Acel.png" alt="raihan" />
                <h1 className="text-black font-bold tracking-wide text-xl">
                  Rachel Tsania Mumtaz
                </h1>
                <h2 className="text-lg tracking-widest text-gray-400 ">
                  DIGITAL CREATIVE
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/IMG/Fauzi.png" alt="raihan" />
                <h1 className="text-black font-bold tracking-wide text-xl">
                  Achamd Fauzi Ilham
                </h1>
                <h2 className="text-lg tracking-widest text-gray-400 ">
                  HARDWARE SPECIALIST
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/IMG/Shertin.png" alt="raihan" />
                <h1 className="text-black font-bold tracking-wide text-xl">
                  Shertin Nhismi Hamidah
                </h1>
                <h2 className="text-lg tracking-widest text-gray-400 ">
                  SOFTWARE SPECIALIST
                </h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full">
          <h1 className="text-black font-bold text-left tracking-wide text-3xl">
            Angkatan 2019
          </h1>
          <h2 className="text-xl text-left text-gray-400 ">
            MULTIMEDIA LABORATORY ASSISTANT
          </h2>
          <h2 className="text-xl font-bold text-left text-gray-400 mt-3">
            Slide for more
          </h2>
        </div>
      </div>
    </>
  );
};

export default Cards;
