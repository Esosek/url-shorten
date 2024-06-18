import type { APIContext } from 'astro';

export const prerender = false;

export async function GET({ request }: APIContext) {
  const urlSearchParam = new URL(request.url).searchParams.get('url');
  try {
    const url = `https://ulvis.net/api.php?type=json&url=${urlSearchParam}`;
    const response = await fetch(url);
    const data = await response.text();

    if (!response.ok) {
      throw new Error('Fetching shortened link failed.');
    }
    return new Response(data, {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    });
  } catch (error: any) {
    console.log(error);
    return new Response(error.message, {
      status: 500,
      headers: { 'Content-Type': 'text/html' },
    });
  }
}
