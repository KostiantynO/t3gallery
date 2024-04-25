import { auth } from '@clerk/nextjs/server';
import 'server-only';

import { db } from '~/server/db';

export const getMyImages = async () => {
  const { userId } = auth();

  if (!userId) throw new Error('Unauthorized');

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, userId),
    orderBy: ({ id }, { desc }) => desc(id),
  });

  return images;
};

export const getImage = async (imgId: number) => {
  const { userId } = auth();

  if (!userId) throw new Error('Unauthorized');

  const image = await db.query.images.findFirst({
    where: (model, { eq, and }) =>
      and(eq(model.id, imgId), eq(model.userId, userId)),
  });

  if (!image) throw new Error('Image not found');

  if (image.userId !== userId) throw new Error('Unauthorized');

  return image;
};
