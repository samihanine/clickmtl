'use client';

import { SiInstagram, SiLinkedin, SiTiktok } from 'react-icons/si';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const NavbarLink = ({ label, link }: { label: string; link: string }) => {
  const currentPath = usePathname();

  const active = `/${currentPath.split('/')[1]}` === link;
  return (
    <Link
      className={`text-white transition hover:opacity-50 ${
        active ? 'font-bold' : null
      }`}
      href={link}
    >
      {label}
    </Link>
  );
};

const FooterIcon = ({ link, icon }: { link: string; icon: JSX.Element }) => {
  return (
    <Link className='transition hover:opacity-50' href={link}>
      {icon}
    </Link>
  );
};

export const FooterIcons = () => {
  return (
    <>
      <FooterIcon
        link='https://www.instagram.com/clickmtl/'
        icon={<SiInstagram />}
      />
      {/* <FooterIcon
        link="https://www.tiktok.com/@clickstudiomtl"
        icon={<SiTiktok />}
      />*/}
      <FooterIcon
        link='https://www.linkedin.com/company/85953717/admin/feed/posts/'
        icon={<SiLinkedin />}
      />
    </>
  );
};

export const HomeLinks = () => {
  return (
    <>
      <NavbarLink label='PROJETS' link='/projects' />
      <NavbarLink label='ARTISTES' link='/artists' />
      <NavbarLink label='À PROPOS' link='/about' />
      <NavbarLink label='CONTACT' link='/contact' />
    </>
  );
};

export const NavbarLinks = () => {
  return (
    <>
      <NavbarLink label='PROJETS' link='/projects' />
      <NavbarLink label='ARTISTES' link='/artists' />
      <NavbarLink label='À PROPOS' link='/about' />
      <NavbarLink label='CONTACT' link='/contact' />
    </>
  );
};
