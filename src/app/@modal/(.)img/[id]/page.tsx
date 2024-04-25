import { FullPageImageView } from '~/parts/FullPageImageView';

import { Modal } from './Modal';

interface PhotoModalProps {
  params: { id: string };
}

const PhotoModal = ({ params: { id: photoId } }: PhotoModalProps) => {
  const imgIdAsNum = Number(photoId);
  if (Number.isNaN(imgIdAsNum)) throw new Error('Invalid photo id');

  return (
    <Modal>
      <FullPageImageView photoId={imgIdAsNum} />
    </Modal>
  );
};

export default PhotoModal;
