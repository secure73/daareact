import React from 'react'

export default function NavbarSmall(props) {
  return (
    <a
    className="text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
    href={props.link}
  >
    {props.name}
  </a>
  )
}
