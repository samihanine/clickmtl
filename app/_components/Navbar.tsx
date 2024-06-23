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
      <div className='hidden md:flex items-center gap-[--gap]'>
        <NavbarLinks />
      </div>
      <div className='flex md:hidden items-center'>
        <button onClick={toggleMenu}>
          <FaBars className='text-white' size={24} />
        </button>
      </div>


    </nav>
          {isOpen && (
            <div className='fixed z-[1000] top-0 left-0 w-full bg-black opacity-90 h-full !mix-blend-normal flex flex-col justify-center items-center md:hidden gap-5' onClick={() => setIsOpen(false)}>
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
