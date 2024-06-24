'use server';

import { z } from 'zod';

const mediaSchema = z.object({
  filename: z.string(),
  src: z.string(),
});

const initiatorSchema = z.object({
  name: z.string(),
  slug: z.string(),
});

const projectSchema = z.object({
  type: z.string(),
  title: z.string(),
  projectCover: z.string(),
  mainMediaSrc: z.string().optional(),
  description: z.string(),
  initiators: z.array(initiatorSchema),
  credits: z.string().optional(),
  slug: z.string(),
  videoLink: z.string().optional(),
  medias: z.array(mediaSchema),
});

export type Project = z.infer<typeof projectSchema>;

const projects: Project[] = [
  {
    type: 'video',
    title: 'Escape',
    projectCover: '/projects/escape/escape-background.jpg',
    mainMediaSrc: '/projects/escape/escape-video.mp4',
    description:
      'L’hiver 2023-2024, Matias Renaud réalise son premier court métrage en solo. Son objectif était de capturer les rues désertes de Montréal, dépourvues de voitures et de passants, mettant ainsi en lumière la vie monotone et routinière d’une jeune adulte aspirant à la solitude et à l’évasion de cette société oppressante.\n\n“Je me suis inspiré de la direction photo du film "Mommy" de Xavier Dolan, notamment dans la scène où le personnage principal se libère de sa prison intérieure, symbolisée par l’élargissement de l’écran, exprimant ainsi sa liberté retrouvée.”',
    initiators: [
      {
        name: 'Matias Renaud',
        slug: 'matias-renaud',
      },
    ],
    credits:
      'Réalisateur et Direction photo Matias Renaud\nActrice Emma Rose Berrou\nAssistant Julien Prefontaine',
    slug: 'escape',
    videoLink:
      'https://storage.googleapis.com/clickmtl-web.appspot.com/project%2Fescape%2Fescape-video.mp4',
    medias: [
      {
        filename: 'escape-1',
        src: '/projects/escape/escape-1.jpg',
      },
      {
        filename: 'escape-2',
        src: '/projects/escape/escape-2.jpg',
      },
      {
        filename: 'escape-3.jpg',
        src: '/projects/escape/escape-3.jpg',
      },
      {
        filename: 'escape-4.jpg',
        src: '/projects/escape/escape-4.jpg',
      },
      {
        filename: 'escape-5.jpg',
        src: '/projects/escape/escape-5.jpg',
      },
      {
        filename: 'escape-6.jpg',
        src: '/projects/escape/escape-6.jpg',
      },
      {
        filename: 'escape-7.jpg',
        src: '/projects/escape/escape-7.jpg',
      },
      {
        filename: 'escape-8.jpg',
        src: '/projects/escape/escape-8.jpg',
      },
    ],
  },
  {
    type: 'image',
    title: 'Constant Elevation',
    projectCover:
      '/projects/constant-elevation/constant-elevation-background.jpg',
    description:
      'L’été 2022, Matias a photographié deux campagnes publicitaires pour Off The Hook, mettant en lumière leur marque de vêtements Constant Elevation. Travailler avec des marques locales et réaliser des séances photo dans les rues de notre ville est toujours un plaisir.',
    initiators: [
      {
        name: 'Matias Renaud',
        slug: 'matias-renaud',
      },
    ],
    slug: 'constant-elevation',
    medias: [
      {
        filename: 'constant-elevation-1',
        src: '/projects/constant-elevation/constant-elevation-1.jpg',
      },
      {
        filename: 'constant-elevation-2',
        src: '/projects/constant-elevation/constant-elevation-2.jpg',
      },
      {
        filename: 'constant-elevation-3.jpg',
        src: '/projects/constant-elevation/constant-elevation-3.jpg',
      },
      {
        filename: 'constant-elevation-4.jpg',
        src: '/projects/constant-elevation/constant-elevation-4.jpg',
      },
    ],
  },
  {
    type: 'image',
    title: 'Balkirat',
    projectCover: '/projects/balkirat/balkirat-background.jpg',
    description:
      'Cette série de photos a été réalisée à l’occasion de la sortie de l’EP Fire In the Mind de Balkirat, un chanteur émergent de Montréal. Le concept a été développé en étroite collaboration avec la direction artistique de l’artiste. L’objectif principal était de faire ressentir au public que Balkirat a tout laissé tomber pour poursuivre son rêve de carrière musicale, quittant une vie antérieure de bureaucrate qui ne le rendait pas heureux. Le projet visait à représenter la transition de Balkirat d’un bureaucrate insatisfait à un artiste passionné, en capturant les émotions et la détermination qui accompagnent ce changement. Les visuels devaient refléter l’énergie et l’âme de son EP Fire In the Mind, créant ainsi une connexion authentique avec le public.',
    initiators: [
      {
        name: 'Matias Renaud',
        slug: 'matias-renaud',
      },
    ],
    slug: 'balkirat',
    medias: [
      {
        filename: 'balkirat-1',
        src: '/projects/balkirat/balkirat-1.jpg',
      },
      {
        filename: 'balkirat-2',
        src: '/projects/balkirat/balkirat-2.jpg',
      },
      {
        filename: 'balkirat-3.jpg',
        src: '/projects/balkirat/balkirat-3.jpg',
      },
      {
        filename: 'balkirat-4.jpg',
        src: '/projects/balkirat/balkirat-4.jpg',
      },
    ],
  },
];

export const getProjects = async (): Promise<Project[] | null> => {
  try {
    return projects;
  } catch (error) {
    return null;
  }
};

export const getProject = async (slug: string): Promise<Project | null> => {
  try {
    return projects.find((project) => project.slug === slug) || null;
  } catch (error) {
    return null;
  }
};

export const getProjectsByArtist = async (
  slug: string
): Promise<Project[] | null> => {
  try {
    return projects.filter((project) =>
      project.initiators.some((initiator) => initiator.slug === slug)
    );
  } catch (error) {
    return null;
  }
};
