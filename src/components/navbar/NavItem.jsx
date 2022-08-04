import React from 'react'

const NavItem = ({ menu }) => {
    return (
        <li>
            <a href="/">{menu.name}</a>
            {menu.children.length > 0 && (
                <ul className="submenu">
                    {menu.children.map((item, index) => (
                        <li key={index}>
                            <a href="/">{item.name}</a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    )
}

export default NavItem
