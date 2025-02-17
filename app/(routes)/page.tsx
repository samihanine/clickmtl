import { HomeLinks } from '../_components/NavbarLinks';
import HomeSection from '../_components/HomeSection';
import Image from 'next/image';
import LandingVideo from '../_components/LandingVideo';
import Link from 'next/link';
import { getHomeMedia } from '@/src/models/home';

const SectionLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className='text-base font-medium uppercase text-gray-500 hover:text-gray-900'
    >
      {children}
    </Link>
  );
};

const Home = async () => {
  const home = await getHomeMedia();

  if (!home) return <div>LOADING</div>;

  return (
    <main className='bg-black'>
      <section className='flex h-screen w-full items-center justify-center'>
        <LandingVideo video={home.heroSection.src} />
        <div className='absolute flex flex-col items-center gap-[--gap]'>
          <div className='invisible flex flex-col items-center gap-[16px]'>
            <HomeLinks />
          </div>
          <img className='w-1/3' src='/logo/lg-logo.png' alt='' />
          <div className='flex flex-col items-center gap-[16px]'>
            <HomeLinks />
          </div>
        </div>
      </section>
      <HomeSection
        src={home.artistsSection.src}
        className='bg-home-four bg-cover text-white'
      >
        <p className='title text-center uppercase'>
          {home.artistsSection.text}
        </p>
        <SectionLink href='/artists'>voir nos artistes</SectionLink>
      </HomeSection>
      <HomeSection
        src={home.projectsSection.src}
        className={`bg-cover text-white`}
      >
        <p className='title text-center uppercase'>
          {home.projectsSection.text}
        </p>
        <SectionLink href='/projects'>Voir nos projets</SectionLink>
      </HomeSection>

      <section className='flex flex-col items-center justify-between bg-[--primary-color] p-[--px] md:h-screen md:flex-row'>
        <div className='mt-5 flex flex-col-reverse gap-[--gap] md:mt-0 md:w-1/2 md:flex-col'>
          <p className='text-lg uppercase md:text-xl'>
            {`Née d'une passion pour la création et d'un profond désir de raconter des histoires, Click a vu le jour en 2022 sous l'impulsion de ses cofondateurs, Matias et Louis, qui explorent le monde de la création depuis 2017.`}
            <br /> <br />
            {`Click est une maison de création publicitaire qui donne vie à chaque projet en le transformant en scène cinématographique. Réunissant des artistes visionnaires, nous produisons des visuels audacieux qui repoussent les limites du possible. Plus qu'une agence, Click est une communauté dynamique et inclusive, ouverte aux talents passionnés et déterminés à redéfinir les codes de la publicité.`}
          </p>
          <SectionLink href={'/about'}>À PROPOS</SectionLink>
        </div>
        <Image
          className='mt-5 h-full object-cover pr-4 md:mt-0 md:w-1/3'
          src={home.aboutSection.src}
          alt='1.jpg'
          width={800}
          height={800}
        />
      </section>
      {/*
      <section className='flex flex-col-reverse md:flex-row md:h-screen items-center justify-between gap-[--gap] bg-[--primary-color] p-[--px]'>
        <Image
          className='h-full mb-5 md:mb-0 pr-4 md:w-1/3 object-cover'
          src={home.contactSection.src}
          alt='1.jpg'
          width={800}
          height={800}
        />
        <div className='flex md:w-1/2 flex-col gap-[--gap]'>
          <p className='subtitle'>{home.contactSection.text}</p>
          <SectionLink href={'/contact'}>CONTACTEZ-NOUS</SectionLink>
        </div>
      </section>
      */}
    </main>
  );
};

export default Home;
