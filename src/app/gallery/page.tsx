import { SignedIn, SignedOut } from '@clerk/nextjs';

import { getMyImages } from '~/server/queries';

const Gallery = async () => {
  const images = await getMyImages();

  const gallery = images.map(({ id, url, name }) => (
    <li key={id}>
      <img src={url} alt={name} />
      <span>{name}</span>
    </li>
  ));

  return <ul className="grid grid-cols-3 gap-4">{gallery}</ul>;
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
