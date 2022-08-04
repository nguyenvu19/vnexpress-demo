import React, { useEffect, useState } from 'react'

import NavItem from './NavItem'
import ExplicitIcon from '@mui/icons-material/Explicit'
import HomeIcon from '@mui/icons-material/Home'
const NavList = ({ menuData, sticky }) => {
    return (
        <ul className="parent">
            <li className="home">
                <a href="/">
                    {sticky ? (
                        <ExplicitIcon className="icon" />
                    ) : (
                        <HomeIcon className="icon" />
                    )}
                </a>
            </li>
            <li className="newest">
                <a href="/">Mới nhất</a>
            </li>
            {menuData.map((menu, index) => (
                <NavItem key={index} menu={menu}>
                    {menu.name}
                </NavItem>
            ))}
        </ul>
    )
}

export default NavList
