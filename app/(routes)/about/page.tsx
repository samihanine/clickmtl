'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const AboutPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container: any = containerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 0.4; // Adjust the speed here

    const scrollImages = () => {
      if (container) {
        scrollAmount += scrollSpeed;
        container.scrollLeft = scrollAmount;

        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0; // Reset the scroll
        }
      }
      requestAnimationFrame(scrollImages);
    };

    scrollImages();
  }, []);

  return (
    <>
      <div className='px-[--px] pt-[--navh]'>
        <p className='mt-10 px-10 text-center text-3xl sm:text-4xl md:px-20 md:text-5xl lg:text-7xl'>
          DU CLICK À LA CRÉATION.
        </p>
        <div className='my-[--gap] flex flex-col gap-[--gap]'>
          <div className='flex items-center justify-center gap-[--gap]'>
            <div className='md:w-1/2'>
              <p className='text-center'>
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
          <div
            ref={containerRef}
            className='my-10 flex gap-[--gap] overflow-x-hidden pb-3 md:grid md:auto-cols-max md:grid-flow-col'
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Image
                key={i}
                className='h-auto w-[80vh] object-cover md:h-[60vh] md:w-[25vw]'
                src={`/about/about-${i + 1}.jpg`}
                alt=''
                width={1200}
                height={1200}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='mt-10 flex flex-col gap-[--gap] bg-black p-20 text-white md:flex-row'>
        <Image
          className='h-auto w-full object-cover md:h-[50vh] md:w-1/2'
          src={'/about/about-1.jpg'}
          alt=''
          width={1200}
          height={1200}
        />
        <div className='flex flex-col gap-[--gap] md:w-1/2'>
          <p className='text-4xl md:text-5xl'>REJOIGNEZ NOTRE ÉQUIPE!</p>

          <p className=''>
            Si la création te passionne et que tu es à la recherche d&apos;une
            opportunité pour exprimer ton talent, Click veut te connaître !
            Partage avec nous ton portfolio et ton CV à l&apos;adresse
            ci-dessous. Rejoins notre aventure et laisse ta marque dans le monde
            de la création.
          </p>
          <a
            href='mailto:create@clickmtl.com'
            className='text-xl font-medium hover:opacity-50'
          >
            create@clickmtl.com
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
