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
      className='text-base font-medium uppercase text-gray-800 hover:text-gay-600 hover:underline'
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
        <div className='flex flex-col justify-center items-center'>

    
        <p className='title text-center'>{home.artistsSection.text}</p>
        <SectionLink href='/artists'>voir nos artistes</SectionLink>
        </div>
      </HomeSection>
      <HomeSection
        src={home.projectsSection.src}
        className={`bg-cover text-white`}
      >
        <p className='title text-center'>{home.projectsSection.text}</p>
        <SectionLink href='/projects'>Voir nos projets</SectionLink>
      </HomeSection>

      <section className='flex flex-col items-center justify-between bg-[--primary-color] p-[--px] md:h-screen md:flex-row'>
        <div className='mt-5 flex flex-col-reverse gap-[--gap] md:mt-0 md:w-1/2 md:flex-col'>
          <p className='text-lg md:text-xl'>{home.aboutSection.text}</p>
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
