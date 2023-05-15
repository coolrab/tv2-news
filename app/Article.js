"use client";

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

async function Article({ data }) {
  console.log(data);
  if (!data) return null;
  
  return (
    <>
      <h1>hello world</h1>
      {data.map((news) => {
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
                    <p className="text-xs line-clamp-2">{striptags(content)}</p>
                  </section>
                  <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
                    <h2 className="font-bold">UpdatedAt: </h2>

                    <p>
                      {format(new Date(news.updatedAt), "dd/MM/yyyy HH:mm")}
                    </p>
                  </footer>
                </div>
                {/* <ReadAllArticles
                  article={news}
                  url={url}
                  data={content}
                  filename={filename}
                /> */}
              </div>
            </article>
          </Link>
        );
      })}
    </>
  );
}

export default Article;
