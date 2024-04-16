import { db } from '~/server/db';

const getImages = async () =>
  await db.query.images.findMany({
    orderBy: ({ id }, { desc }) => desc(id),
  });

const HomePage = async () => {
  const images = await getImages();

  const gallery = images.map(({ id, url, name }) => (
    <li key={id}>
      <img src={url} alt={name} />
      <span>{name}</span>
    </li>
  ));

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center px-8">
      <ul className="grid grid-cols-3 gap-4">{gallery}</ul>
    </main>
  );
};

export default HomePage;
