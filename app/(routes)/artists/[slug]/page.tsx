'use server';

import ProjectMasonry from '@/app/_components/ProjectMasonry';
import Roles from '@/app/_components/Roles';
import { getArtist } from '@/src/models/artists';
import { getProjectsByArtist } from '@/src/models/projects';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoArrowDownSharp } from 'react-icons/io5';

const ArtistPage = async ({ params }: { params: { slug: string } }) => {
  const artist = await getArtist(params.slug);

  if (!artist) {
    return <div className='pt-[--navh]'>Artist does not exist.</div>;
  }

  const projects = (await getProjectsByArtist(params.slug)) || [];

  return (
    <div className=''>
      <div className='relative flex h-screen items-center justify-center bg-black'>
        <div className='absolute h-full w-full'>
          {artist.bgCover !== '' && (
            <Image
              className='h-full w-full object-cover opacity-70'
              src={artist.bgCover}
              alt=''
              width={800}
              height={800}
            />
          )}
        </div>
        <li
          className={`absolute flex w-full flex-col items-center justify-center text-white`}
        >
          <p className='truncate text-[2.5rem] font-bold md:text-[5rem]'>
            {artist.name.toUpperCase()}
          </p>
          <Roles roles={artist.roles} />
        </li>
      </div>
      <div className='m-[--px] flex flex-col gap-[--gap]'>
        <div className='flex flex-col gap-[--gap] md:h-[80vh] md:flex-row'>
          <div className='flex h-full flex-col justify-center gap-[--gap] md:w-1/2'>
            <div className='relative flex h-full w-full'>
              {artist.portrait !== '' && (
                <Image
                  className='h-full w-full object-cover'
                  src={artist.portrait}
                  alt=''
                  width={1000}
                  height={1000}
                />
              )}
              {/* <div className="shadow-overlay opacity-10" />
              <div className="text-overlay p-[--px] text-white">
                <div className="artistName">
                  <h1 className="">{firstname.toUpperCase()}</h1>
                  <h1 className="">{lastname.toUpperCase()}</h1>
                </div>
                <Roles roles={["Co-Fondateur", "Photograph"]} />
              </div> */}
            </div>
          </div>

          <div className='hidden flex-col items-center gap-[--gap] md:flex'>
            <div className='aspect-square w-[20px] rounded-full border border-black' />
            <div className='mx-auto inline-block h-full w-[1px] self-stretch bg-black' />
            <div className='aspect-square w-[20px] rounded-full border border-black' />
          </div>

          <div className='flex h-full flex-col justify-center gap-[--gap] md:w-1/2'>
            <div className='flex flex-col'>
              <p className='title'>{artist.name}</p>
              <p className='mb-10 text-sm text-gray-700'>
                {artist.roles.join(', ')}
              </p>
              <p>{artist.bio}</p>
            </div>
            <Link href='#content' className='textButton flex items-center'>
              MES PROJETS
              <IoArrowDownSharp />
            </Link>
          </div>
        </div>
        <p id='content' className='title'>
          PROJETS
        </p>
        <ProjectMasonry projects={projects} />
      </div>
    </div>
  );
};

export default ArtistPage;
