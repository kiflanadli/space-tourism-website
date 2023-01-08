import NavList from "./NavList";

export default function NavigationMenu({ closeMenu, pageList }) {
  const links = ["home", ...pageList];

  return (
    <div>
      <div className="fixed z-50 inset-0" onClick={closeMenu}></div>
      <div className="w-2/3 min-h-screen bg-white/[0.04] backdrop-blur-2xl fixed z-50 top-0 right-0 pl-6 pt-10">
        <div className="text-right mb-12 mr-6">
          <button className="text-base" onClick={closeMenu}>
            <img src="/assets/shared/icon-close.svg" alt="close" />
          </button>
        </div>
        <NavList
          links={links}
          linkPath="/"
          listClass="mb-4 border-r-2 border-transparent hover:border-white-500 py-1"
          handleClick={closeMenu}
          indexIcon
          textClass="text-base tracking-base md:max-lg:text-sm md:max-lg:tracking-sm"
          activeClass="border-white hover:border-white"
        />
      </div>
    </div>
  );
}
