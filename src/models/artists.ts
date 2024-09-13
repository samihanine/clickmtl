'use server';

import { z } from 'zod';

const artistSchema = z.object({
  name: z.string(),
  bio: z.string(),
  email: z.string(),
  portrait: z.string(),
  bgCover: z.string(),
  roles: z.array(z.string()),
  slug: z.string(),
  instagramUrl: z.string().optional(),
  websiteUrl: z.string().optional(),
});

export type Artist = z.infer<typeof artistSchema>;

const artists: Artist[] = [
  {
    name: 'Matias Renaud',
    bio: "À l'âge de 12 ans, Matias découvre l'univers captivant de la photographie, où l'interaction entre l'humain et son environnement est sublimée. Son désir inné de création et de connexion humaine l'a naturellement conduit à se concentrer sur des projets de portraits, où il cherche à révéler l'essence même de ses sujets à travers son objectif. Parallèlement, sa passion pour le cinéma, la direction de la photographie et l'aspect artistique lui permet d'explorer de nouvelles avenues créatives et d'enrichir son expression artistique.",
    email: 'matias@clickmtl.com',
    portrait: '/artists/matias-renaud.jpg',
    bgCover: '/artists/matias-renaud-cover.jpg',
    roles: ['Co-Fondateur', 'Photographe', ' Directeur photo'],
    slug: 'matias-renaud',
    instagramUrl: 'https://www.instagram.com/matrnaud/',
  },
  {
    name: 'Louis Gregoire',
    bio: "Entrepreneur depuis l'âge du berceau, je suis actuellement en deuxième année d'université au HEC. Ma trajectoire m'a amené à évoluer en tant que gestionnaire par nécessité, puis par passion. En tant que vidéaste, je dirige l’équipe de click, avec une forte orientation vers la création artistique. Mon parcours m'a permis d'acquérir une expertise significative en gestion, organisation et prise de décisions stratégiques. Je suis résolu à relever de nouveaux défis avec une approche axée sur la créativité et l'innovation, et je suis enthousiaste à l'idée de partager cette passion avec mes collaborateurs!",
    email: 'louis@clickmtl.com',
    portrait: '/artists/louis-gregoire.jpg',
    bgCover: '/artists/louis-gregoire-cover.jpg',
    roles: ['Co-Fondateur', 'Vidéaste'],
    slug: 'louis-gregoire',
    instagramUrl: 'https://www.instagram.com/louis.gregoire',
  },
  {
    name: 'Nicola Bevacqua',
    bio: "Ayant toujours eu un intérêt pour l’art, Nicolas avait toujours une caméra à sa portée lorsqu'il était enfant. Il aimait faire de la musique et dessiner, mais ce qui est resté à ce jour est la photo. Il s'est investi plus sérieusement dans l’apprentissage de la photographie à 15 ans avec son cousin Louis à un camp photo où il a rencontré Matias et où il a commencé à développer son propre style de photographie, notamment la photographie urbaine et automobile. À ce jour, il en apprend constamment sur la photographie et la beauté de celle-ci.",
    email: '',
    portrait: '/artists/nicola-bevacqua.jpg',
    bgCover: '',
    roles: ['Photographe'],
    slug: 'nicola-bevacqua',
    instagramUrl: 'https://www.instagram.com/urban.originals/',
  },
  {
    name: 'Lucas Macé',
    bio: '',
    email: '',
    portrait: '/artists/lucas-mace.jpg',
    bgCover: '/artists/lucas-mace-cover.jpg',
    roles: ['Photographe', 'Vidéaste'],
    slug: 'lucas-mace',
    instagramUrl: 'https://www.instagram.com/omfgxz_/',
  },
  {
    name: 'Khoa',
    bio: '',
    email: '',
    portrait: '/artists/khoa.jpg',
    bgCover: '',
    roles: ['Réalisateur', 'Vidéaste'],
    slug: 'khoa',
    instagramUrl: 'https://www.instagram.com/khoat.mp4/',
  },
  {
    name: 'Hugo Cardinal',
    bio: '',
    email: '',
    portrait: '',
    bgCover: '/artists/hugo-cardinal-cover.jpg',
    roles: ['Photographe'],
    slug: 'hugo-cardinal',
    instagramUrl: 'https://www.instagram.com/hugobcardinal/',
  },
  {
    name: 'Édouard',
    bio: "Édouard Lamarre est un adepte de la vidéo, travaillant dans la conception, la réalisation et le montage de contenu. En se concentrant sur plusieurs formats et médias, il souhaite partager l'actualité avec un grand public, selon son propre style.",
    email: '',
    portrait: '/artists/edouard.jpg',
    bgCover: '/artists/edouard-cover.jpg',
    roles: ['Réalisateur', 'Vidéaste'],
    slug: 'edouard',
  },
  {
    name: 'Florian',
    bio: '',
    email: '',
    portrait: '/artists/florian.jpg',
    bgCover: '',
    roles: ['Photographe'],
    slug: 'florian',
    instagramUrl: 'https://www.instagram.com/mlt.prod/',
  },
];

export const getArtists = async (): Promise<Artist[] | null> => {
  try {
    return artists;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getArtist = async (artistSlug: string): Promise<Artist | null> => {
  try {
    return artists.find((artist) => artist.slug === artistSlug) || null;
  } catch (error) {
    return null;
  }
};
