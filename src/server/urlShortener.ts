export default async function getShortenerUrl(url: string | null) {
  const requestUrl = `https://ulvis.net/api.php?type=json&url=${url}`;
  const response = await fetch(requestUrl);
  const data = await response.text();
  return 'This is a new url';
}
