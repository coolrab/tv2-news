import { notFound } from "next/navigation";
import getnews from "@/lib/getNews";
import { mapData } from "@/lib/functionModule";

async function ArticlePage({ params: { id } }) {
  if (!id) return notFound();
  const article = await getnews(id);
  {
    article &&
      article.docs.map((item) => {
        const { url, filename, data } = mapData(item);
        return (
          <article key={item.id}>
            <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
              {url && filename && (
                <img
                  src={url}
                  width={350}
                  height={350}
                  alt={filename}
                  className="rounded-t-lg shadow-md"
                />
              )}
              <div className="px-10">
                <h1 className="text-4xl font-serif capitalize px-10 pt-5 underline decoration-orange-400 decoration-2 underline-offset-4 decoration-double pb-2 ">
                  {item.title}
                </h1>
                <div className="flex divide-x-2 space-x-4">
                  <h2 className="font-bold">
                    By: {article.author || "unknown"}
                  </h2>
                  <h2 className="font-bold pl-4">
                    Source: {article.source || "unknown"}
                  </h2>
                  <p className="pl-4">{article.updatedAt}</p>
                </div>
              </div>
            </section>
          </article>
        );
      });
  }
}

export default ArticlePage;
