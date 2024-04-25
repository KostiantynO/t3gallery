import { getImage } from '~/server/queries';

interface FullPageImageViewProps {
  photoId: number;
}

export const FullPageImageView = async ({
  photoId,
}: FullPageImageViewProps) => {
  const { url, name } = await getImage(photoId);

  return <img src={url} alt={name} className="w-96" />;
};
