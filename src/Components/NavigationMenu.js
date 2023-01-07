import NavList from "./NavList";

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
        <NavList
          links={links}
          linkPath="/"
          listClass="mb-4 hover:border-r-2 py-1"
          handleClick={closeMenu}
          indexIcon
          textClass="text-base tracking-base md:max-lg:text-sm md:max-lg:tracking-sm"
        />
      </div>
    </div>
  );
}
