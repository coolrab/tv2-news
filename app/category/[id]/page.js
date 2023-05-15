"use client";
import { useEffect, useState } from "react";
import "./Pagination.css";
import ReadAllArticles from "../../ReadAllArticles";
import striptags from "striptags";
import { format } from "date-fns";
import Link from "next/link";

export const mapData = (data) => {
  const { content } = data;
  const picture = content.find((item) => item.type === "PICTURES");
  const markup = content.find((item) => item.type === "MARKUP");
  return {
    url: picture?.files[0].url,
    content: markup?.data,
    filename: picture?.files[0].filename,
  };
};

export default function AllPosts({ params }) {
  const id = params.id;
  const [allNews, setAllNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [nextPage, setNextPage] = useState(1);

  const newsApi = `https://breaking-api.alpha.tv2.no/v1/public/posts?page=${currentPage}&limit=10&portalId=${id}`;
  useEffect(() => {
    async function getNewsCategory() {
      const res = await fetch(newsApi);
      const data = await res.json();
      const totalPages = await data.totalPages;
      const page = await data.page;
      const nextPage = await data.nextPage;

      setAllNews(data);
      setCurrentPage(page);
      setTotalPages(totalPages);
      setNextPage(nextPage);
    }
    if (id && currentPage) {
      getNewsCategory();
    }
  }, [id, currentPage]);

  let totalPage = [];

  for (let i = 1; i <= totalPages; i++) {
    totalPage.push(i);
  }
  return (
    <>
      {/* <Article data={allNews.docs} /> */}
      <h1 className="font-bold capitalize underline decoration-orange-400 decoration-2 underline-offset-4 decoration-double pt-10 text-center font-serif text-5xl pb-12">
        Full story
      </h1>
      <main className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
        {allNews?.docs?.map((news) => {
          const { id, title, updatedAt } = news;
          const { url, filename, content } = mapData(news);
          const singleNew = {
            id: id,
            title: title,
            updatedAt: updatedAt,
            url: url,
            filename: filename,
            content: content,
          };
          const queryString = Object.entries(singleNew)
            .map(([key, value]) => `${key}=${value}`)
            .join("&");
          const newsurl = `/news/${id}?${queryString}`;
          console.log(url, id, filename, content);

          return (
            <Link key={id} href={newsurl}>
              <article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-150 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out">
                {url && filename && (
                  // eslint-disable-next-line @next/next/no-img-element
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
                    <h2 className="font-bold font-serif">{title}</h2>
                    <section className="mt-2 flex-1">
                      <p className="text-xs line-clamp-2">
                        {striptags(content)}
                      </p>
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
                    data={content}
                    filename={filename}
                  />
                </div>
              </article>
            </Link>
          );
        })}
      </main>
      <div className="pt-8 pb-10">
        <div className="pagination">
          {totalPage.map((page, index) => {
            return (
              <button
                key={index}
                onClick={() => setCurrentPage(nextPage)}
                className={page == currentPage ? "active" : ""}
              >
                <span className="text-xs line-clamp-5">{page}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
