import { NavLink } from "react-router-dom";

//Header display
const Navbar = () => {
  return (
    <>
   
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full  py-5 px-8 text-sm font-light bg-white shadow-sm">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-4xl text-green-900">
          <NavLink to="/">Universities of UAE</NavLink>
        </li>
      </ul>
    </nav>
    </>
  );
};

export { Navbar };
