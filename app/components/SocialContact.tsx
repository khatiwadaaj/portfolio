import React from "react";

export default function SocialContact() {
  return (
    <section className='mb-6 px-8 sm:px-4 py-2'>
      <div className='flex flex-col mb-6'>
        <div className='flex gap-2 mb-2 items-center justify-center'>
          <h2 className='text-xl sm:text-3xl'>Personal Info</h2>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
            />
          </svg>
        </div>
        <span className='block mx-auto transition-all duration-300 h-1 bg-secondary w-1/12'></span>
      </div>
      <div className='flex gap-6 items-start sm:items-center justify-start sm:justify-evenly flex-col sm:flex-row'>
        <div className='flex flex-row gap-2 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 '>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
            />
          </svg>

          <h2 className='text-md sm:text-lg'>khatiwadaajaya@gmail.com</h2>
        </div>
        <div className='flex gap-2 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
            />
          </svg>

          <h2 className='text-md sm:text-lg'>+61 0451017289</h2>
        </div>
      </div>
    </section>
  );
}
