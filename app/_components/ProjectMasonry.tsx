'use client';

import { Masonry } from 'react-plock';
import { Project } from '@/src/models/projects';
import ProjectCover from '@/app/_components/ProjectCover';
import React from 'react';

const ContentCardSkeleton = () => {
  return (
    <div className='flex h-[50vh] w-full animate-pulse flex-col items-center justify-center'>
      <div className='h-full w-full rounded-lg bg-slate-200'></div>
    </div>
  );
};

export const ContentCardSkeletonList: React.FC = () => {
  return (
    <div className='grid w-full grid-cols-3 gap-[--gap]'>
      {Array.from({ length: 24 }).map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <ContentCardSkeleton key={i} />
      ))}
    </div>
  );
};

const ProjectMasonry = ({ projects }: { projects: Project[] }) => {
  return (
    <div className='grid grid-cols-1 gap-[--gap] md:grid-cols-2 lg:grid-cols-3'>
      {projects.map((project) => (
        <div className='relative h-[300px] w-full' key={project.slug}>
          <ProjectCover project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectMasonry;
