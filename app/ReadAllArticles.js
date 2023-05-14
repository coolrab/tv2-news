"use client";
import { useRouter } from "next/navigation";

const ReadAllArticles = ({ article, url, data, filename }) => {
  const router = useRouter();
  const title = article.title;
  const updatedAt = article.updatedAt;
  const news = {
    title: title,
    updatedAt: updatedAt,
    url: url,
    data: data,
    filename: filename,
  };
  const handleClick = () => {
    const queryString = Object.entries(news)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${queryString}`;
    console.log(url);
    router.push(url);
  };
  return (
    <button
      onClick={handleClick}
      className="bg-orange-400 h-10 text-white font-bold p-2 rounded-b-lg shadow-md hover:bg-orange-500 transition-all duration-200 ease-out"
    >
      Read more
    </button>
  );
};
export default ReadAllArticles;
