import { Link, useParams } from "react-router-dom";

export default function NavList(props) {
  const {
    links, // link name == edge point path e.g. "destination"
    activeClass = "", // custom class for active list
    captions = false, // caption name, optional
    linkPath, // root path e.g. "/"
    className = "", // custom class for ul
    listClass = "", // custom class for li
    textClass = "", // custom class for list text
    handleClick, // custom actions
    indexIcon = false, // 01 02 03
  } = props;

  const { page = "home", id: activeLink } = useParams();
  return (
    <ul className={className}>
      {links.map((link, index) => (
        <Link
          key={index}
          onClick={handleClick}
          to={link === "home" ? "/" : `${linkPath}${link}`}
        >
          <li
            className={`${listClass} ${
              activeLink === link || page === link ? activeClass : ""
            }`}
          >
            <p className={`font-barlow-condensed ${textClass}`}>
              {indexIcon && (
                <span className="font-bold mr-2 min-w-[1.3em] inline-block md:max-lg:hidden">
                  0{index}
                </span>
              )}
              {captions[index] || link}
            </p>
          </li>
        </Link>
      ))}
    </ul>
  );
}
