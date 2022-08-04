import React from "react";
import "./tour.scss";
const Tour = () => {
  return (
    <section className="tour">
      <div className="tourContainer">
        <hgroup>
          <h2 className="parentMenu">
            <a href="/">Du lịch</a>
          </h2>
          <span className="subMenu">
            <a href="/">Điểm đến</a>
          </span>
          <span className="subMenu">
            <a href="/">Ẩm thực</a>
          </span>
          <span className="subMenu">
            <a href="/">Dấu chân</a>
          </span>
          <span className="subMenu">
            <a href="/">Tư vấn</a>
          </span>
          <span className="subMenu">
            <a href="/">Cẩm nang</a>
          </span>
        </hgroup>
        <div className="tourList">
          <div className="left">
            <div className="item">
              <div className="img">
                <a href="/">
                  <img
                    src="https://i1-dulich.vnecdn.net/2022/07/15/camtrai1-1657880115-6443-1657902725.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=e_UUBWsTkTGsS8xr3LA6kQ"
                    alt=""
                  />
                </a>
              </div>
              <div className="content">
                <h3 className="title">
                  <a href="/">Vợ chồng Việt cắm trại dọc bờ tây nước Mỹ</a>
                </h3>
                <p className="desc">
                  <a href="/">
                    Khánh Vân cùng chồng tận hưởng thiên nhiên kỳ thú qua những
                    chuyến cắm trại ở chín bang bờ Tây nước Mỹ.
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
                    src="https://i1-dulich.vnecdn.net/2022/07/10/1-1657471362-1657471372-7252-1657472067.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=50cTS9sZKiLcLEzAncWILQ"
                    alt=""
                  />
                </a>
              </div>
              <div className="content">
                <h3 className="title">
                  <a href="/">Những bức ảnh du lịch khó quên</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <a href="/">
                  <img
                    src="https://i1-dulich.vnecdn.net/2022/07/16/minh-va-tie-m-pho-o-khu-a-m-th-5506-9375-1657967062.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=BWp8TqRWDkXCnC5ADBMlKA"
                    alt=""
                  />
                </a>
              </div>
              <div className="content">
                <h3 className="title">
                  <a href="/">Tiệm phở của đầu bếp Việt lên báo Singapore</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="item">
              <div className="content">
                <h3 className="title">
                  <a href="/">Moscow là thành phố thuộc bang nào ở Mỹ?</a>
                </h3>
              </div>
              <div className="img">
                <a href="/">
                  <img
                    src="https://i1-dulich.vnecdn.net/2022/07/16/goldenmesacasinohas-1657955514-9641-7157-1657955543.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=eC3vROgJ2cko88Inzvj3AQ"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <h3 className="title">
                  <a href="/">
                    Giá euro giảm, du khách Việt ở châu Âu được lợi
                  </a>
                </h3>
              </div>
              <div className="img">
                <a href="/">
                  <img
                    src="https://i1-dulich.vnecdn.net/2022/07/16/chau-au-7965-1657932814-165794-1671-9760-1657942199.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=QKU1zDDvMzgCPMdjc243Wg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <h3 className="title">
                  <a href="/">
                    10 điểm đến trong nước được yêu thích nhất hè 2022
                  </a>
                </h3>
              </div>
              <div className="img">
                <a href="/">
                  <img
                    src="https://i1-dulich.vnecdn.net/2022/07/16/4cauronghancauthuanphuoc604916-3627-4685-1657945313.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=m_BKtL1Sz0cvMDShXVCacw"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <h3 className="title">
                  <a href="/">
                    Làm nhân viên khách sạn ở châu Âu dễ chưa từng thấy
                  </a>
                </h3>
              </div>
              <div className="img">
                <a href="/">
                  <img
                    src="https://i1-dulich.vnecdn.net/2022/07/15/2-1657855193-1657855199-1909-1657855245.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=990W1BdffCOeqxUok5U-2g"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tour;
