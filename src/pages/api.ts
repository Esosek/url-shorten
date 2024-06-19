import type { APIContext } from 'astro';

export const prerender = false;

export async function GET({ request }: APIContext) {
  const urlSearchParam = new URL(request.url).searchParams.get('url');

  const url = 'https://api.short.io/links';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: import.meta.env.SHORT_API_KEY,
    },
    body: JSON.stringify({
      originalURL: urlSearchParam,
      domain: 'fofd.short.gy',
    }),
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    return new Response(JSON.stringify({ body: data.secureShortURL }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return new Response(
        JSON.stringify({ error: 'Fetching shortened link failed.' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  }
}
