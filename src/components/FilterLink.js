import React from "react";
import { NavLink as Link } from "react-router-dom";

const FilterLink = ({ filter, children }) => (
  <Link
    exact
    to={filter === "all" ? "" : filter}
    activeStyle={{
      textDecoration: "none",
      color: "black"
    }}
    onClick={() => console.log(filter)}
  >
    {children}
  </Link>
);

export default FilterLink;
