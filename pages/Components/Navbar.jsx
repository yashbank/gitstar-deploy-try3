import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/counter">Counter</Link>
      <Link href="/countertwo">Counter two</Link>
    </div>
  );
};

export default Navbar;
