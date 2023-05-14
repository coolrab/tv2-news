"use client";
import { notFound, useRouter } from "next/navigation";
import striptags from "striptags";
import { format } from "date-fns";

async function ArticlePage({ searchParams }) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const article = searchParams;
  return (
    <article className="flex flex-col">
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {article.url && article.filename && (
          <img
            src={article.url}
            alt={article.filename}
            width={350}
            height={350}
            className=" max-w-xs mx-auto md:max-w-xl lg:mx-w-xl object-cover rounded-lg shadow-md"
          />
        )}
        <div className="px-10">
          <h1 className="text-3xl font-serif capitalize px-10 pt-5 underline decoration-orange-400 decoration-2 underline-offset-4 decoration-double pb-6 ">
            {article.title}
          </h1>
          <div className="flex divide-x-2 space-x-4 pb-4">
            <h2 className="font-bold">By: {article.author || "unknown"}</h2>
            <h2 className="font-bold pl-4">
              Source: {article.source || "unknown"}
            </h2>
            <p className="pl-4 ">
              {format(new Date(article.updatedAt), "dd/MM/yyyy HH:mm")}
            </p>
          </div>
          <p className="text-xl pb-8">{striptags(article.data)}</p>
          <button
            className="bg-orange-400 h-10 text-white font-bold p-2 rounded-b-lg shadow-md hover:bg-orange-500 transition-all duration-200 ease-out"
            onClick={() => {
              router.push("/");
            }}
          >
            Article Gallery
          </button>
        </div>
      </section>
      <div></div>
    </article>
  );
}

export default ArticlePage;
