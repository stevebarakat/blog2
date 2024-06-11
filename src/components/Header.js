import React from "react";
import Logo from "./Logo";
import { BLOG_DESCRIPTION } from "../constants";

function Header() {
  return (
    <header className="site-header">
      <div>
        <Logo />
        <p>{BLOG_DESCRIPTION}</p>
      </div>
    </header>
  );
}

export default Header;
