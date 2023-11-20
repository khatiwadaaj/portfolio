"use client";
import Link from "next/link";
import React, { useState } from "react";
import DownloadCVButton from "./DownloadCVButton";
import { NavBar } from "./NavBar";
import { MobileNavBar } from "./MobileNavBar";

export default function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMobileNav(true);
    console.log(event);
  };

  const handleMenuClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMobileNav(false);
    console.log(event);
  };

  // console.log(navDiv);
  return (
    <div className='container relative mx-auto max-w-screen-xl lg:p-4 flex justify-center lg:justify-between items-center p-2 '>
      {/* <DownloadCVButton /> */}
      <h1 className='text-2xl sm:text-3xl'> &lt;Aj&gt;</h1>
      <div className='hidden lg:flex'>
        <DownloadCVButton />
      </div>
    </div>
  );
}
