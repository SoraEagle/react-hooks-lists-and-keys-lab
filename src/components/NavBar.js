import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const tabs = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));
  return <nav>{tabs}</nav>;
}

export default NavBar;