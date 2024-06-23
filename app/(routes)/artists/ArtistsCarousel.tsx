'use client';

import { useEffect, useRef, useState } from 'react';

import { Artist } from '@/src/models/artists';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Roles from '@/app/_components/Roles';
import { motion } from 'framer-motion';

const ArtistsCarousel = ({ artists }: { artists: Artist[] }) => {
  const [index, setIndex] = useState<number>(0);
  const [selectedArtist, setSelectedArtist] = useState<Artist>(
    artists[Math.floor(artists.length / 2) - (artists.length % 2 === 0 ? 1 : 0)]
  );

  const [direction, setDirection] = useState<string>('');
  const carouselRef = useRef<HTMLUListElement>(null);
  const listItemRef = useRef<HTMLLIElement>(null);

  const moveUp = () => {
    if (!carouselRef.current || !listItemRef.current) return;

    carouselRef.current.style.transform = `translateY(${-listItemRef.current
      .scrollHeight}px)`;

    setDirection('up');
    setIndex((index) => index + 1);
  };

  const moveDown = () => {
    if (!carouselRef.current || !listItemRef.current) return;

    carouselRef.current.style.transform = `translateY(${listItemRef.current.scrollHeight}px)`;

    setDirection('down');
    setIndex((index) => index - 1);
  };

  useEffect(() => {
    if (!carouselRef.current) return;

    carouselRef.current.ontransitionend = () => {
      if (!carouselRef.current) return;

      if (direction === 'up') {
        const firstElement = carouselRef.current.firstChild;
        carouselRef.current.append(firstElement!);
      } else if (direction === 'down') {
        const lastElement = carouselRef.current.lastChild;
        carouselRef.current.prepend(lastElement!);
      }

      carouselRef.current.style.transition = 'none';
      carouselRef.current.style.transform = 'translateY(0)';
      setTimeout(() => {
        if (!carouselRef.current) return;
        carouselRef.current.style.transition = 'all 200ms linear';
      });

      const previewedArtist = artists.find(
        (artist) =>
          artist.slug ===
          carouselRef.current!.children[
            Math.floor(carouselRef.current!.children.length / 2) -
              (artists.length % 2 === 0 ? 1 : 0)
          ].getAttribute('id')
      )!;

      setSelectedArtist(previewedArtist);
    };
  }, [index]);

  return (
    <div className='relative flex h-screen w-full bg-black'>
      <motion.div
        className='absolute h-full w-full'
        key={selectedArtist.name}
        initial={{ y: direction === 'up' ? 30 : -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {selectedArtist.bgCover !== '' && (
          <Image
            className='h-full w-full object-cover opacity-70'
            src={selectedArtist.bgCover}
            alt=''
            width={800}
            height={800}
          />
        )}
      </motion.div>
      <div className='z-[10] mt-[10vh] flex h-[80vh] w-full items-center justify-center gap-[--gap] overflow-hidden px-[--gap]'>
        <div className='relative my-[--gap] flex flex-col justify-center overflow-hidden'>
          <div className='absolute z-[11] flex h-full w-full flex-col'>
            <div onClick={moveDown} className='h-1/2 w-full'></div>
            <Link
              href={`/artists/${selectedArtist.slug}`}
              className='h-[24vh] w-full'
            ></Link>
            <div onClick={moveUp} className='h-1/2 w-full'></div>
          </div>
          <ul
            ref={carouselRef}
            className={`artistCarousel w-full ${
              artists.length % 2 === 0 && 'mt-[10vh] md:mt-[16vh]'
            }`}
          >
            {artists.map((artist, key) => {
              const active = artist.slug === selectedArtist.slug;
              return (
                <li
                  id={artist.slug}
                  ref={listItemRef}
                  key={key}
                  className={`my-5 flex w-full flex-col text-center items-center justify-center text-white ${
                    !active && 'opacity-40'
                  }`}
                >
                  <p className='truncate text-3xl text-center font-bold md:text-5xl lg:text-6xl'>
                    {artist.name.toUpperCase()}
                  </p>
                  {active ? (
                    <Roles roles={artist.roles} />
                  ) : (
                    <p className='invisible'>roles</p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArtistsCarousel;
