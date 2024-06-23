'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NavbarLinks } from './NavbarLinks';
import React from 'react';

export const Navbar = () => {
  return (
    <nav className='fixed z-[50] flex h-[--navh] w-full items-center justify-between px-[--px] mix-blend-exclusion'>
      <Link className='h-1/3' href='/'>
        <Image
          className='h-full w-full'
          src='/logo/lg-logo.png'
          alt=''
          width={600}
          height={600}
        />
      </Link>
      <div className='flex items-center gap-[--gap]'>
        <NavbarLinks />
      </div>
    </nav>
  );
};

export default Navbar;
