import { SignedIn, SignedOut } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

import { getMyImages } from '~/server/queries';

const Gallery = async () => {
  const images = await getMyImages();

  const gallery = images.map(({ id, url, name }) => (
    <li key={id} className="h-48 w-48">
      <Link href={`/img/${id}`}>
        <Image src={url} alt={name} width={192} height={192} />
        <span>{name}</span>
      </Link>
    </li>
  ));

  return <ul className="grid auto-cols-auto grid-cols-3 gap-4">{gallery}</ul>;
};

const GalleryPage = async () => (
  <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center px-8">
    <SignedOut>
      <p className="h-full w-full text-center text-2xl">Please sign in above</p>
    </SignedOut>

    <SignedIn>
      <Gallery />
    </SignedIn>
  </main>
);

export default GalleryPage;
