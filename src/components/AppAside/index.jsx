import React from "react";
import { LinksList, Menu, MenuLink, MenuTitle } from "./styles";
import { MdFormatListBulleted, MdCreate } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

export default function Index() {

    const location = useLocation()

  const menuLinks = [
    {
      path: "/",
      label: "Notes",
      icon: <MdFormatListBulleted />,
    },
    {
      path: "/create",
      label: "Create Note",
      icon: <MdCreate />,
    },
  ];

  return (
    <Menu>
      <MenuTitle>Menu</MenuTitle>

      <LinksList>
        {menuLinks.map((link, i) => (
          <MenuLink key={i}>
            <Link to={link.path} className={link.path === location.pathname ? "active" : null} >
              {link.icon}
              {link.label}
            </Link>
          </MenuLink>
        ))}
      </LinksList>
    </Menu>
  );
}
