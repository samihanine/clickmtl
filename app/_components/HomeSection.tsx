'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
};

const HomeSection = ({
  children,
  className,
  src,
}: {
  children: React.ReactNode;
  className: string;
  src: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const { height } = useWindowSize();
  const { scrollY } = useScroll();

  const extension = src.split('.').at(-1)!.toLowerCase();

  useEffect(() => {
    if (!divRef.current) return;
    if (extension === 'mp4' || extension === 'mov') return;

    divRef.current.style.backgroundImage = `url('${src}')`;
  }, []);

  useMotionValueEvent(scrollY, 'change', () => {
    if (!divRef.current) return;
    if (height === undefined) return;
    const { top, bottom } = divRef.current.getBoundingClientRect();

    if (
      (top > 0 && top < height) ||
      (bottom > 0 && bottom < height) ||
      (top < 0 && bottom > height)
    ) {
      divRef.current.style.backgroundPositionY = `${(top / height) * 100}%`;
    }
  });

  if (src === '')
    return (
      <div
        ref={divRef}
        className={`bg-home-four flex h-screen flex-col items-center justify-center gap-[--gap] bg-cover p-[--px] text-white`}
      >
        {children}
      </div>
    );

  if (extension === 'mp4' || extension === 'mov')
    return (
      <div className={`relative flex h-screen gap-[--gap]`}>
        <video className='h-full w-full object-cover'         autoPlay 
        loop 
        muted 
        playsInline>
          <source src={src} />
        </video>
        <div className='absolute flex h-full w-full flex-col items-center justify-center text-white'>
          {children}
        </div>
      </div>
    );
  else
    return (
      <div
        ref={divRef}
        className={`flex h-screen flex-col items-center justify-center gap-[--gap] bg-cover p-[--px] text-white`}
      >
        {children}
      </div>
    );
};

export default HomeSection;
