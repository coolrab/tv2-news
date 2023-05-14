export default async function getAllNewsCategories() {
  const res = await fetch(
    `https://breaking-api.alpha.tv2.no/v1/public/portals?page=1`
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}


