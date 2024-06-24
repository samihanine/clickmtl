'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NavbarLinks } from './NavbarLinks';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='fixed z-[1000] flex h-[--navh] w-full items-center justify-between px-[--px] mix-blend-exclusion'>
        <Link href='/'>
          <Image
            className='h-7 w-auto'
            src='/logo/lg-logo.png'
            alt=''
            width={106}
            height={28}
          />
        </Link>
        <div className='hidden items-center gap-[--gap] md:flex'>
          <NavbarLinks />
        </div>
        <div className='flex items-center md:hidden'>
          <button onClick={toggleMenu}>
            <FaBars className='text-white' size={24} />
          </button>
        </div>
      </nav>
      {isOpen && (
        <div
          className='fixed left-0 top-0 z-[1000] flex h-full w-full flex-col items-center justify-center gap-5 bg-black opacity-90 !mix-blend-normal md:hidden'
          onClick={() => setIsOpen(false)}
        >
          <Link className='mb-10' href='/'>
            <Image
              className='h-auto w-32'
              src='/logo/lg-logo.png'
              alt=''
              width={600}
              height={600}
            />
          </Link>

          <NavbarLinks />
        </div>
      )}
    </>
  );
};

export default Navbar;
