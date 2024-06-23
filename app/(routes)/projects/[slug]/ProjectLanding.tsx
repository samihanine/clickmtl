import Link from 'next/link';
import Media from '@/app/_components/Media';
import { Project } from '@/src/models/projects';
import React from 'react';

const ProjectLanding = async ({ project }: { project: Project }) => {
  return (
    <div className='flex flex-col-reverse pt-24 md:h-screen md:flex-col md:pt-0'>
      <div className='flex w-full flex-col md:flex-row'>
        <div className='md:w-2/3'>
          <div className='flex h-full items-center justify-center'>
            <Media
              src={project.mainMediaSrc || project.projectCover}
              className='h-[calc(100vh-192px)] w-full'
            />
          </div>
        </div>

        <div className='md:w-1/3'>
          <div className='flex h-full flex-col justify-between'>
            <section className='h-full w-full border-black p-[--px]'>
              <div className='flex h-full items-end opacity-50'>
                <p>{project.description}</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:h-48 md:flex-row'>
        <div className='flex w-full items-center justify-center md:h-48 md:w-2/3'>
          <div className='mb-10 flex h-full w-full flex-col justify-center px-10 md:mb-0'>
            <h1 className='text-[72px] font-bold leading-[72px]'>
              {project.title}
            </h1>
            <div>
              <span>par</span>{' '}
              {project.initiators.map(async (initiator, key) => {
                return (
                  <>
                    <Link
                      key={key}
                      href={`/artists/${initiator.slug}`}
                      className='font-bold opacity-50 hover:opacity-100'
                    >
                      {initiator.name}
                    </Link>
                    {key !== project.initiators.length - 1 && (
                      <span className='mx-[0.25rem]'>,</span>
                    )}
                  </>
                );
              })}
            </div>
          </div>{' '}
        </div>
        <div className='flex h-full w-full flex-col items-center justify-center whitespace-pre bg-black py-10 text-white md:w-1/3'>
          <p className='font-bold'>CREDITS</p>
          <p className='text-center'>
            {project.credits ? (
              project.credits
            ) : (
              <>
                {project.initiators.map((initiator) => (
                  <p key={initiator.slug}>{initiator.name}</p>
                ))}
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectLanding;
