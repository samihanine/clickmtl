'use server';

import { z } from 'zod';

const homeMediaSchema = z.object({
  heroSection: z.object({
    src: z.string(),
  }),
  artistsSection: z.object({
    text: z.string(),
    src: z.string(),
  }),
  projectsSection: z.object({
    text: z.string(),
    src: z.string(),
  }),
  aboutSection: z.object({
    text: z.string(),
    src: z.string(),
  }),
  contactSection: z.object({
    text: z.string(),
    src: z.string(),
  }),
});

export type HomeMedia = z.infer<typeof homeMediaSchema>;

export const getHomeMedia = async (): Promise<HomeMedia | null> => {
  try {
    return {
      heroSection: {
        src: '/projects/escape/escape-video.mp4',
      },
      artistsSection: {
        text: 'Réseau',
        src: '/home/home-artists.jpg',
      },
      aboutSection: {
        text: "Click a vu le jour à partir d'une passion débordante et d'un désir profond de création. Les cofondateurs, Matias et Louis, ont d'abord exploré le monde à travers l'objectif de la photographie. Leur esprit entrepreneurial ne tarda pas à se manifester, les conduisant à établir leur propre agence de création en 2022. Aujourd'hui, Click se distingue fièrement par son réseau d'artistes en perpétuelle innovation.",
        src: 'https://storage.googleapis.com/clickmtl-web.appspot.com/home%2F2%2F_MG_6528.jpg', // /home/home-about.webp
      },
      projectsSection: {
        text: 'Du click à la création',
        src: 'https://storage.googleapis.com/clickmtl-web.appspot.com/home%2F3%2FIMG_4223.MOV', // "/projects/escape/home-projects.mov",
      },
      contactSection: {
        text: 'LE MASK CACHE CEUX QUI ONT PEUR',
        src: '/home/home-contact.webp',
      },
    } as HomeMedia;
  } catch (error) {
    console.log(error);

    return null;
  }
};
