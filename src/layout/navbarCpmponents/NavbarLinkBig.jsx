import React from "react";

export default function NavbarLinkBig(props) {
  return (
    <a
      className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      href={props.link}
    >
      {props.name}
    </a>
  );
}
