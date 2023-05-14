"use client";
import { themes } from "../constant";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  const isActive = (path) => {
    return pathname?.split("/").pop() === path;
  };
  return (
    <nav className="grid grid-cols-3 md:grid-cols-3 text-xs md:text-sm gap-6 pb-10 max-w-6xl mx-auto font-bold font-serif border-b">
      {themes.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
};

export default NavLinks;
