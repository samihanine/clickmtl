'use server';

import ArtistsCarousel from './ArtistsCarousel';
import React from 'react';
import { getArtists } from '@/src/models/artists';

const ArtistsPage = async () => {
  const artists = await getArtists();

  if (!artists) return <div>Something went wrong</div>;

  return (
    <section className='w-full'>
      <div className='flex flex-col'>
        <ArtistsCarousel artists={artists} />
      </div>
    </section>
  );
};

export default ArtistsPage;
