import React from 'react';
import './Footer.css';
import logo3 from'./Image/logo/logo2.1.png'
import footer1 from './Image/footer-logo/footer1.png'
import footer2 from './Image/footer-logo/footer2.png'
import footer3 from './Image/footer-logo/footer3.png'
import footer4 from './Image/footer-logo/footer4.png'
import footer5 from './Image/footer-logo/footer5.png'
import footer6 from './Image/footer-logo/footer6.png'
import footer7 from './Image/footer-logo/footer7.jpg'
import zaloIcon from '../Components/Image/iconzalo.png';
import youtubeIcon from '../Components/Image/iconyoutube.png';
import TwitterIcon from '../Components/Image/icontwitter.png';
import intagramIcon from '../Components/Image/iconinstagram.png';
import pinterestIcon from '../Components/Image/iconpinterest.png';
import facebookIcon from '../Components/Image/iconfacebook.png';
const Footer = () => {
  return (
    <div>
       <div className="footer-nav">
        <div className="footer-section" style={{ fontWeight: 'bold', fontSize: '17px' }}>
          Đăng ký email nhận tin : 
          <input style={{ width: '230px', height: '16px', fontSize: '13px', padding: '17px' }} type="email" />
          <button style={{ width: '45px', height: '38px', backgroundColor: 'red', color: 'white',marginLeft:'3px' }}>OK</button>
        </div>
        <div className="footer-section">
          <span>Kết nối với chúng tôi: </span>
          <a style={{paddingTop:'5px',marginRight:'5px'}} target="_blank" rel="noreferrer" href="https://www.facebook.com/trangsucemvatoi.vn">
          <img src={facebookIcon} alt="facebook" style={{ width: '40px', height: '40px' }} />

          </a >
          <a  style={{paddingTop:'5px',marginRight:'5px'}} target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCNTRqiBD6GjmwIYn0uyIJUA?sub_confirmation=1">
          <img src={youtubeIcon} alt="Youtube" style={{ width: '40px', height: '40px',borderRadius:'5px' }} />
          </a>
          <a style={{paddingTop:'5px',marginRight:'5px'}} target="_blank" rel="noreferrer" href="https://twitter.com/trangsucemvatoi">
          <img src={TwitterIcon} alt="Twitter" style={{ width: '40px', height: '40px' }} />
          </a>
          <a style={{paddingTop:'5px',marginRight:'5px'}} target="_blank" rel="noreferrer" href="https://www.instagram.com/trangsucemvatoi/">
          <img src={intagramIcon} alt="intagram" style={{ width: '40px', height: '40px' }} />
          </a>
          <a style={{paddingTop:'5px',marginRight:'5px'}} target="_blank" rel="noreferrer" href="https://www.pinterest.com/trangsucvn/">
          <img src={pinterestIcon} alt="{pinterest" style={{ width: '40px', height: '40px' }} />
          </a>
          <a style={{paddingTop:'5px',marginRight:'5px'}} target="_blank" rel="noreferrer" href="https://zalo.me/0914951535">
            <img src={zaloIcon} alt="Zalo" style={{ width: '40px', height: '40px' }} />
          </a>
        </div>
     
    </div>
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>VỀ CHÚNG TÔI</h3>
          <ul>
            <li>Giới Thiệu</li>
            <li>Chính sách bảo mật thông tin</li>
            <li>Báo Chí Nói Về Chúng Tôi</li>
            <li>Truyền hình-Nói về chúng tôi</li>
            <li>Thương Hiệu Dẫn Đầu Việt Nam</li>
            <li>Câu hỏi thường gặp FAQ</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>DỊCH VỤ KHÁCH HÀNG</h3>
          <ul>
            <li>Chính sách và Dịch vụ bảo hành</li>
            <li>Thanh Toán</li>
            <li>Máy tạo Trang Sức 3D</li>
            <li>Thu mua-Trao đổi</li>
            <li>Chính sách vận chuyển</li>
            <li>Điều khoản sử dụng</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>THÔNG TIN HỮU ÍCH</h3>
          <ul>
            <li>Thiết kế nhẫn cưới</li>
            <li>Bảo quản trang sức</li>
            <li>Đo Size Tay & Vòng</li>
            <li>Giấy kiểm định vàng</li>
            <li>Giấy kiểm định đá quý</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>TIN TỨC VÀ SỰ KIỆN</h3>
          <ul>
            <li>Vàng trắng là gì?</li>
            <li>Các thiết bị giám định</li>
            <li>Quy trình kiểm định đá</li>
            <li>Chọn đá theo mệnh</li>
            <li>Tiêu chuẩn đá quý</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
  <div style={{marginLeft:'50px'}} className="footer-contact">
    <h1>LILY JEWELERY ®</h1>
    <p>"Trao trọn niềm tin - Đồng hành cùng bạn"</p>
    <p >Địa chỉ Showroom:<a style={{fontWeight:'bold',fontSize:'15px'}}>Thôn 4, Quảng Hòa, Quảng xương, Thanh Hóa, Việt Nam</a>  | <a href="https://www.google.com/maps/place/S%C3%A2n+v%E1%BA%ADn+%C4%91%E1%BB%99ng+x%C3%A3+Qu%E1%BA%A3ng+Ho%C3%A0/@19.7106025,105.7506255,17.8z/data=!4m15!1m8!3m7!1s0x3136ff31b9211fb1:0xdf1e50c5bb71a5b3!2zUXXhuqNuZyBIb8OgLCBRdeG6o25nIFjGsMahbmcsIFRoYW5oIEhvw6E!3b1!8m2!3d19.7134326!4d105.7527221!16s%2Fg%2F1232jsfn!3m5!1s0x3136ff61d7c16b63:0xbeca38b3809832ef!8m2!3d19.709983!4d105.7522957!16s%2Fg%2F11trsyh1p5?entry=ttu" target="_blank" rel="noopener noreferrer">Chỉ đường</a></p>
    <p>CÔNG TY TNHH TRANG SỨC LILY ®<br/>
    Văn Phòng:<a style={{fontWeight:'bold',fontSize:'15px'}}>Quảng Hòa, Quảng xương, Thanh Hóa, Việt Nam</a><br/>
    Tel: 0339806596 | Hotline: 0866093674</p>
    Email: <a href="mailto:emvatoi@trangsucvn.com">trilinh213k4@gmail.com</a>
   
  </div>
  <div className="footer-info">
    {/* <a style={{fontSize:'30px',fontWeight:'bold',textAlign:'center'}}> </a> */}

<div>
<img  style={{width:'100px',height:'60px'}} src={footer1} alt="Footer"/>
<img style={{width:'160px',height:'60px'}} src={footer2} alt="Footer"/>
<img style={{width:'60px',height:'60px'}} src={footer3} alt="Footer"/>
</div>

<div>
<img style={{width:'60px',height:'60px'}} src={footer4} alt="Footer"/>
<img style={{width:'130px',height:'60px'}}  src={footer5} alt="Footer"/>
<img style={{width:'60px',height:'60px'}} src={footer6} alt="Footer"/>
</div>

<div >
<img  style={{width:'280px',height:'60px'}}  src={footer7} alt="Footer"/>
</div>

  </div>
  <div className="footer-services">
    <div> <img
                  src={logo3}
                  alt="Logo"
                  style={{ width: '100px', height: '100px', paddingLeft: '40px', paddingTop: '0px' }}
                
                /> <a style={{color:'red'}}>  <br/> Trao trọn niềm tin - Đồng hành cùng bạn </a> </div>
  
    
    <p>Thời gian mở cửa: 08:00 - 20:00 (T2-CN, Kể cả ngày Lễ)<br/>
    Gọi mua hàng:<a  style={{fontSize:'22px',fontWeight:'bold'}}>0339806596 | 0866093674</a> <br/>
    Gọi Góp ý: 0339806596</p>
    <p >Email Kinh Doanh: <a href="mailto:info@trangsucvn.com">trilinh213k4@gmail.com</a></p>
    {/* Add more content as needed */}
  </div>
</div>
<div className="cuoi">
  
    <p>© 2024 LILYJEWELERY\.COM Copyright, All Rights Reserved.</p>
    <p>CÔNG TY TNHH TRANG LILY ® GPDKKD số: 2103020046. Nơi cấp: Sở Kế Hoạch & Đầu Tư TP. Hà Nội-Việt Nam. Chịu trách nhiệm: Ông Lê Trí Linh</p>
</div>

    </footer>
    </div>
  );
}

export default Footer;
