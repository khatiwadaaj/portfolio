import React from "react";
import Image from "next/image";
import {
  ReactIcon,
  NodeJSIcon,
  AWSIcon,
  AzureIcon,
  GithubIcon,
  GitIcon,
  HTMLIcon,
  JSIcon,
  LinkedInIcon,
  MUIIcon,
  NextJSIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "./Icons";

export default function TechStackInfo() {
  const TechStackArray = [
    {
      id: 1,
      title: "Javascript",
      imageSrc: JSIcon,
    },
    {
      id: 2,
      title: "ReactJS",
      imageSrc: ReactIcon,
    },
    {
      id: 3,
      title: "NodeJS",
      imageSrc: NodeJSIcon,
    },
    {
      id: 4,
      title: "TailwindCSS",
      imageSrc: TailwindIcon,
    },
    {
      id: 5,
      title: "Material UI",
      imageSrc: MUIIcon,
    },
    {
      id: 6,
      title: "AWS",
      imageSrc: AWSIcon,
    },
    {
      id: 7,
      title: "Git",
      imageSrc: GitIcon,
    },
    {
      id: 8,
      title: "NextJS",
      imageSrc: NextJSIcon,
    },
    {
      id: 9,
      title: "Azure",
      imageSrc: AzureIcon,
    },
    {
      id: 10,
      title: "TypeScript",
      imageSrc: TypeScriptIcon,
    },
  ];
  return (
    <section className='mb-6 px-8 sm:px-4 py-2'>
      <div className='flex flex-col mb-10'>
        <div className='flex gap-2 mb-2 items-center justify-center'>
          <h2 className='text-xl sm:text-3xl'>Tech Stack</h2>
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
              d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z'
            />
          </svg>
        </div>
        <span className='block mx-auto transition-all duration-300 h-1 bg-secondary w-1/12'></span>
      </div>
      <div className='flex flex-wrap justify-center gap-6 sm:gap-10 mt-5'>
        {TechStackArray.map((item) => (
          <div
            key={item.id}
            className='flex justify-center items-center flex-col mx-6'>
            <Image
              unoptimized
              src={item.imageSrc}
              alt='Github Link'
              className='h-30 w-20'
            />
            <h2 className='text-md sm:text-lg mt-2'>{item.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
