"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    if (!input) return;
    // push the input to the search page (router.push(`/search?term=${input}`);)
    router.push(`/search?query=${input}`);
  };
  return (
    <form
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search keyword...."
        className="flex-1 w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400"
      />

      <button
        type="submit"
        disabled={!input}
        className=" text-orange-400 disabled:text-gray-400"
      >
        search
      </button>
    </form>
  );
};

export default Search;
