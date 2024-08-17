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
    title: 'Livart Aube',
    projectCover: '/projects/livart-aube/livart-aube-5.jpg',
    description:
      'Au printemps 2024, nous avons eu le plaisir immense de collaborer avec Moog Audio et le Livart à Montréal pour l’ouverture de leur nouvelle salle d’événements. La particularité de ce projet réside dans la rareté du système audio installé par l’équipe de Moog Audio Pro. Ils ont installé un système audio Void, l’un des rares au monde et le premier au Canada! Notre mission consistait à capturer le lancement de la salle et à en faire une vidéo récapitulative. Nous sommes très fiers du résultat, car ce projet nous a permis de réunir deux de nos passions : la musique et la vidéo.',
    initiators: [
      {
        name: 'Matias Renaud',
        slug: 'matias-renaud',
      },
      {
        name: 'Louis Gregoire',
        slug: 'louis-gregoire',
      },
    ],
    slug: 'livart-aube',
    medias: Array.from({ length: 7 }).map((_, i) => ({
      filename: `livart-aube-${i + 1}`,
      src: `/projects/livart-aube/livart-aube-${i + 1}.jpg`,
    })),
  },
  {
    type: 'image',
    title: 'Moog Audio',
    projectCover: '/projects/moog-audio/moog-audio-background.webp',
    description:
      'Au printemps 2024, nous avons eu le plaisir immense de collaborer avec Moog Audio et le Livart à Montréal pour l’ouverture de leur nouvelle salle d’événements. La particularité de ce projet réside dans la rareté du système audio installé par l’équipe de Moog Audio Pro. Ils ont installé un système audio Void, l’un des rares au monde et le premier au Canada! Notre mission consistait à capturer le lancement de la salle et à en faire une vidéo récapitulative. Nous sommes très fiers du résultat, car ce projet nous a permis de réunir deux de nos passions : la musique et la vidéo.',
    initiators: [
      {
        name: 'Matias Renaud',
        slug: 'matias-renaud',
      },
      {
        name: 'Louis Gregoire',
        slug: 'louis-gregoire',
      },
    ],
    slug: 'moog-audio',
    medias: Array.from({ length: 7 }).map((_, i) => ({
      filename: `moog-audio-${i + 1}`,
      src:
        i === 5
          ? `/projects/moog-audio/moog-audio-${i + 1}.gif`
          : `/projects/moog-audio/moog-audio-${i + 1}.jpg`,
    })),
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
    title: 'Yves Tremblay',
    projectCover: '/projects/yves-tremblay/yves-tremblay-background.webp',
    videoLink: 'https://www.youtube.com/watch?v=eQaTVnSRNpI',
    description:
      'Nous avons eu le plaisir immense de travailler avec Yves Tremblay , photographe talentueux et fondateur de Photo Hélico. Notre mission était de capturer la magie de son unique métier à travers notre objectif. Monter dans l’hélicoptère avec lui pour le filmer en pleine action au-dessus de notre belle ville de Montréal a été une expérience inoubliable. Voir Yves à l’œuvre, avec une vue imprenable sur Mtl, nous a permis de documenter son art avec une perspective nouvelle et excitante. Merci à Yves Tremblay pour cette opportunité extraordinaire et à Camille Renaud, d’avoir dirigé le projet. Nous sommes impatients de partager plus de moments inspirants et de continuer à documenter son magnifique travail.',
    initiators: [
      {
        name: 'Matias Renaud',
        slug: 'matias-renaud',
      },
    ],
    slug: 'yves-tremblay',
    medias: [
      {
        filename: 'yves-tremblay-1',
        src: 'https://www.youtube.com/watch?v=eQaTVnSRNpI',
      },
      {
        filename: 'yves-tremblay-1',
        src: 'https://drive.google.com/file/d/1JZ_YPrkbrPVm7elQQ3XZYngFjCex62X2/preview',
      },
      {
        filename: 'yves-tremblay-1',
        src: 'https://drive.google.com/file/d/1EsNtFhAuvnAk0TQWJgiC45N6dD-s7SY-/preview',
      },
    ],
  },
  {
    type: 'image',
    title: 'ACDF Architecture',
    projectCover: '',
    description:
      "En 2023, nous avons eu l'honneur d'être approchés par ACDF, une prestigieuse firme d’architecture Montréalaise, pour documenter l'ensemble de leurs projets architecturaux. Jusqu'à récemment, ACDF se débrouillaient avec les moyens du bord, sans stratégie claire, ce qui se traduisait par des résultats insatisfaisants. En découvrant notre solution, ils ont été séduits par notre capacité à interpréter fidèlement leur vision à travers notre processus créatif. Nous sommes ravis de cette collaboration et impatients de donner vie à d’autres  projets.",
    initiators: [
      {
        name: 'Matias Renaud',
        slug: 'matias-renaud',
      },
      {
        name: 'Louis Gregoire',
        slug: 'louis-gregoire',
      },
    ],
    slug: 'acdf-architecture',
    medias: [
      {
        filename: 'acdf-architecture-1',
        src: 'https://youtu.be/RX78K-QkgKM',
      },
      {
        filename: 'acdf-architecture-2',
        src: 'https://www.youtube.com/watch?v=2Ee-5cU9cU0',
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
    medias: Array.from({ length: 4 }).map((_, i) => ({
      filename: `balkirat-${i + 1}`,
      src: `/projects/balkirat/balkirat-${i + 1}.jpg`,
    })),
  },
  {
    type: 'image',
    title: 'Pétroliers',
    projectCover: '/projects/petroliers/petroliers-background.webp',
    description:
      'Nous avons eu le privilège incroyable de shooter Les Pétroliers de Laval pour la saison 2023-2024! Dès le début de la saison, ils nous ont approchés avec une vision claire: se démarquer des autres équipes de la LNAH Québec. Grâce à une collaboration exceptionnelle, 58 vidéos et 1.8M de vues plus tard, nous sommes fiers de dire qu’ils ont brillamment réussi. Un immense merci à tous ceux qui ont contribué à rendre cette saison riche en création et en émotions. Nous avons hâte de poursuivre cette aventure l’année prochaine et de continuer à repousser les limites de la créativité ensemble. À la saison prochaine!',
    initiators: [
      {
        name: 'Louis Gregoire',
        slug: 'louis-gregoire',
      },
      {
        name: 'Florian',
        slug: 'florian',
      },
      {
        name: 'Khoa',
        slug: 'khoa',
      },
    ],
    slug: 'petroliers',
    medias: [
      {
        filename: 'petroliers-1',
        src: 'https://drive.google.com/file/d/1IX4NlVrqMf56IjmEMETeSoFYD2autmlG/preview',
      },
      {
        filename: 'petroliers-2',
        src: 'https://drive.google.com/file/d/1exZKnQVIdRIa2GWDw5HIiPIuPXUoVTBZ/preview',
      },
      {
        filename: 'petroliers-3',
        src: 'https://drive.google.com/file/d/1yyW9jJXgquE8kCLy_YF4HtThfFMRMZhP/preview',
      },
      {
        filename: 'petroliers-4',
        src: 'https://drive.google.com/file/d/1Em1lVkZ1-fXuiw3fOZmozXUmg0WPmxSB/preview',
      },
    ],
  },
  {
    type: 'image',
    title: 'Spicebros',
    projectCover: '/projects/spicebros/spicebros-background.webp',
    description:
      "Depuis 2022, nous avons pris en charge l'intégralité du contenu de Spicebros Montréal, une chaîne de fast food indienne. Nous avons créé des vidéos promotionnelles divertissantes, orchestré des campagnes d'ouverture de magasin, couvert des festivals et lancé de nouveaux menus. Nous sommes fiers d'avoir établi un partenariat durable au fil du temps et d'être devenus l'équipe de création attitrée de cette franchise montréalaise.",
    initiators: [
      {
        name: 'Louis Gregoire',
        slug: 'louis-gregoire',
      },
      {
        name: 'Édouard',
        slug: 'edouard',
      },
      {
        name: 'Khoa',
        slug: 'khoa',
      },
    ],
    slug: 'spicebros',
    medias: [
      {
        filename: 'spicebros-2',
        src: 'https://drive.google.com/file/d/1_frHeJevangj5ysU3jgJbRLNsczIQbGq/preview',
      },
      {
        filename: 'spicebros-3',
        src: 'https://drive.google.com/file/d/1Lv8K_rIAlMm8qZjTCljXPtt2Xz42yBB9/preview',
      },
      {
        filename: 'spicebros-4',
        src: 'https://drive.google.com/file/d/1r1QqKJ48Gcp5YW9MpTiJr2UosyLtEzJm/preview',
      },
      {
        filename: 'spicebros-5',
        src: 'https://drive.google.com/file/d/1h9OG9Jz9wBwu5U5smSECZILdhQE-Y8rp/preview',
      },
    ],
  },
  {
    type: 'image',
    title: 'Jack Layne',
    projectCover: '/projects/jack-layne/jack-layne-background.jpg',
    description:
      "Cette série de photos a été réalisée pour illustrer l'univers créatif et unique du rappeur émergent Jack Layne. Avec une ligne directrice en tête, Jack nous a donné une quasi carte blanche pour développer le concept du shoot. Finalement, nous avons réussi à créer une ambiance qui fusionne nos deux visions artistiques.",
    initiators: [
      {
        name: 'Matias Renaud',
        slug: 'matias-renaud',
      },
    ],
    slug: 'jack-layne',
    medias: Array.from({ length: 3 }).map((_, i) => ({
      filename: `jack-layne-${i + 1}`,
      src: `/projects/jack-layne/jack-layne-${i + 1}.jpg`,
    })),
  },
  {
    type: 'image',
    title: 'Garage Freno',
    projectCover: '/projects/garage-freno/garage-freno-background.webp',
    description:
      "En 2023, l’agence média Nxstar nous a lancé un beau défi: photographier la beauté d’un garage. Bien qu'un garage soit souvent en désordre et recouvert de saleté, nous avons réussi à trouver la beauté dans l'authenticité du métier. En montrant la réalité du travail, nous sommes parvenus à le révéler dans son état le plus naturel. Pour les nombreuses séances photos passées au garage, nous ne nous sommes pas armés du plus gros matériel. Au contraire, nous sommes revenus aux fondamentaux de la photographie, nous promenant discrètement dans les allées avec notre appareil à la main pour capturer des moments spontanés, sans aucune mise en scène.",
    initiators: [
      {
        name: 'Matias Renaud',
        slug: 'matias-renaud',
      },
    ],
    slug: 'garage-freno',
    medias: Array.from({ length: 6 }).map((_, i) => ({
      filename: `garage-freno-${i}`,
      src: `/projects/garage-freno/garage-freno-${i}.jpg`,
    })),
  },
  {
    type: 'image',
    title: 'Ville Vêtement',
    projectCover: '/projects/ville-vetement/ville-vetement-background.jpg',
    description:
      "En tant que jeune entreprise montréalaise, c'est toujours un plaisir de rencontrer d'autres jeunes passionnés comme nous. Ville Vêtement est une compagnie de vêtements émergente à Montréal qui représente notre ville avec des vêtements sobres et un look street style. Nous avons donc réalisé une campagne de photos illustrant leurs valeurs pour le lancement de leur nouvelle marchandise.",
    initiators: [
      {
        name: 'Matias Renaud',
        slug: 'matias-renaud',
      },
    ],
    slug: 'ville-vetement',
    medias: Array.from({ length: 3 }).map((_, i) => ({
      filename: `ville-vetement-${i + 1}`,
      src: `/projects/ville-vetement/ville-vetement-${i + 1}.jpg`,
    })),
  },
  {
    type: 'image',
    title: 'Evirum',
    projectCover: '/projects/evirum/evirum-2.jpg',
    description:
      "C’est avec un immense plaisir que nous avons suivi les voitures d’Evirum tout au long de la saison 2023 des NASCAR Pinty's. En tant que passionnés d’automobile et de ce sport unique, nous avons pris un réel plaisir à documenter les performances des coureurs d’Evirum, tant en photographie qu’en vidéographie.",
    initiators: [
      {
        name: 'Matias Renaud',
        slug: 'matias-renaud',
      },
      {
        name: 'Louis Gregoire',
        slug: 'louis-gregoire',
      },
    ],
    slug: 'evirum',
    medias: [
      ...Array.from({ length: 7 }).map((_, i) => ({
        filename: `evirum-${i + 1}`,
        src: `/projects/evirum/evirum-${i + 1}.jpg`,
      })),
      {
        filename: 'evirum-8',
        src: 'https://drive.google.com/file/d/1YD89WnGovIEOSq7W1SuNd6jvgO2LWNyt/preview',
      },
      {
        filename: 'evirum-9',
        src: 'https://drive.google.com/file/d/193Xrk4GUeZO_OVhuj3yfOtmlnRurJnNM/preview',
      },
      {
        filename: 'evirum-10',
        src: 'https://drive.google.com/file/d/1O3cvN1rk4e9fAxl3JsVeHjT3BdhQSXJo/preview',
      },
      {
        filename: 'evirum-11',
        src: 'https://drive.google.com/file/d/1gF37WdhQiVjX6hHtWMgabBNNpOuYgJu5/preview',
      },
    ],
  },
  {
    type: 'image',
    title: 'Globalista',
    projectCover: '/projects/globalista/globalista-5.jpg',
    description:
      "En tant que jeune entreprise montréalaise, c'est toujours un plaisir de rencontrer d'autres jeunes passionnés comme nous. Ville Vêtement est une compagnie de vêtements émergente à Montréal qui représente notre ville avec des vêtements sobres et un look street style. Nous avons donc réalisé une campagne de photos illustrant leurs valeurs pour le lancement de leur nouvelle marchandise.",
    initiators: [
      {
        name: 'Matias Renaud',
        slug: 'matias-renaud',
      },
    ],
    slug: 'globalista',
    medias: Array.from({ length: 10 }).map((_, i) => ({
      filename: `globalista-${i}`,
      src: `/projects/globalista/globalista-${i}.jpg`,
    })),
  },
  {
    type: 'image',
    title: 'Scan',
    projectCover: '/projects/scan/scan-background.jpg',
    description:
      "Click adore travailler sur des shoots créatifs, parfois nous sommes assez excentriques sur certaines idées peuvent sembler simples, mais c'est justement ce qui nous passionne dans la photographie. Cette série a été réalisée par Matias, qui a découvert chez lui une photo de son père adolescent, s'amusant à scanner son visage avec une imprimante. Il a alors tenté de reproduire ces photos avec une approche plus artistique, en élaborant un univers unique à l'intérieur de l'imprimante.",
    initiators: [
      {
        name: 'Matias Renaud',
        slug: 'matias-renaud',
      },
    ],
    slug: 'scan',
    medias: Array.from({ length: 3 }).map((_, i) => ({
      filename: `scan-${i + 1}`,
      src: `/projects/scan/scan-${i + 1}.jpg`,
    })),
  },
  {
    type: 'image',
    title: 'SRA HEC',
    projectCover: '/projects/sra-hec/sra-hec-background.webp',
    description:
      "Chez Click, nous adorons relever des défis créatifs, et ce projet ne fait pas exception. La collaboration avec la société des relations d’affaires du HEC nous a permis de démontrer notre capacité à créer des contenus visuels percutants et de qualité. Nous sommes particulièrement fiers de notre approche innovante et de notre capacité à capter l'essence même des projets que nous couvrons chez la SRA. Nous sommes heureux d'annoncer que cette collaboration avec la SRA se poursuivra au fil du temps. Nous continuerons à les accompagner dans la mise en valeur de leurs divers projets, en offrant des solutions créatives personnalisées qui reflètent leur dynamisme et leur engagement.",
    initiators: [
      {
        name: 'Louis Gregoire',
        slug: 'louis-gregoire',
      },
    ],
    slug: 'sra-hec',
    medias: [
      {
        filename: 'sra-hec-1',
        src: 'https://youtu.be/mMyJR_W-rqc',
      },
      {
        filename: 'sra-hec-2',
        src: 'https://youtu.be/11RlSoboedY',
      },
    ],
  },
  {
    type: 'image',
    title: 'Enclosed',
    projectCover: '/projects/enclosed/enclosed-background.jpg',
    description:
      "Enclosed est un projet créatif réalisé par Matias en collaboration avec la directrice artistique Emma Berrou. L’idée centrale était de confectionner une grande boîte, renfermant une créature unique. Cette créature, représentée par une personne ayant une colonne vertébrale en silicone conçue par Emma, symbolisait la différence et l'originalité. Le photoshoot a été une collaboration étroite avec Malik Theart, danseur à Révolution 2023, apportant une dimension artistique et expressive au projet.",
    initiators: [
      {
        name: 'Matias Renaud',
        slug: 'matias-renaud',
      },
    ],
    slug: 'enclosed',
    medias: Array.from({ length: 3 }).map((_, i) => ({
      filename: `enclosed-${i + 1}`,
      src: `/projects/enclosed/enclosed-${i + 1}.jpg`,
    })),
  },
  {
    type: 'image',
    title: 'Duc de Lorraine',
    projectCover: '/projects/duc-de-lorraine/duc-de-lorraine-background.webp',
    description:
      'Durant trois ans, Click a été le partenaire de création du Duc de Lorraine, la plus ancienne pâtisserie française à Montréal. Nous avons réalisé l’intégralité de leur contenu, comprenant la photographie des menus, les campagnes de célébration, la couverture d’événements, les vidéos promotionnelles, et plus encore.',
    initiators: [
      {
        name: 'Louis Gregoire',
        slug: 'louis-gregoire',
      },
    ],
    slug: 'duc-de-lorraine',
    medias: [
      {
        filename: 'duc-de-lorraine-1',
        src: 'https://drive.google.com/file/d/1cy4vOz5XS0VUZrHQYwR7xIRY0sZ1nnZz/preview',
      },
      {
        filename: 'duc-de-lorraine-2',
        src: 'https://drive.google.com/file/d/1doHLug34J2iVvTpImc1CTvF3iQUcmmAw/preview',
      },
      {
        filename: 'duc-de-lorraine-3',
        src: 'https://drive.google.com/file/d/19iClrqGaQ-QPdmdp0vGf81dB9utYgmOn/preview',
      },
      {
        filename: 'duc-de-lorraine-4',
        src: 'https://drive.google.com/file/d/1RoOkwieyhyaWxC25NjcTOHfbNlZSN4Bi/preview',
      },
      {
        filename: 'duc-de-lorraine-5',
        src: 'https://drive.google.com/file/d/1lJbWiqAtHMyS3-aX7H-hc9PQIsjQ3ygb/preview',
      },
      {
        filename: 'duc-de-lorraine-6',
        src: 'https://drive.google.com/file/d/1YTXZmrG5hvSN3XI33NpW-8uxH6a4bDFh/preview',
      },
      {
        filename: 'duc-de-lorraine-7',
        src: 'https://drive.google.com/file/d/1BlWOmul17wl0BYR5BnYueGqirnZI4Ywe/preview',
      },
      {
        filename: 'duc-de-lorraine-8',
        src: 'https://drive.google.com/file/d/1m_V_q8czXe1IhfdmNZ_4zZD0em0v0ixS/preview',
      },
      {
        filename: 'duc-de-lorraine-9',
        src: 'https://drive.google.com/file/d/1NovZ4zIBfonoE8x8lrarKkv4dF8JIaCK/preview',
      },
    ],
  },
  /*{
    type: 'image',
    title: 'Paint & Sip',
    projectCover: '',
    description: '',
    initiators: [
      {
        name: 'Louis Gregoire',
        slug: 'louis-gregoire',
      },
    ],
    slug: 'paint-sip',
    medias: [],
  },
  */
  {
    type: 'image',
    title: 'Mariage Claude & François',
    projectCover: '/projects/mariage-claude/mariage-claude-1.jpg',
    description:
      'En 2024, nous avons été mandatés pour couvrir l’intégralité d’un mariage de 115 personnes au New City Gas. Cet événement représentait un véritable défi, étant la première fois que l’équipe de Click couvrait seule un mariage d’une telle envergure. Nous avons pris un grand plaisir à documenter cette journée et sommes extrêmement satisfaits des résultats obtenus.',
    initiators: [
      {
        name: 'Louis Gregoire',
        slug: 'louis-gregoire',
      },
      {
        name: 'Matias Renaud',
        slug: 'matias-renaud',
      },
      {
        name: 'Hugo Cardinal',
        slug: 'hugo-cardinal',
      },
    ],
    slug: 'mariage-claude',
    medias: Array.from({ length: 6 }).map((_, i) => ({
      filename: `mariage-claude-${i + 1}`,
      src: `/projects/mariage-claude/mariage-claude-${i + 1}.jpg`,
    })),
  },
  {
    type: 'image',
    title: 'Volvo s70 1999',
    projectCover: '/projects/volvo/volvo-background.jpg',
    description:
      "Chez Click, nous partageons de nombreuses passions, notamment celle des automobiles. Nous avons eu l'opportunité de photographier une Volvo S70 de 1999. Pour ce projet, nous avons choisi un cadre industriel dans le Mile-End, capturant des images à l'esthétique sombre et texturée.",
    initiators: [
      {
        name: 'Louis Gregoire',
        slug: 'louis-gregoire',
      },
      {
        name: 'Matias Renaud',
        slug: 'matias-renaud',
      },
    ],
    slug: 'volvo',
    medias: Array.from({ length: 27 }).map((_, i) => ({
      filename: `volvo-${i + 1}`,
      src: `/projects/volvo/volvo-${i + 1}.jpg`,
    })),
  },
  {
    type: 'image',
    title: 'Car Crash',
    projectCover: '/projects/car-crash/car-crash-background.jpg',
    description:
      "Le projet photographique, dirigé par le photographe Matias, visait à représenter un accident de voiture avec une touche d'élégance et de raffinement. Il a eu le privilège de collaborer avec la talentueuse danseuse et mannequin Cindy Mateus.",
    initiators: [
      {
        name: 'Matias Renaud',
        slug: 'matias-renaud',
      },
    ],
    slug: 'car-crash',
    medias: Array.from({ length: 4 }).map((_, i) => ({
      filename: `car-crash-${i + 1}`,
      src: `/projects/car-crash/car-crash-${i + 1}.jpg`,
    })),
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
