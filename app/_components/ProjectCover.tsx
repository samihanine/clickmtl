'use client';

import Link from 'next/link';
import Media from './Media';
import { Project } from '@/src/models/projects';
import React from 'react';

const ProjectCover = async ({ project }: { project: Project }) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className='group relative flex h-full w-full'
    >
      <Media
        src={project.projectCover}
        className='h-full w-full object-cover'
      />
      <div className='shadow-overlay absolute inset-0 opacity-0 transition group-hover:opacity-35' />
      <div className='text-overlay absolute inset-0 flex flex-col items-center justify-center p-[1.5rem] opacity-0 transition group-hover:opacity-100'>
        <p className='text-center text-[32px] font-bold text-white'>
          {project.title.toUpperCase()}
        </p>
        <p className='text-white'>{project.initiators[0].name}</p>
      </div>
    </Link>
  );
};

export default ProjectCover;
