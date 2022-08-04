import React from 'react'
import './car.scss'
import SearchIcon from '@mui/icons-material/Search'
const Car = () => {
    return (
        <section className="car">
            <div className="carContainer">
                <hgroup>
                    <h2 className="parentMenu">
                        <a href="/">Xe</a>
                    </h2>
                    <span className="subMenu">
                        <a href="/">Thị trường</a>
                    </span>
                    <span className="subMenu">
                        <a href="/">Cầm lái</a>
                    </span>
                    <span className="subMenu">
                        <a href="/">Diễn đàn</a>
                    </span>
                    <span className="subMenu">
                        <a href="/">Video</a>
                    </span>
                    <span className="subMenu">
                        <a href="/">Cẩm nang mua xe</a>
                    </span>
                </hgroup>
                <div className="carList">
                    <div className="left">
                        <div className="item">
                            <div className="img">
                                <a href="/">
                                    <img
                                        src="https://i1-vnexpress.vnecdn.net/2022/07/16/Settop-Top-SUV-nua-dau-nam-2022-jpeg.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=zkhPsh7vs2gx0d95UT_uqQ"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="content">
                                <h3 className="title">
                                    <a href="/">
                                        5 mẫu xe gầm cao bán nhiều nhất nửa đầu
                                        2022
                                    </a>
                                </h3>
                                <p className="desc">
                                    <a href="/">
                                        Corolla Cross dẫn đầu doanh với gần
                                        11.000 xe, Seltos, CX-5 ở các vị trí
                                        tiếp theo.
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="center">
                        <div className="item">
                            <div className="img">
                                <a href="/">
                                    <img
                                        src="https://i1-vnexpress.vnecdn.net/2022/07/16/Settop-Top-Sedan-nua-dau-nam-2022-jpeg.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=XoHMV7b13UzClBvUFOANsg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="content">
                                <h3 className="title">
                                    <a href="/">
                                        5 mẫu sedan bán nhiều nhất nửa đầu 2022
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <a href="/">
                                    <img
                                        src="https://i1-vnexpress.vnecdn.net/2022/07/16/Toyota-Crown-1-1657980131.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=fLYz7xnCmpCiO1nnKZ4m-g"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="content">
                                <h3 className="title">
                                    <a href="/">
                                        Crown 2023 - khi Toyota thay hình đổi
                                        diện
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="item">
                            <div className="content">
                                <h3 className="title">
                                    <a href="/">
                                        Hyundai Stargazer - MPV mới giá từ
                                        16.300 USD
                                    </a>
                                </h3>
                            </div>
                            <div className="img">
                                <a href="/">
                                    <img
                                        src="https://i1-vnexpress.vnecdn.net/2022/07/16/HyundaiStargazer1-1657972893-5742-1657973497.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=oECS5XQzC73elPAtKU00Gw"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <h3 className="title">
                                    <a href="/">Định giá Mazda CX-5 2016?</a>
                                </h3>
                            </div>
                            <div className="img">
                                <a href="/">
                                    <img
                                        src="https://i1-vnexpress.vnecdn.net/2022/07/15/293951752112767191498719884836-1914-7048-1657871927.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=Ur-AA5AjAzKTFq2CssbCRw"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <h3 className="title">
                                    <a href="/">
                                        Xe Hàn giảm sức hút ở phân khúc rẻ nhất
                                        thị trường
                                    </a>
                                </h3>
                            </div>
                            <div className="img">
                                <a href="/">
                                    <img
                                        src="https://i1-vnexpress.vnecdn.net/2022/07/15/z3393580700393e63935e79440f486-9406-5705-1657850347.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=PPqkeBeBYutDvSXEUKUrWA"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <h3 className="title">
                                    <a href="/">
                                        Xe Hàn giảm sức hút ở phân khúc rẻ nhất
                                        thị trường
                                    </a>
                                </h3>
                            </div>
                            <div className="img">
                                <a href="/">
                                    <img
                                        src="https://i1-vnexpress.vnecdn.net/2022/07/15/z3393580700393e63935e79440f486-9406-5705-1657850347.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=PPqkeBeBYutDvSXEUKUrWA"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Car
