'use client';

import Image from 'next/image';
import React from 'react';

const Media = ({ src, className }: { src: string; className?: string }) => {
  if (src === '')
    return <div className='h-full w-full bg-gray-50 object-cover'></div>;

  if (src.includes('/preview')) {
    return (
      <div className='relative h-full min-h-80 w-full flex-1 object-cover'>
        <iframe
          className='h-full w-full object-cover'
          src={src}
          allow='autoplay'
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  if (src.includes('youtube.com')) {
    const videoId = src.split('v=').at(-1)!;
    return (
      <div className='relative h-full min-h-80 w-full flex-1 object-cover'>
        <iframe
          className='h-full w-full object-cover'
          src={`https://www.youtube.com/embed/${videoId}`}
          allow='autoplay'
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  if (src.includes('https://youtu.be/')) {
    const videoId = src.split('https://youtu.be/').at(-1)!;
    return (
      <div className='relative h-full min-h-80 w-full flex-1 object-cover'>
        <iframe
          className='h-full w-full object-cover'
          src={`https://www.youtube.com/embed/${videoId}`}
          allow='autoplay'
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  if (src.includes('drive.google.com')) {
    const videoId = src.split('file/d/').at(-1)!.split('/preview')[0];
    return (
      <div className='relative h-full min-h-80 w-full flex-1 object-cover'>
        <iframe
          className='h-full w-full object-cover'
          src={`https://drive.google.com/file/d/${videoId}/preview`}
          allow='autoplay'
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  const extension = src.split('.').at(-1)!.toLowerCase();

  if (extension === 'mp4' || extension === 'mov')
    return (
      <video
        className='h-full min-h-80 w-full object-cover'
        autoPlay
        loop
        muted
      >
        <source src={src} />
      </video>
    );
  else
    return (
      <Image
        className={'h-full w-full object-cover ' + className}
        src={src}
        alt='no image'
        width={800}
        height={800}
      />
    );
};

export default Media;
