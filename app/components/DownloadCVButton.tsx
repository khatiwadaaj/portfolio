import React from "react";

export default function DownloadCVButton() {
  return (
    <>
      <button
        type='button'
        className='text-white bg-gradient-to-br from-secondary to-secondary hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm pr-3 py-2.5 text-bold'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-10 h-6 inline-block px-2'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
          />
        </svg>
        Download CV
      </button>
    </>
  );
}
