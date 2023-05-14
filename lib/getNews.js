export default async function getnews(id) {
  const res = await fetch(
    `https://breaking-api.alpha.tv2.no/v1/public/posts?page=2&limit=10&portalId=${id}`
  );
  const allNewsArticles = await res.json();
  return allNewsArticles;
}
