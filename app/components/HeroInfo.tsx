import React from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/icons/icon-github.svg";
import LinkedInIcon from "../../public/icons/icon-linkedin.svg";
import DownloadCVButton from "./DownloadCVButton";
import MailIcon from "../../public/icons/icon-mail.svg";

export default function HeroInfo() {
  return (
    <section className='text-center mb-6 p-10 sm:p-20'>
      {/* <h2 className='text-xl sm:text-3xl pb-2'>Hi I am</h2> */}
      <h2 className='text-4xl sm:text-7xl font-bold pb-2 sm:pb-4 text-primary'>
        Aj Khatiwada
        {/* <span className='text-xl sm:text-5xl font-bold animate-ping'>|</span> */}
      </h2>
      <h2 className=' text-xl sm:text-3xl text-primary pb-2 sm:pb-4'>
        Web Developer
      </h2>
      <div className='flex justify-center gap-6'>
        <Link href='https://github.com/khatiwadaaj' target='_blank'>
          <Image
            unoptimized
            src={GithubIcon}
            alt='Github Link'
            className='cursor-pointer'
          />
        </Link>
        <Link href='https://www.linkedin.com/in/khatiwadaajaya' target='_blank'>
          <Image
            unoptimized
            src={LinkedInIcon}
            alt='Github Link'
            className='cursor-pointer'
          />
        </Link>
        <Link href='mailto:khatiwadaajaya@gmail.com' target='_blank'>
          <Image
            unoptimized
            src={MailIcon}
            alt='Github Link'
            className='cursor-pointer'
          />
        </Link>
      </div>
      <div className='lg:hidden mt-5'>
        <DownloadCVButton />
      </div>
    </section>
  );
}
