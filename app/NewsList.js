import Article from "./Article";
import { themes } from "../constant";


export default async function NewsList({ news }) {
  // const getAllNews = news.docs.map((theme) => theme.id);
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      {themes.map((theme) => {
        const articleTheme = news.docs.find(
          (article) => article.theme === theme
        );
        return <Article key={articleTheme.id} article={articleTheme} />;
      })}
    </main>
  );
}
