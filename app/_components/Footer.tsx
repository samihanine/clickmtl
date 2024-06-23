"use client";

import { FooterIcons, NavbarLinks } from './NavbarLinks';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='flex justify-between bg-black px-10 py-[--navh]'>
      <div className='flex flex-col items-start gap-[--gap]'>
        <Link className='w-[20%]' href={'/'}>
          <Image
            className='w-full object-cover'
            src='/logo/lg-logo.png'
            alt='1.jpg'
            width={800}
            height={800}
          />
        </Link>

        <div className='flex gap-[--gap] flex-col md:flex-row'>
          <NavbarLinks />
        </div>
        <div className='flex items-center gap-[--gap] text-[20px] text-white'>
          <FooterIcons />
        </div>
      </div>
    </div>
  );
};

export default Footer;
