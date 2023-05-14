import NewsList from "./NewsList";
import getAllNewsCategories from "../lib/getAllNewsCategories";

export default async function Homepage() {
  const allNewsCategories = getAllNewsCategories();
  const allNews = await allNewsCategories;
  return <NewsList news={allNews} />;
}
