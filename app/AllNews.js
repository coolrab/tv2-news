"use client";
import Link from "next/link";
import { format } from "date-fns";

export const getPicture = (data) => {
  const { background, cover } = data;
  if (cover) {
    return { url: cover.url, filename: cover.filename };
  }
  if (background) {
    return { url: background.url, filename: background.filename };
  }

  return null;
};

export default function AllNewsCategories({ data }) {
  if (!data) return null;
  return (
    <>
      <h1 className="font-bold capitalize underline decoration-orange-400 decoration-2 underline-offset-4 decoration-double pt-10 text-center font-serif text-5xl pb-10">
        Top stories
      </h1>
      <main className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
        {data.map((news) => {
          const { id, slug, description, category } = news;
          const { url, filename } = getPicture(news);

          return (
            <Link key={id} href={`/category/${id}`}>
              <article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-150 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out">
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
                    <h2 className="font-bold font-serif">{slug}</h2>
                    <section className="mt-2 flex-1">
                      <p className="text-xs line-clamp-2">{description}</p>
                    </section>
                    <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
                      <h2 className="font-bold">UpdatedAt: </h2>
                      <p>
                        {format(new Date(news.updatedAt), "dd/MM/yyyy HH:mm")}
                      </p>
                    </footer>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </main>
    </>
  );
}
