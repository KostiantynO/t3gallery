import { useMemo } from 'react';

const mockUrls = [
  'https://utfs.io/f/dad74ce1-c8e8-46d8-8318-748a8afbb0fd-oprazk.webp',
  'https://utfs.io/f/3c86d1fd-67f0-4e55-b15a-98321c333654-vh5ts1.webp',
  'https://utfs.io/f/075380ca-5944-4982-a6bb-2022bc778ffb-hycs73.webp',
];

const mockImages = [...mockUrls, ...mockUrls, ...mockUrls].map((url, idx) => ({
  id: idx + 1,
  url,
}));

const HomePage = () => {
  const gallery = useMemo(
    () =>
      mockImages.map(({ id, url }) => (
        <li key={id}>
          <img src={url} alt="activity" />
        </li>
      )),
    []
  );

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center px-8">
      <ul className="grid grid-cols-3 gap-4">{gallery}</ul>
    </main>
  );
};

export default HomePage;
