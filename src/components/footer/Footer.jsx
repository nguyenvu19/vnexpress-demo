import React from 'react'
import './footer.scss'
import ExplicitIcon from '@mui/icons-material/Explicit'
import EmailIcon from '@mui/icons-material/Email'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerContainer">
                <div className="innerFooter">
                    <ul className="footerList">
                        <li className="footerItem">
                            <a href="/">Trang chủ</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Video</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Podcasts</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Ảnh</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Infographics</a>
                        </li>
                        <li className="footerItem has-border">
                            <a href="/">Mới nhất</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Xem nhiều</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Tin nóng</a>
                        </li>
                    </ul>
                    <ul className="footerList">
                        <li className="footerItem">
                            <a href="/">Thời sự</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Góc nhìn</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Thế giới</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Kinh doanh</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Giải trí</a>
                        </li>
                    </ul>
                    <ul className="footerList">
                        <li className="footerItem">
                            <a href="/">Thể thao</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Pháp luật</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Giáo dục</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Sức khỏe</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Đời sống</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Du Lịch</a>
                        </li>
                    </ul>
                    <ul className="footerList">
                        <li className="footerItem">
                            <a href="/">Khoa học</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Số hóa</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Xe</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Ý kiến</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Tâm sự</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Hài</a>
                        </li>
                    </ul>
                    <ul className="footerList">
                        <li className="footerItem">
                            <a href="/">Rao vặt</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Startup</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Mua ảnh VnExpress</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">Vhome</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">eBox</a>
                        </li>
                        <li className="footerItem">
                            <a href="/">eWork</a>
                        </li>
                    </ul>
                    <div className="wrapContact">
                        <div className="contact downloadApp">
                            <p>Tải ứng dụng</p>
                            <a href="/" className="app_vne">
                                <ExplicitIcon className="icon" /> VnExpress
                            </a>
                            <a href="/" className="app_evne">
                                <ExplicitIcon className="icon" /> International
                            </a>
                        </div>
                        <div className="contact">
                            <p>Liên hệ</p>
                            <a href="/" className="item mail">
                                <EmailIcon className="icon" /> Tòa soạn
                            </a>
                            <a href="/" className="item ads">
                                <ExplicitIcon className="icon" /> Quảng cáo
                            </a>
                        </div>
                        <div className="hotline">
                            <p>Đường dây nóng</p>
                            <div className="hotlineFlex">
                                <div className="left">
                                    <strong>083.888.0123</strong>
                                    <p>(Hà Nội)</p>
                                </div>
                                <div className="right">
                                    <strong>082.233.3555</strong>
                                    <p>(TP. Hồ Chí Minh)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p className="left">
                        <a href="/">
                            <span>Báo điện tử</span>
                            <img
                                src="https://s1.vnecdn.net/vnexpress/restruct/i/v626/v2_2019/pc/graphics/logo.svg"
                                alt=""
                            />
                        </a>
                    </p>
                    <div className="right">
                        <a href="/">RSS</a>
                        <p className="txt-follow">Theo dõi VnExpress trên</p>
                        <a href="/" className="social facebook">
                            <FacebookRoundedIcon className="icon" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
