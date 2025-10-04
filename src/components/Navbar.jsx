import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils/index";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img width={14} height={18} src={appleImg} alt="apple logo" />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav, i) => (
            <div
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              key={i}
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <img width={18} height={18} src={searchImg} alt="search" />
          <img width={18} height={18} src={bagImg} alt="bag" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
