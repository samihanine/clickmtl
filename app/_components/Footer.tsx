'use client';

import { FooterIcons, NavbarLinks } from './NavbarLinks';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-between gap-16 bg-black px-10 py-[--navh] md:flex-row'>
      <div className='flex flex-col items-center justify-center gap-[--gap] md:items-start'>
        <Link className='w-[20%]' href={'/'}>
          <Image
            className='w-full object-cover'
            src='/logo/lg-logo.png'
            alt='1.jpg'
            width={800}
            height={800}
          />
        </Link>

        <div className='flex flex-wrap items-center justify-center gap-[--gap] md:flex-row'>
          <NavbarLinks />
        </div>
        <div className='flex items-center gap-[--gap] text-[20px] text-white'>
          <FooterIcons />
        </div>
      </div>

      <a
        href='https://www.otopio.net/en'
        className='sticker'
        rel='noopener'
        target='_blank'
      >
        <img
          src='https://www.otopio.net/_next/image?url=%2Fimages%2Flogo-icon.png&w=3840&q=75'
          alt='Logo Otopio'
        />
        <p>Website designed by Otopio Web Agency</p>
      </a>
    </div>
  );
};

export default Footer;
