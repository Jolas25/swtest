import { NavLink } from "react-router-dom";

export default function Pagination({ pageID, children, to }) {
  return (
    <NavLink className={"pagination__button"} to={to}>
      <span className={"pagination__button-text"}>{children}</span>
    </NavLink>
  );
}
