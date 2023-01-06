import NavigationMenu from "./NavigationMenu";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="p-6 font-barlow-condensed font-base tracking-base fixed top-0 right-0 left-0 z-40 w-full flex justify-between items-center">
      <Link to="/">
        <div>
          <img src="/assets/shared/logo.svg" alt="logo" />
        </div>
      </Link>
      <button onClick={() => setShowMenu(!showMenu)}>
        <img src="/assets/shared/icon-hamburger.svg" alt="logo" />
      </button>
      {showMenu && <NavigationMenu closeMenu={() => setShowMenu(false)} />}
    </nav>
  );
}
