export const config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
    timeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || '10000', 10),
  },
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'LuMuse',
    version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
    debug: process.env.NEXT_PUBLIC_DEBUG === 'true',
    dev: process.env.NODE_ENV !== 'production',
    lk: process.env.NEXT_PUBLIC_LK_URL || 'https://lk.lumuse.ai',
  },
} as const;

export type AppConfig = typeof config;