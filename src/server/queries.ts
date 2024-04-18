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
