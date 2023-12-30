import { headerLogo } from "../assets/images";
import { hamburger, cross } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [hamburgerIcon, sethamburgerIcon] = useState(hamburger);
  const [navStat, setnavStat] = useState(true);

  const handleIcon = () =>
    sethamburgerIcon(hamburgerIcon === hamburger ? cross : hamburger);

  const handleNav = () => {
    setnavStat(!navStat);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <div
          className={`flex flex-1 justify-start max-lg:absolute min-h[60vh] left-0  max-lg:bg-white w-full items-center px-5 transition-opacity duration-300 ${
            navStat ? `max-lg:opacity-0 max-lg:hidden` : `top-20 opacity-100`
          }`}
        >
          <ul className="flex-1 flex justify-center items-center gap-16  max-lg:flex-col max-lg:gap-16 pb-2">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden max-lg:block cursor-pointer">
          <img
            src={hamburgerIcon}
            alt="Hamburger"
            width={25}
            height={25}
            onClick={() => {
              handleNav();
              handleIcon();
            }}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
