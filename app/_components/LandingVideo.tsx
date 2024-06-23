'use client';

import React from 'react';
import { motion } from 'framer-motion';

const LandingVideo = ({ video }: { video: string }) => {
  return (
    <motion.div
      className='h-full w-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <video autoPlay loop muted className='h-full w-full object-cover'>
        <source src={video} />
      </video>
    </motion.div>
  );
};

export default LandingVideo;
