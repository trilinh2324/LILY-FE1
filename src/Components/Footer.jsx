import React from "react";
import logo1 from '../Components/Image/logo-kimtim2.png';
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { MdAccessTime } from "react-icons/md";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <MDBFooter
      bgColor="gray"
      className="text-center text-lg-start text-muted Footer"
    >
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <div className="FooterFirstSession">
              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <div className="footerList">
                <Link className="logo" to="/">
              <img
                src={logo1}
                alt="Logo"
                style={{ width: '200px', height: '180px', paddingLeft: '40px', paddingTop: '15px' }}
              />
            </Link>
                  <br /> <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    <FiPhone />
                    <a> +84 339 806 596 (Chính)</a>
                  
                  {" "}
                  </Link>{" "}
                  <br /> <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    <FiPhone />
                    <a> +84 866 093 764 (Phụ)</a>
                  
                  {" "}
                  </Link>{" "}
                  <br /> <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    <AiOutlineMail />
                    <a> trilinh2132k4@gmail.com</a>
                  {" "}
                  </Link>{" "}
                  <br /> <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    <GrLocation />
                    <a> Quảng Xương, Thanh Hóa</a>
                  {" "}
                  </Link>{" "}
                  <br /> <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    <MdAccessTime />
                    <a> Thứ 2 - Thứ 7 : 8h00 - 22h00</a>
                  {" "}
                  </Link>{" "}
                </div>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h4 className="text-uppercase fw-bold mb-4">DỊCH VỤ KHÁCH HÀNG</h4>
                <div className="footerList">
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                 Điều khoản và điều kiện{" "}
                  </Link>{" "}
                  <br /> <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Chính sách trả hàng hoàn tiền{" "}
                  </Link>{" "}
                  <br /> <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Chính sách giao hàng{" "}
                  </Link>{" "}
                  <br /> <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Chính sách quyền riêng tư
                  </Link>{" "}
                  <br /> <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Hướng dẫn mua hàng online{" "}
                  </Link>
                </div>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h4 className="text-uppercase fw-bold mb-4">CẨM NANG SỬ DỤNG</h4>
                <div className="footerList">
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Tại sao nên chọn bạc cao cấp?{" "}
                  </Link>{" "}
                  <br /> <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Cách làm trắng bạc tại nhà{" "}
                  </Link>{" "}
                  <br /> <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Phân biệt các loại bạc S925, S999,...{" "}
                  </Link>{" "}
                  <br /> <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Những tác dụng của bạc{" "}
                  </Link>{" "}
                  <br /> <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Cách bảo quản trang sức bạc{" "}
                  </Link>{" "}
                  <br /> <br />
                  
                </div>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h4 className="text-uppercase fw-bold mb-4">THÔNG TIN CHUNG</h4>
                <div className="footerList">
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Tin trang sức{" "}
                  </Link>{" "}
                  <br /> <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Quyền lợi thành viên
                  </Link>{" "}
                  <br /> <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Tiếp thị liên kết LiLy
                  </Link>
                  <br /> <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Ưu đãi khi đánh giá
                  </Link>
                  <br /> <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Nhận quà tri ân
                  </Link>
                  <br /> <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Liên hệ
                  </Link>
                </div>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <div className="footerList">
                <h4 className="text-uppercase fw-bold mb-4">
                Ý KIẾN ĐÓNG GÓP
                </h4>
              
                <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    LiLy luôn mong nhận được ý kiến  <br />
                    đóng góp từ bạn để nâng cấp dịch <br />
                     vụ và sản phẩm tốt hơn.Nếu bạn <br />
                     có ý kiến, đừng ngần ngại đóng <br />
                     góp cho LiLy nhé. LiLy xin cảm ơn!
                  </Link>
                  </div>
              </MDBCol>
            </div>

            {/* <div className="FooterSecondSession">
              <div className="categorySession">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <Link to="/" className="linkWithoutDecoration">
                    <h4 className="text-uppercase fw-bold mb-4">
                      <MDBIcon icon="gem" className="me-3" />
                      Popular Categories
                    </h4>
                    <p>
                      Sofas,Sectional Sofas,Sofa Sets,Queen Size Beds, King Size
                      Beds,Coffee Tables,Dining Sets,Recliners, Sofa Cum
                      Beds,Rocking Chairs,Cabinets & Sideboards,Book Shelves, TV
                      & Media Units,Wardrobes,Outdoor Furniture,Bar Cabinets,
                      Wall Shelves,Photo Frames,Bed Sheets,Table Linen,Study
                      Tables, Office Furniture,Dining Tables,Carpets,Wall Art
                    </p>
                  </Link>
                </MDBCol>
              </div>

              <div className="BrandSession">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <Link to="/" className="linkWithoutDecoration">
                    <h4 className="text-uppercase fw-bold mb-4">
                      <MDBIcon icon="gem" className="me-3" />
                      Popular Brands
                    </h4>
                    <p>
                      Mintwud,Woodsworth,CasaCraft,
                      Amberville,Mudramark,Bohemiana, Clouddio,Spacewood,A
                      Globia Creations, Febonic,@home,Durian,Evok,Hometown,
                      Nilkamal,Crystal Furnitech,Bluewud,
                      Duroflex,Sleepyhead,Green Soul, Orange Tree
                    </p>
                  </Link>
                </MDBCol>
              </div>

              <div className="citesCategory">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <Link to="/" className="linkWithoutDecoration">
                    <h4 className="text-uppercase fw-bold mb-4">
                      <MDBIcon icon="gem" className="me-3" />
                      Popular cities
                    </h4>
                    <p>
                      Bengaluru,Mumbai,Navi Mumbai,Delhi,Hyderabad,
                      Pune,Chennai,Gurgaon,Kolkata,Noida,Goa,
                      Ghaziabad,Faridabad,Jaipur,Lucknow,Kochi,
                      Visakhapatnam,Chandigarh,Vadodara,Nagpur,
                      Thiruvananthapuram,Indore,Mysore,Bhopal,
                      Surat,Jalandhar,Patna,Ludhiana,Ahmedabad,
                      Nashik,Madurai,Kanpur,Aurangabad
                    </p>
                  </Link>
                </MDBCol>
              </div>
            </div> */}
          </MDBRow>
        </MDBContainer>
      </section>
      {/* <div className="ThirdSessionMain">
        <div className="ThirdSession">
          <div className="ThirdSessionLeft">
            <div className="HeadingAccept">
              <h3>We accept</h3>
            </div>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii3.pepperfry.com/assets/w23-pf-visa.jpg"  alt=""/>{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii2.pepperfry.com/assets/w23-pf-master-card.jpg" alt="" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii1.pepperfry.com/assets/w23-pf-maestro.jpg" alt="" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii3.pepperfry.com/assets/w23-pf-rupay.jpg" alt="" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii3.pepperfry.com/assets/w23-pf-dinners-club.jpg" alt="" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii2.pepperfry.com/assets/w23-pf-wallet.jpg" alt="" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii1.pepperfry.com/assets/w23-pf-net-banking.jpg" alt="" />{" "}
            </Link>
          </div>
          <div className="ThirdSessionRight">
            <div className="HeadingAccept">
              <h3>Like What You See? Follow us Here</h3>
            </div>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii1.pepperfry.com/assets/w23-pf-social-insta.png" alt="" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii3.pepperfry.com/assets/w23-pf-social-fb.png" alt="" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii3.pepperfry.com/assets/w23-pf-social-pinterest.png" alt="" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii2.pepperfry.com/assets/w23-pf-social-linkedin.png" alt="" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii3.pepperfry.com/assets/w23-pf-social-youtube.png" alt="" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii1.pepperfry.com/assets/w23-pf-social-twitter.png" alt="" />{" "}
            </Link>
          </div>
        </div>
      </div> */}

      <div
        className="copyRight text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color: "black" }}
      >
        © 2024 Copyright: 
        <Link to="/" className="linkWithoutDecoration">
          LILY JEWELRY
        </Link>
      </div>
    </MDBFooter>
  );
}
