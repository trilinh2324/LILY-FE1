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
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h2>VỀ CHÚNG TÔI</h2>
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
          <h2>DỊCH VỤ KHÁCH HÀNG</h2>
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
          <h2>THÔNG TIN HỮU ÍCH</h2>
          <ul>
            <li>Thiết kế nhẫn cưới</li>
            <li>Bảo quản trang sức</li>
            <li>Đo Size Tay & Vòng</li>
            <li>Giấy kiểm định vàng</li>
            <li>Giấy kiểm định đá quý</li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>TIN TỨC VÀ SỰ KIỆN</h2>
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
    <p style={{fontSize:'17px'}}>"Trao trọn niềm tin - Đồng hành cùng bạn"</p>
    <p style={{fontSize:'17px'}}>Địa chỉ Showroom:<a style={{fontWeight:'bold',fontSize:'17px'}}>Thôn 4, Quảng Hòa, Quảng xương, Thanh Hóa, Việt Nam</a>  | <a href="https://www.google.com/maps/place/S%C3%A2n+v%E1%BA%ADn+%C4%91%E1%BB%99ng+x%C3%A3+Qu%E1%BA%A3ng+Ho%C3%A0/@19.7106025,105.7506255,17.8z/data=!4m15!1m8!3m7!1s0x3136ff31b9211fb1:0xdf1e50c5bb71a5b3!2zUXXhuqNuZyBIb8OgLCBRdeG6o25nIFjGsMahbmcsIFRoYW5oIEhvw6E!3b1!8m2!3d19.7134326!4d105.7527221!16s%2Fg%2F1232jsfn!3m5!1s0x3136ff61d7c16b63:0xbeca38b3809832ef!8m2!3d19.709983!4d105.7522957!16s%2Fg%2F11trsyh1p5?entry=ttu" target="_blank" rel="noopener noreferrer">Chỉ đường</a></p>
    <p style={{fontSize:'17px'}}>CÔNG TY TNHH TRANG SỨC LILY ®</p>
    <p style={{fontSize:'17px'}}>Văn Phòng:<a style={{fontWeight:'bold',fontSize:'17px'}}>Quảng Hòa, Quảng xương, Thanh Hóa, Việt Nam</a></p>
    <p style={{fontSize:'17px'}}>Tel: 0339806596 | Hotline: 0866093674</p>
    <p style={{fontSize:'17px'}}>Email: <a href="mailto:emvatoi@trangsucvn.com">trilinh213k4@gmail.com</a></p>
   
  </div>
  <div className="footer-info">
    {/* <a style={{fontSize:'30px',fontWeight:'bold',textAlign:'center'}}> </a> */}

<div>
<img  style={{width:'150px',height:'80px'}} src={footer1} alt="Footer"/>
<img style={{width:'190px',height:'80px'}} src={footer2} alt="Footer"/>
<img style={{width:'100px',height:'80px'}} src={footer3} alt="Footer"/>
</div>

<div>
<img style={{width:'80px',height:'80px'}} src={footer4} alt="Footer"/>
<img style={{width:'150px',height:'80px'}}  src={footer5} alt="Footer"/>
<img style={{width:'80px',height:'80px'}} src={footer6} alt="Footer"/>
</div>

<div >
<img  style={{width:'330px',height:'70px'}}  src={footer7} alt="Footer"/>
</div>

  </div>
  <div className="footer-services">
    <div> <img
                  src={logo3}
                  alt="Logo"
                  style={{ width: '150px', height: '110px', paddingLeft: '40px', paddingTop: '0px' }}
                
                /> <a style={{color:'red'}}>  <br/> Trao trọn niềm tin - Đồng hành cùng bạn </a> </div>
  
    
    <p style={{fontSize:'17px'}}>Thời gian mở cửa: 08:00 - 20:00 (T2-CN, Kể cả ngày Lễ)</p>
    <p style={{fontSize:'17px'}}>Gọi mua hàng: 0339806596 | 0866093674</p>
    <p style={{fontSize:'17px'}}>Gọi Góp ý: 0339806596</p>
    <p style={{fontSize:'17px'}}>Email Kinh Doanh: <a href="mailto:info@trangsucvn.com">trilinh213k4@gmail.com</a></p>
    {/* Add more content as needed */}
  </div>
</div>
<div className="cuoi">
  
    <p>© 2024 LILYJEWELERY\.COM Copyright, All Rights Reserved.</p>
    <p>CÔNG TY TNHH TRANG LILY ® GPDKKD số: 2103020046. Nơi cấp: Sở Kế Hoạch & Đầu Tư TP. Hà Nội-Việt Nam. Chịu trách nhiệm: Ông Lê Trí Linh</p>
</div>

    </footer>
  );
}

export default Footer;
