import { type Config } from 'drizzle-kit';

import { env } from '~/env';

const drizzleConfig = {
  schema: './src/server/db/schema.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ['t3gallery_*'],
} satisfies Config;

export default drizzleConfig;
