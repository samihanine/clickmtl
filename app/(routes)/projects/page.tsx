import ProjectMasonry from '@/app/_components/ProjectMasonry';
import React from 'react';
import { getProjects } from '@/src/models/projects';

const ProjectPage = async () => {
  const projects = await getProjects();

  if (!projects) return <div>Something went wrong.</div>;

  return (
    <div className='min-h-[90vh] p-[--gap] pt-24'>
      <ProjectMasonry projects={projects} />
    </div>
  );
};

export default ProjectPage;
