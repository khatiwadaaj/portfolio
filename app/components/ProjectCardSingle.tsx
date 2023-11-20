import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

export default function ProjectCardSingle({
  title,
  description,
  imageSrc,
  skills,
  url,
}: {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  skills: Array<string>;
  url: string;
}) {
  return (
    <div className='bg-gray flex flex-col sm:flex-row bg-white shadow-md rounded-lg mb-6'>
      <Image
        unoptimized
        src={imageSrc}
        width={300}
        alt='Github Link'
        className='object-cover overflow-clip mx-auto sm:mx-0 sm:rounded-s-lg'
      />
      <div className='grow-1 px-4 sm:px-10 py-10 '>
        <h2 className='text-xl sm:text-2xl text-bold mb-3'>{title}</h2>
        <h2 className='text-sm sm:text-base mb-6 text-'>{description}</h2>
        <div className='flex gap-3 mb-10 flex-wrap justify-center sm:justify-start'>
          {skills.map((skill, index) => (
            <h2
              className='border-2 px-2 py-1 border-tertiary rounded-md text-sm sm:text-base'
              key={index}>
              {skill}
            </h2>
          ))}
        </div>
        <div className='flex justify-center sm:justify-start mb-4 sm:mb-0 items-center'>
          <Link
            className='text-white bg-gradient-to-br from-secondary to-tertiary hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm  pr-3 py-2.5 text-bold hover:grow-1 flex items-center justify-center'
            href={url}
            target='_blank'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className=' w-8 sm:w-12 h-6 sm:h-8 inline-block p-1'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
              />
            </svg>
            Go to Site
          </Link>
        </div>
      </div>
    </div>
  );
}
