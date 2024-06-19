const prerender = false;
async function GET({ request }) {
  try {
    const urlSearchParam = new URL(request.url).searchParams.get("url");
    const url = `https://ulvis.net/api.php?type=json&url=${urlSearchParam}`;
    const response = await fetch(url);
    const data = await response.text();
    return new Response(JSON.stringify({ body: data }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return new Response(
        JSON.stringify({ error: "Fetching shortened link failed." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
  }
}

export { GET, prerender };
