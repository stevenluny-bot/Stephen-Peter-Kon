import type { Handler, HandlerResponse } from '@netlify/functions';

const COMMON_HEADERS: Record<string, string> = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

export const handler: Handler = async (event): Promise<HandlerResponse> => {
  // Support CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: COMMON_HEADERS,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: COMMON_HEADERS,
      body: JSON.stringify({ error: 'Method Not Allowed. Use POST.' }),
    };
  }

  try {
    const payload = JSON.parse(event.body || '{}');
    const { fullName, email, service, subject, message } = payload;

    if (!fullName || !email || !message) {
      return {
        statusCode: 400,
        headers: COMMON_HEADERS,
        body: JSON.stringify({
          error: 'Missing required fields: fullName, email, and message are required.',
        }),
      };
    }

    // In a serverless environment, log the inquiry or forward to external provider
    console.log('[Inquiry Received]', {
      fullName,
      email,
      service,
      subject,
      recipient: 'stevenluny@gmail.com',
      timestamp: new Date().toISOString(),
    });

    return {
      statusCode: 200,
      headers: COMMON_HEADERS,
      body: JSON.stringify({
        success: true,
        message: 'Inquiry received successfully via Netlify Function.',
        data: {
          fullName,
          email,
          service,
          subject,
          timestamp: new Date().toISOString(),
        },
      }),
    };
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : 'Invalid JSON body';
    return {
      statusCode: 400,
      headers: COMMON_HEADERS,
      body: JSON.stringify({ error: `Bad Request: ${errMsg}` }),
    };
  }
};
