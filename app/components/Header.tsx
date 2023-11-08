"use client";
import Link from "next/link";
import React from "react";
import DownloadCVButton from "./DownloadCVButton";
import { NavBar } from "./NavBar";

export default function Header() {
  // const navDiv = document.querySelector("nav");
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    // navDiv?.classList.remove("-top-[100%]");
    // navDiv?.classList.add("top-0");
    console.log(event);
  };

  const handleMenuClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event);
  };

  // console.log(navDiv);
  return (
    <div className='container mx-auto max-w-screen-xl lg:p-4 flex justify-between items-center p-2 '>
      {/* <DownloadCVButton /> */}
      <h1 className='text-2xl sm:text-3xl'> &lt;Aj&gt;</h1>
      <NavBar />

      {/* Mobile Menu Buttons*/}
      <div className=' lg:hidden space-y-2 cursor-pointer'>
        <button
          title='Handle mobile menu open'
          type='button'
          onClick={handleMenuOpen}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-8 h-8'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </button>
        <button
          title='Handle mobile menu close'
          type='button'
          onClick={handleMenuClose}
          id='btn-close'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-8 h-8'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
