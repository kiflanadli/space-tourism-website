import { Link } from "react-router-dom";

export default function NavList(props) {
  const {
    links,
    linkPath,
    listClass,
    textClass,
    handleClick,
    indexIcon = false,
  } = props;
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index} className={listClass}>
          <Link
            onClick={handleClick}
            to={link === "home" ? "/" : `${linkPath}${link}`}
          >
            <p className={`font-barlow-condensed ${textClass}`}>
              {indexIcon && (
                <span className="font-bold mr-2 min-w-[1.3em] inline-block">
                  0{index}
                </span>
              )}
              {link}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
