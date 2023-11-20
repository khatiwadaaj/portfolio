import React from "react";

import ProjectCardSingle from "./ProjectCardSingle";
import TTSnapImage from "../../public/images/ttsnap.png";
import JOTImage from "../../public/images/jot.png";
import ExpressImage from "../../public/images/nodeexpress.jpeg";

export default function ProjectsSection() {
  const projectDetails = [
    {
      id: 1,
      title: "TTSnap",
      desc: "TTSnap is a collection of web-based tools built with NextJS 13, Tailwind CSS and TypeScript with server-side rendering.",
      skills: ["NextJS", "Tailwind CSS", "TypeScript", "Vercel", "Git"],
      imageSrc: TTSnapImage,
      url: "https://www.ttsnap.net",
    },
    {
      id: 2,
      title: "JustOnlineTools",
      desc: "JustOnlineTools is a collection of web-based tools everything built with ReactJS and Material UI with client-side rendering.",
      skills: [
        "Material UI",
        "React",
        "React Context",
        "JavaScript",
        "Vercel",
        "Git",
      ],
      imageSrc: JOTImage,
      url: "https://www.justonlinetools.com",
    },
    {
      id: 3,
      title: "Express API Server",
      desc: "Express Server that provides the server-side logic for all the tools and app, deployed in Ubuntu in AWS EC2 instance ",
      skills: [
        "NodeJS",
        "Express",
        "JavaScript",
        "AWS EC2",
        "SSL",
        "SQLite",
        "Ubuntu",
        "Nginx",
      ],
      imageSrc: ExpressImage,
      url: "https://expressapi.ttsnap.net",
    },
  ];
  return (
    <section className='mb-6 px-8 sm:px-4 py-4 rounded-md '>
      <div className='flex flex-col mb-6'>
        <div className='flex gap-2 items-center mb-2 justify-center'>
          <h2 className='text-2xl sm:text-3xl '>My Projects</h2>
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
              d='M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z'
            />
          </svg>
        </div>
        <span className='block mx-auto transition-all duration-300 h-1 bg-tertiary w-1/12'></span>
      </div>
      <div className='flex flex-col gap-10 '>
        {projectDetails.map((project) => (
          <ProjectCardSingle
            key={project.id}
            title={project.title}
            description={project.desc}
            skills={project.skills}
            imageSrc={project.imageSrc}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
}
