import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  return (
    <>
      <div className='px-[--px] pt-[--navh]'>
        <p className='mt-10 px-10 text-center text-3xl sm:text-4xl md:px-20 md:text-5xl lg:text-7xl'>
          DU CLICK À LA CRÉATION
        </p>
        <div className='my-[--gap] flex flex-col gap-[--gap]'>
          <div className='flex items-center justify-center gap-[--gap]'>
            <div className='md:w-1/2'>
              <p className=''>
                Click a vu le jour à partir d&apos;une passion débordante et
                d&apos;un désir profond de création. Les cofondateurs, Matias et
                Louis, ont d&apos;abord exploré le monde à travers
                l&apos;objectif de la photographie. Leur esprit entrepreneurial
                ne tarda pas à se manifester, les conduisant à établir leur
                propre agence de création en 2022. Aujourd&apos;hui, Click se
                distingue fièrement par son réseau d&apos;artistes en
                perpétuelle innovation. Plus qu&apos;une simple agence au
                service des entreprises, Click se positionne comme une
                communauté inclusive, ouvrant ses portes aux jeunes talents
                passionnés désireux de créer et d&apos;acquérir une expérience
                professionnelle significative.
              </p>
            </div>
          </div>
          <div className='my-10 grid auto-cols-max grid-flow-col gap-[--gap] overflow-x-scroll pb-3'>
            <div className='flex h-[60vh] w-[25vw]'>
              <Image
                className='h-full w-full object-cover'
                src={'/about/about-2.jpg'}
                alt=''
                width={1200}
                height={1200}
              />
            </div>
            <div className='flex h-[60vh] w-[25vw]'>
              <Image
                className='h-full w-full object-cover'
                src={'/about/about-3.jpg'}
                alt=''
                width={1200}
                height={1200}
              />
            </div>
            <div className='flex h-[60vh] w-[25vw]'>
              <Image
                className='h-full w-full object-cover'
                src={'/about/about-4.jpg'}
                alt=''
                width={1200}
                height={1200}
              />
            </div>
            <div className='flex h-[60vh] w-[25vw]'>
              <Image
                className='h-full w-full object-cover'
                src={'/about/about-5.jpg'}
                alt=''
                width={1200}
                height={1200}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-10 flex gap-[--gap] bg-black p-10 text-white flex-col md:flex-row'>
        <Image
          className='h-[50vh] w-1/2 object-cover'
          src={'/about/about-1.jpg'}
          alt=''
          width={1200}
          height={1200}
        />
        <div className='flex md:w-1/2 flex-col gap-[--gap]'>
          <p className='text-4xl md:text-5xl lg:text-[4rem]'>REJOIGNEZ NOTRE ÉQUIPE!</p>

          <p className=''>
            Si la création te passionne et que tu es à la recherche d&apos;une
            opportunité pour exprimer ton talent, Click veut te connaître !
            Partage avec nous ton portfolio et ton CV à l&apos;adresse
            ci-dessous. Rejoins notre aventure et laisse ta marque dans le monde
            de la création.
          </p>
          <a
            href='mailto:clickstudiomtl@gmail.com'
            className='text-[2rem] hover:opacity-50'
          >
            clickstudiomtl@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
