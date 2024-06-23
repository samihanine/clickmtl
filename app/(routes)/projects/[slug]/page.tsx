import Media from '@/app/_components/Media';
import ProjectLanding from './ProjectLanding';
import React from 'react';
import { getProject } from '@/src/models/projects';

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const project = await getProject(params.slug);

  if (!project) return <div>Project not found</div>;

  return (
    <div className=''>
      <ProjectLanding project={project} />

      <div className='my-10 grid grid-cols-1 gap-[--gap] p-[--px] md:grid-cols-2 lg:grid-cols-3'>
        {project.medias.map((media) => (
          <Media key={media.src} src={media.src} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
