import React from "react";
import NavbarLg from "./navbarCpmponents/NavbarLg";
import NavbarSm from "./navbarCpmponents/NavbarSm";
export default function Navbar() {
  return (
    <div>
      <nav className="bg-gray-900">
        <NavbarLg/>
        <NavbarSm/>
      </nav>
    </div>
  );
}
