import { configDotenv } from 'dotenv';

// NOTE: Keep in sync with .env
type EnvVar =
  | 'DATABASE_URL'
  | 'OPENSEA_API_KEY'
  | 'INFURA_KEY'
  | 'DISCORD_TOKEN'
  | 'CHANNEL_ID_REKT';

export const getEnv = (envVar: EnvVar): string => {
  configDotenv();

  const env = process.env[envVar];

  if (!env) {
    throw new Error(`No ${envVar} found!`);
  }

  return env;
};
