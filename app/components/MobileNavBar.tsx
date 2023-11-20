import Link from "next/link";
import React from "react";

export const MobileNavBar = () => {
  return (
    <>
      <nav className='container flex flex-col p-4 lg:p-4'>
        <Link
          href='/'
          className='text-xl text-bold group transition duration-300 hover:text-gray-500 m-2'>
          Home
        </Link>
        <Link
          href='/'
          className='text-xl text-bold group transition duration-300 hover:text-gray-500 m-2'>
          Projects
        </Link>
        <Link
          href='/'
          className='text-xl text-bold group transition duration-300 hover:text-gray-500 m-2'>
          Tech Stack
        </Link>

        <Link
          href='/'
          className='text-xl text-bold group transition duration-300 hover:text-gray-500 m-2'>
          Contact
        </Link>
      </nav>
    </>
  );
};
