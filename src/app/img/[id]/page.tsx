import { FullPageImageView } from '~/parts/FullPageImageView';

interface PhotoPageProps {
  params: { id: string };
}

const PhotoPage = ({ params: { id: photoId } }: PhotoPageProps) => {
  const imgIdAsNum = Number(photoId);
  if (Number.isNaN(imgIdAsNum)) throw new Error('Invalid photo id');

  return <FullPageImageView photoId={imgIdAsNum} />;
};

export default PhotoPage;
