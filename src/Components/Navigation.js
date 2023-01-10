import NavigationMenu from "./NavigationMenu";
import { Link } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import { useWindowDimensions } from "../Hooks/useWindowDimensions";
import { useTransition, animated } from "react-spring";

function MainNavigation({ pageList }) {
  const [showMenu, setShowMenu] = useState(false);
  const { width } = useWindowDimensions();
  const [menuTransition, transitionApi] = useTransition(showMenu, () => ({
    from: { transform: "translateX(100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(100%)" },
  }));

  useEffect(() => {
    transitionApi.start();
  }, [showMenu]);

  const Menu = (
    <NavigationMenu closeMenu={() => setShowMenu(false)} pageList={pageList} />
  );

  return (
    <nav className="font-barlow-condensed fixed top-0 p-6 md:max-lg:py-0 md:px-10 z-30 w-full flex justify-between lg:gap-10 items-center">
      <Link to="/">
        <div className="w-10 md:w-12">
          <img src="/assets/shared/logo.svg" alt="logo" className="w-full" />
        </div>
      </Link>
      <hr className="hidden lg:block border-white-200 basis-full -mr-16 relative z-50" />
      {width >= 768 || (
        <button onClick={() => setShowMenu(!showMenu)}>
          <img src="/assets/shared/icon-hamburger.svg" alt="logo" />
        </button>
      )}
      {width >= 768
        ? Menu
        : menuTransition(
            (style, showState) =>
              showState && (
                <animated.div style={style} className="fixed z-40 inset-0">
                  {Menu}
                </animated.div>
              )
          )}
    </nav>
  );
}
export default memo(MainNavigation);
