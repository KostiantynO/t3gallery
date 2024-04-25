import { getImage } from '~/server/queries';

interface FullPageImageViewProps {
  photoId: number;
}

export const FullPageImageView = async ({
  photoId,
}: FullPageImageViewProps) => {
  const { url, name } = await getImage(photoId);

  return (
    <div className="flex h-full w-full min-w-0 text-white">
      <div className="flex-shrink flex justify-center items-center">
        <img src={url} alt={name} className="flex-shrink object-contain" />
      </div>

      <div className="flex w-48 flex-col flex-shrink-0 border-l">
        <div className="text-sm font-bold">{name}</div>
      </div>
    </div>
  );
};
