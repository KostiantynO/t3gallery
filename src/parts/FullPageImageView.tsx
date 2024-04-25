import { clerkClient } from '@clerk/nextjs/server';

import { getImage } from '~/server/queries';

interface FullPageImageViewProps {
  photoId: number;
}

export const FullPageImageView = async ({
  photoId,
}: FullPageImageViewProps) => {
  const { url, name, userId, createdAt } = await getImage(photoId);

  const { fullName } = await clerkClient.users.getUser(userId);

  const imageCreationDate = new Date(createdAt).toLocaleDateString();

  return (
    <div className="flex h-full w-full min-w-0 text-white">
      <div className="flex flex-shrink flex-grow items-center justify-center">
        <img
          src={url}
          alt={name}
          className="max-h-full flex-grow object-contain"
        />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col border-l lg:w-64">
        <div className="border-b p-2 text-center text-lg">{name}</div>

        <div className="flex flex-col p-2">
          <span>Uploaded by:</span>
          <span>{fullName}</span>
        </div>

        <div className="flex flex-col p-2">
          <span>Created On:</span>
          <span>{imageCreationDate}</span>
        </div>
      </div>
    </div>
  );
};
