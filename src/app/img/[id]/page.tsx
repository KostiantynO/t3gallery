import { getImage } from '~/server/queries';

// import { Modal } from './Modal';

interface PhotoModalProps {
  params: { id: string };
}

const PhotoModal = async ({ params: { id: photoId } }: PhotoModalProps) => {
  const imgIdAsNum = Number(photoId);
  if (Number.isNaN(imgIdAsNum)) throw new Error('Invalid photo id');

  const { url, name } = await getImage(imgIdAsNum);

  return (
    <div>
      <img src={url} alt={name} className="w-96" />
    </div>
  );
};

export default PhotoModal;
