import React from "react";
import DownloadCVButton from "./DownloadCVButton";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className='container lg:static lg:top-3 lg:flex flex-col lg:flex-row mx-auto max-w-screen-xl px-8 lg:px-4 py-2 lg:bg-background justify-end gap-6 items-center '>
      <Link
        href='/'
        className='text-xl text-bold text-center group transition duration-300 hover:text-gray-500'>
        Home
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-secondary mt-1'></span>
      </Link>
      <Link
        href='/'
        className='text-xl text-bold text-center group transition duration-300 hover:text-gray-500'>
        Projects
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-secondary mt-1'></span>
      </Link>
      <Link
        href='/'
        className='text-xl text-bold text-center group transition duration-300 hover:text-gray-500'>
        Tech Stack
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-secondary mt-1'></span>
      </Link>
      {/* <Link href='/' className='text-xl text-bold text-center'>
          Experience
        </Link> */}
      <Link
        href='/'
        className='text-xl text-bold text-center group transition duration-300 hover:text-gray-500'>
        Contact
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-secondary mt-1'></span>
      </Link>
      <div className='-mt-2'>
        <DownloadCVButton />
      </div>
    </nav>
  );
};
