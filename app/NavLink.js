import Link from "next/link";

const NavLink = ({ category, isActive }) => {
  return (
    <Link
      href={`/news/${category}`}
      className={`hover:underline decoration-orange-400 text-center decoration-2 active:underline underline-offset-8 rounded-full p-4 cursor-pointer hover:front-bold capitalize hover:scale-110 transition-transform duration-200 ease-in-out ${
        isActive && 'underline decoration-orange-400 underline-offset-4 font-bold text-lg'}`} 
    >
      {category}
    </Link>
  );
};

export default NavLink;
