import ProjectMasonry from '@/app/_components/ProjectMasonry';
import React from 'react';
import { getProjects } from '@/src/models/projects';
import Link from 'next/link';

const ProjectPage = async (params: {
  searchParams: {
    page: string;
  };
}) => {
  const page: number = parseInt(params.searchParams.page || '1');
  const projects = await getProjects();

  if (!projects) return <div>Something went wrong.</div>;

  const projectsPerPage = 6;
  const start = (page - 1) * projectsPerPage;
  const end = start + projectsPerPage;
  const prev = page > 1 ? page - 1 : page;
  const next =
    page < Math.ceil(projects.length / projectsPerPage) ? page + 1 : page;

  return (
    <div className='min-h-[90vh] p-[--gap] pt-24'>
      <ProjectMasonry projects={projects.slice(start, end)} />

      <div className='mt-10 flex justify-center gap-[--gap] font-medium'>
        <Link href={`/projects?page=${prev}`}>
          <p className={'text-xl ' + (page === prev ? 'opacity-30' : '')}>
            Pr&eacute;c&eacute;dent
          </p>
        </Link>

        <p className='text-xl'>Page {page}</p>

        <Link href={`/projects?page=${next}`}>
          <p className={'text-xl ' + (page === next ? 'opacity-30' : '')}>
            Suivant
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;
