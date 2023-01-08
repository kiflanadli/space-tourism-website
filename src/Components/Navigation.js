import NavigationMenu from "./NavigationMenu";
import { Link } from "react-router-dom";
import { useState } from "react";

export function MainNavigation({ pageList }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="font-barlow-condensed fixed top-0 p-6 z-40 w-full flex justify-between items-center">
      <Link to="/">
        <div>
          <img
            src="/assets/shared/logo.svg"
            alt="logo"
            className="w-[2.5rem]"
          />
        </div>
      </Link>
      <button onClick={() => setShowMenu(!showMenu)}>
        <img src="/assets/shared/icon-hamburger.svg" alt="logo" />
      </button>
      {showMenu && (
        <NavigationMenu
          closeMenu={() => setShowMenu(false)}
          pageList={pageList}
        />
      )}
    </nav>
  );
}
