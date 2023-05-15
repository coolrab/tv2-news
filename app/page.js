"use client";
import { useEffect, useState } from "react";
import AllNewsCategory from "./AllNews.js";
export default function Page() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function getNewsCategory() {
      const res = await fetch(
        `https://breaking-api.alpha.tv2.no/v1/public/portals?page=1`
      );
      const data = await res.json();
      setCategory(data.docs);
    }

    getNewsCategory();
  }, []);
  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AllNewsCategory data={category} />
      {/* <NewsList news={category} /> */}
    </>
  );
}
