import type { Handler } from '@netlify/functions';

export const handler: Handler = async () => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      status: 'operational',
      app: 'Stephen Peter Kon Portfolio API',
      domain: 'stephenkon.online',
      timestamp: new Date().toISOString(),
    }),
  };
};
