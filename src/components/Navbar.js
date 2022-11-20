import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const stickyNav = "w-full font-sans";
const twNav =
  "hidden lg:flex lg:w-full mx-auto items-center justify-center text-center text-lg py-4 px-64";
const twMobileNav = "flex mx-auto justify-between px-4 py-2";
const twUlNavMobile = "flex flex-col w-full";
const twLiNavMobile =
  "flex flex-col w-full mx-auto font-bold text-black text-2xl pt-6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [effect, setEffect] = useState(false);

  return (
    <>
      <div className={stickyNav}>
        <div className={twNav}>
          <div className="flex-none">
            <Link to="/">
              <img src="/IMG/LogoLabMulti.png" alt="Logo" />
            </Link>
          </div>

          <ul className="grow items-center flex justify-center gap-10">
            <li className="cursor-pointer">
              <Link
                to=""
                className="active hover:border-b-2 hover:border-black"
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to=""
                className="active hover:border-b-2 hover:border-black"
              >
                Team
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to=""
                className="active hover:border-b-2 hover:border-black"
              >
                Class
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to=""
                className="active hover:border-b-2 hover:border-black"
              >
                Announcement
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to=""
                className="active hover:border-b-2 hover:border-black"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex-none items-center justify-between gap-10">
            <Link
              to="/register"
              className="active hover:border-b-2 hover:border-black mx-10"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-zinc-800 px-12 py-4 rounded-full font-bold text-white"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="lg:hidden">
          <div className={twMobileNav}>
            <Link to="/">
              <img src="/IMG/LogoLabMulti.png" alt="Logo" />
            </Link>

            {isOpen ? (
              <button
                onClick={() => {
                  setIsOpen(false);
                  setEffect(true);
                }}
                className={`${
                  effect &&
                  "rounded-full text-black bg-white transition-opacity ease-in-out duration-300"
                } rounded-full text-black bg-white`}
                onAnimationEnd={() => setEffect(false)}
              >
                <GrClose className="h-7 w-7 " aria-hidden="true"></GrClose>
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsOpen(true);
                  setEffect(true);
                }}
                className={`${
                  effect &&
                  "rounded-full text-black bg-white transition-opacity ease-in-out duration-300"
                } rounded-full text-black bg-white`}
                onAnimationEnd={() => setEffect(false)}
              >
                <GiHamburgerMenu
                  className="h-7 w-7 "
                  aria-hidden="true"
                ></GiHamburgerMenu>
              </button>
            )}
          </div>
        </div>
      </div>
      <div
        className={
          " fixed overflow-hidden z-30 inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-y-0  "
            : " transition-all delay-500 opacity-0 -translate-y-full  ")
        }
      >
        <section
          style={{ background: "#FFFFFF" }}
          className={
            " w-screen bottom-0 absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
            (isOpen ? " opacity-100" : " opacity-0 ")
          }
        >
          <div className="flex mx-auto justify-between px-4 py-2">
            <Link to="/">
              <img src="/IMG/LogoLabMulti.png" alt="Logo" />
            </Link>

            {isOpen ? (
              <button
                onClick={() => {
                  setIsOpen(false);
                  setEffect(true);
                }}
                className={`${
                  effect &&
                  "rounded-full text-black bg-white transition-opacity ease-in-out duration-300"
                } rounded-full text-black bg-white`}
                onAnimationEnd={() => setEffect(false)}
              >
                <GrClose className="h-7 w-7 " aria-hidden="true"></GrClose>
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsOpen(true);
                  setEffect(true);
                }}
                className={`${
                  effect &&
                  "rounded-full text-black bg-white transition-opacity ease-in-out duration-300"
                } rounded-full text-black bg-white`}
                onAnimationEnd={() => setEffect(false)}
              >
                <GiHamburgerMenu
                  className="h-7 w-7 "
                  aria-hidden="true"
                ></GiHamburgerMenu>
              </button>
            )}
          </div>
          <article className="relative w-screen flex flex-col space-y-6 overflow-y-scroll h-full">
            <div className="px-4 w-full">
              <ul className={twUlNavMobile}>
                <li className={twLiNavMobile}>
                  <Link
                    className="active"
                    to="About"
                    smooth="true"
                    offset={-70}
                    duration={500}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Home
                  </Link>
                  <hr
                    className="mt-2 w-full"
                    style={{
                      color: "#000000",
                      backgroundColor: "#000000",
                      borderColor: "#000000",
                    }}
                  />
                </li>
                <li className={twLiNavMobile}>
                  <Link
                    className="active"
                    to="Service"
                    smooth="true"
                    offset={-70}
                    duration={500}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Team
                  </Link>
                  <hr
                    className="mt-2"
                    width="100%"
                    style={{
                      color: "#000000",
                      backgroundColor: "#000000",
                      borderColor: "#000000",
                    }}
                  />
                </li>
                <li className={twLiNavMobile}>
                  <Link
                    className="active"
                    to="Portofolio"
                    smooth="true"
                    offset={-70}
                    duration={500}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Class
                  </Link>
                  <hr
                    className="mt-2"
                    width="100%"
                    style={{
                      color: "#000000",
                      backgroundColor: "#000000",
                      borderColor: "#000000",
                    }}
                  />
                </li>
                <li className={twLiNavMobile}>
                  <Link
                    className="active"
                    to="Blog"
                    smooth="true"
                    offset={-70}
                    duration={500}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Announcement
                  </Link>
                  <hr
                    className="mt-2"
                    width="100%"
                    style={{
                      color: "#000000",
                      backgroundColor: "#000000",
                      borderColor: "#000000",
                    }}
                  />
                </li>
                <li className={twLiNavMobile}>
                  <Link
                    className="active"
                    to="Career"
                    smooth="true"
                    offset={-70}
                    duration={500}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Contact
                  </Link>
                  <hr
                    className="mt-2"
                    width="100%"
                    style={{
                      color: "#000000",
                      backgroundColor: "#000000",
                      borderColor: "#000000",
                    }}
                  />
                </li>
                <div className={twLiNavMobile}>
                  <Link
                    to="/register"
                    className="active hover:border-b-2 hover:border-black mx-10 mb-5"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    className="bg-zinc-800 px-12 py-4 rounded-full font-bold text-white"
                  >
                    Login
                  </Link>
                </div>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Navbar;
