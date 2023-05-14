import { getPicture, mapData } from "../lib/functionModule";
import ReadAllArticles from "./ReadAllArticles";
import striptags from "striptags";
import { format } from "date-fns";
import getnews from "../lib/getNews";

async function Article({ article }) {
  const { url, filename } = getPicture(article);
  const id = article.id;
  const allNews = await getnews(id);
  return (
    <>
      {allNews &&
        allNews.docs.map((news) => {
          const { url, filename, data } = mapData(news);
          return (
            <article
              key={news.id}
              className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-150 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out"
            >
              {url && filename && (
                <img
                  src={url}
                  width={350}
                  height={350}
                  alt={filename}
                  className="rounded-t-lg shadow-md"
                />
              )}
              <div className="flex-1 flex flex-col">
                <div className=" flex-1 flex flex-col p-5">
                  <h2 className="font-bold font-serif">{news.title}</h2>
                  <section className="mt-2 flex-1">
                    <p className="text-xs line-clamp-2">{striptags(data)}</p>
                  </section>
                  <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
                    <h2 className="font-bold">UpdatedAt: </h2>

                    <p>
                      {format(new Date(news.updatedAt), "dd/MM/yyyy HH:mm")}
                    </p>
                  </footer>
                </div>
                <ReadAllArticles
                  article={news}
                  url={url}
                  data={data}
                  filename={filename}
                />
              </div>
            </article>
          );
        })}
    </>
  );
}

export default Article;
