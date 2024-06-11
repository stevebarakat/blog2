import React from "react";
import Link from "next/link";
import { BLOG_TITLE } from "../constants";

function Logo({ mobileAlignment = "left" }) {
  return (
    <>
      <Link href="/" data-mobile-alignment={mobileAlignment}>
        <img src="/logo.svg" alt={BLOG_TITLE} />
      </Link>
    </>
  );
}

export default Logo;
