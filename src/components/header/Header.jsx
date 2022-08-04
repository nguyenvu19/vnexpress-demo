import React from 'react'
import './header.scss'
import SearchIcon from '@mui/icons-material/Search'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ExplicitIcon from '@mui/icons-material/Explicit'
import PersonIcon from '@mui/icons-material/Person'
const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="headerLeft">
                    <div className="allMenuTablet">
                        <span className="hamburger"></span>
                    </div>
                    <h1 className="logo">
                        <a href="/">
                            <img
                                src="https://s1.vnecdn.net/vnexpress/restruct/i/v626/v2_2019/pc/graphics/logo.svg"
                                alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat"
                            />
                        </a>
                    </h1>
                    <span className="time-now">Thứ bảy, 16/7/2022</span>
                </div>
                <div className="headerRight">
                    <a href="/" className="headerBtn">
                        <AccessTimeIcon className="icon" /> Mới nhất
                    </a>
                    <a href="/" className="headerBtn">
                        <ExplicitIcon className="icon main-color" />{' '}
                        International
                    </a>
                    <form action="" className="search">
                        <input type="text" placeholder="Tìm kiếm" />
                        <button type="submit" className="searchBtn">
                            <SearchIcon className="searchIcon" />
                        </button>
                    </form>
                    <div className="loginBtn">
                        <a href="/">
                            <PersonIcon className="loginIcon" /> Đăng nhập
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
