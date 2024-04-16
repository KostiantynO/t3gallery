import { db } from '~/server/db';

const getPosts = async () => await db.query.posts.findMany();

const HomePage = async () => {
  const posts = await getPosts();

  const postList = posts.map(({ id, name }) => <div key={id}>{name}</div>);

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center">
      Hello World!
      {postList}
    </main>
  );
};

export default HomePage;
