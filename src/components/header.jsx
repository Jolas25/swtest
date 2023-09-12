import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState();
  const [isBodyClassAdded, setBodyClass] = useState(false);
  const items = ["films", "characters", "starships"];

  function toggleOpenMenu() {
    setIsOpen(!isOpen);
    setBodyClass(!isBodyClassAdded);
  }

  if (isBodyClassAdded) {
    document.body.classList.add("body-scroll-lock");
  } else {
    document.body.classList.remove("body-scroll-lock");
  }

  return (
    <div className="header__container">
      <NavLink
        className="header__logo"
        onClick={() => {
          setIsOpen(false);
          setBodyClass(false);
        }}
        to="/"
      >
        Logo
      </NavLink>
      <nav className={`header__menu ${isOpen ? "active" : ""}`}>
        <ul className="header__menu-list">
          {items.map((item) => (
            <NavLink
              to={`${item === "characters" ? "people/1" : item}`}
              className="header__item"
              key={item}
              onClick={() => {
                setIsOpen(false);
                setBodyClass(false);
              }}
            >
              {item}
            </NavLink>
          ))}
          {/* <NavLink className="header__item">Movies</NavLink>
        <NavLink className="header__item">Persons</NavLink>
        <NavLink className="header__item">Vehicles</NavLink> */}
        </ul>
      </nav>

      <div
        className={`header__burger ${isOpen ? "open" : ""}`}
        onClick={toggleOpenMenu}
      >
        <div className="burger__line"></div>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
      </div>
    </div>
  );
}
