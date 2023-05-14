"use client";
import { useRouter } from "next/navigation";

const ReadAllArticles = ({ article }) => {
  console.log("article", article.id);
  const router = useRouter();
  console.log(article);
  const id = article.id;
  const handleClick = () => {
    const url = `/article/${id}`;
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
