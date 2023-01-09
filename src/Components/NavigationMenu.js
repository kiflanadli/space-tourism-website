import NavList from "./NavList";

export default function NavigationMenu({ closeMenu, pageList }) {
  const links = ["home", ...pageList];

  return (
    <div className="fixed z-50 inset-0 md:static md:-mr-10">
      <div className="absolute inset-0 md:hidden" onClick={closeMenu}></div>
      <div className="w-2/3 md:w-auto min-h-screen md:min-h-max bg-white/[0.04] backdrop-blur-2xl absolute md:static top-0 right-0 pl-6 pt-10 md:px-10">
        <div className="text-right mb-12 mr-6 md:hidden">
          <button className="text-base" onClick={closeMenu}>
            <img src="/assets/shared/icon-close.svg" alt="close" />
          </button>
        </div>
        <NavList
          links={links}
          linkPath="/"
          className="md:flex md:justify-between md:gap-9"
          listClass="mb-4 md:mb-0 border-r-2 md:border-0 md:border-b-2 border-transparent hover:border-white-500 py-1 md:py-0 md:pb-10"
          handleClick={closeMenu}
          indexIcon
          textClass="text-base tracking-base md:max-lg:text-sm md:max-lg:tracking-sm"
          activeClass="border-white hover:border-white"
        />
      </div>
    </div>
  );
}
