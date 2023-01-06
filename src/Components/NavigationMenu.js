import { Link } from "react-router-dom";

export default function NavigationMenu({ closeMenu }) {
  const links = ["home", "destination", "crew", "technology"];

  return (
    <div>
      <div className="fixed z-50 inset-0" onClick={closeMenu}></div>
      <div className="w-2/3 min-h-screen bg-gray-600/30 backdrop-blur-md fixed z-50 top-0 right-0 pl-6 pt-10">
        <div className="text-right mb-12 mr-6">
          <button className="font-base" onClick={closeMenu}>
            <img src="/assets/shared/icon-close.svg" alt="close" />
          </button>
        </div>
        <ul>
          {links.map((link, key) => (
            <li key={key} className="mb-4 hover:border-r-2 py-1">
              <Link onClick={closeMenu} to={link === "home" ? "/" : `/${link}`}>
                <div>
                  <span className="font-bold mr-2 min-w-[1.3em] inline-block">
                    0{key}
                  </span>
                  {link}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
