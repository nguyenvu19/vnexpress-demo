import React from 'react'
import './navbar.scss'
import NavList from './NavList'
import { MENU_DATAS } from '../../utils/data'
const Navbar = ({ scroll }) => {
    return (
        <section
            className={scroll < 150 ? 'wrap-main-nav' : 'wrap-main-nav sticky'}
        >
            <nav className="navbar">
                <NavList menuData={MENU_DATAS} sticky={scroll >= 150} />
            </nav>
        </section>
    )
}

export default Navbar
