import Image from 'next/image';
import React from 'react';

const Media = ({ src, className }: { src: string; className?: string }) => {
  if (src === '')
    return (
      <Image
        className='h-full w-full object-cover'
        src={'/empty.jpg'}
        alt='no image'
        width={800}
        height={800}
      />
    );

  const extension = src.split('.').at(-1)!.toLowerCase();

  if (extension === 'mp4' || extension === 'mov')
    return (
      <video className='h-full w-full object-cover' autoPlay loop muted>
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
