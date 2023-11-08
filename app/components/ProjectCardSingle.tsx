import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

export default function ProjectCardSingle({
  title,
  description,
  imageSrc,
  skills,
}: {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  skills: Array<string>;
}) {
  return (
    <div className='bg-gray flex flex-col sm:flex-row bg-white shadow-md rounded-md '>
      <Image
        unoptimized
        src={imageSrc}
        width={300}
        alt='Github Link'
        className='object-cover overflow-clip mx-auto mt-10 sm:mt-0'
      />
      <div className='grow-1 py-6 px-4 sm:px-10'>
        <h2 className='text-xl text-bold mb-3'>{title}</h2>
        <h2 className='text-md mb-6'>{description}</h2>
        <div className='flex gap-3 mb-10 flex-wrap justify-center sm:justify-start'>
          {skills.map((skill, index) => (
            <h2
              className='border-2 px-2 py-1 border-secondary rounded-md text-base'
              key={index}>
              {skill}
            </h2>
          ))}
        </div>
        <div className='flex justify-center sm:justify-start mb-4 sm:mb-0 items-center'>
          <button
            type='button'
            className='text-white bg-gradient-to-br from-secondary to-secondary hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm pr-3 py-2.5 text-bold hover:grow-1 flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-12 h-8 inline-block p-1'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
              />
            </svg>
            Go to Site
          </button>
        </div>
      </div>
    </div>
  );
}
