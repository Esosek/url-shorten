import type { APIContext } from 'astro';
import getShortenerUrl from '../server/urlShortener';

export const prerender = false;

export async function GET({ request }: APIContext) {
  try {
    const urlSearchParam = new URL(request.url).searchParams.get('url');
    const shortenedUrl = await getShortenerUrl(urlSearchParam);

    return new Response(JSON.stringify({ body: shortenedUrl }), {
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
