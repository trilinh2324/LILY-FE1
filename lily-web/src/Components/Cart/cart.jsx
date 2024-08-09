import React, { useState } from 'react';
import './cart.css';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const data = {
    VIETNAM: {
        provinces: {
          'An Giang': ['Long Xuyên', 'Châu Đốc', 'Tân Châu', 'An Phú', 'Châu Phú', 'Châu Thành', 'Phú Tân', 'Thoại Sơn'],
          'Bà Rịa - Vũng Tàu': ['Vũng Tàu', 'Bà Rịa', 'Châu Đức', 'Côn Đảo', 'Long Điền', 'Đất Đỏ', 'Tân Thành'],
          'Bắc Giang': ['Bắc Giang', 'Hiệp Hòa', 'Lạng Giang', 'Lục Nam', 'Lục Ngạn', 'Yên Thế', 'Tân Yên', 'Sơn Động', 'Yên Dũng', 'Việt Yên'],
          'Bắc Kạn': ['Bắc Kạn', 'Ba Bể', 'Bạch Thông', 'Chợ Đồn', 'Chợ Mới', 'Hà Quảng', 'Hòa An', 'Ngân Sơn', 'Pác Nặm', 'Na Rì'],
          'Bạc Liêu': ['Bạc Liêu', 'Đông Hải', 'Giá Rai', 'Hòa Bình', 'Hồng Dân', 'Vĩnh Lợi', 'Châu Hưng', 'Phước Long'],
          'Bắc Ninh': ['Bắc Ninh', 'Gia Bình', 'Lương Tài', 'Quế Võ', 'Thuận Thành', 'Yên Phong', 'Tiên Du', 'Đình Bảng'],
          'Bến Tre': ['Bến Tre', 'Ba Tri', 'Bình Đại', 'Châu Thành', 'Chợ Lách', 'Mỏ Cày Bắc', 'Mỏ Cày Nam', 'Thạnh Phú', 'Giồng Trôm'],
          'Bình Định': ['Quy Nhơn', 'An Lão', 'Hoài Ân', 'Hoài Nhơn', 'Phù Mỹ', 'Phù Cát', 'Tây Sơn', 'Vân Canh', 'Vân Canh', 'Nhơn Hòa'],
          'Bình Dương': ['Thủ Dầu Một', 'Bàu Bàng', 'Bến Cát', 'Dầu Tiếng', 'Di An', 'Tân Uyên', 'Dĩ An', 'Thuận An'],
          'Bình Phước': ['Đồng Xoài', 'Bình Long', 'Bù Đăng', 'Bù Đốp', 'Bù Gia Mập', 'Chơn Thành', 'Đắk Hoa', 'Đồng Phú'],
          'Bình Thuận': ['Phan Thiết', 'Bắc Bình', 'Đức Linh', 'Hàm Tân', 'Hàm Thuận Bắc', 'Hàm Thuận Nam', 'Tuy Phong', 'Tánh Linh', 'Phú Quý'],
          'Cà Mau': ['Cà Mau', 'Cái Nước', 'Đầm Dơi', 'Năm Căn', 'Ngọc Hiển', 'U Minh', 'Trần Văn Thời', 'Kế Sách', 'Thới Bình'],
          'Cần Thơ': ['Ninh Kiều', 'Bình Thủy', 'Cái Răng', 'Ô Môn', 'Phong Điền', 'Thốt Nốt', 'Cờ Đỏ', 'Vĩnh Thạnh', 'Kiên Tuế'],
          'Cao Bằng': ['Cao Bằng', 'Bảo Lạc', 'Bảo Lâm', 'Hà Quảng', 'Hòa An', 'Nguyên Bình', 'Quảng Uyên', 'Thạch An', 'Trùng Khánh'],
          'Đà Nẵng': ['Hải Châu', 'Cẩm Lệ', 'Liên Chiểu', 'Ngũ Hành Sơn', 'Sơn Trà'],
          'Đắk Lắk': ['Buôn Ma Thuột', 'Buôn Đôn', 'Cư Kuin', 'Cư Mgar', 'Ea H\'leo', 'Ea Súp', 'Krông Ana', 'Krông Bông', 'Krông Buk'],
          'Đắk Nông': ['Gia Nghĩa', 'Cư Jút', 'Đắk Glong', 'Đắk Mil', 'Đắk R\'Lấp', 'Đắk Song', 'Krông Nô', 'Tuy Đức'],
          'Điện Biên': ['Điện Biên Phủ', 'Mường Lay', 'Điện Biên', 'Điện Biên Đông', 'Mường Ảng', 'Tủa Chùa', 'Tuần Giáo', 'Nậm Pồ'],
          'Đồng Nai': ['Biên Hòa', 'Long Khánh', 'Cẩm Mỹ', 'Định Quán', 'Long Thành', 'Nhơn Trạch', 'Tân Phú', 'Vĩnh Cửu', 'Trảng Bom'],
          'Đồng Tháp': ['Cao Lãnh', 'Sa Đéc', 'Hồng Ngự', 'Châu Thành', 'Châu Thành A', 'Lai Vung', 'Thanh Bình', 'Tam Nông'],
          'Gia Lai': ['Pleiku', 'An Khê', 'Ayun Pa', 'Chư Păh', 'Chư Prông', 'Chư Sê', 'Kbang', 'Krông Pa', 'Phú Thiện', 'Đắk Pơ'],
          'Hà Giang': ['Hà Giang', 'Bắc Mê', 'Bắc Quang', 'Đồng Văn', 'Hoàng Su Phì', 'Mèo Vạc', 'Quản Bạ', 'Vị Xuyên', 'Yên Minh'],
          'Hà Nam': ['Phủ Lý', 'Bình Lục', 'Duy Tiên', 'Kim Bảng', 'Lý Nhân'],
          'Hà Nội': ['Ba Đình', 'Hoàn Kiếm', 'Tây Hồ', 'Long Biên', 'Hà Đông', 'Cầu Giấy', 'Hoàng Mai', 'Thanh Xuân', 'Đống Đa', 'Nam Từ Liêm'],
          'Hà Tĩnh': ['Hà Tĩnh', 'Hồng Lĩnh', 'Kỳ Anh', 'Nghi Xuân', 'Thạch Hà', 'Can Lộc', 'Cẩm Xuyên', 'Đức Thọ', 'Lộc Hà'],
          'Hải Dương': ['Hải Dương', 'Chí Linh', 'Kinh Môn', 'Nam Sách', 'Thanh Hà', 'Kim Thành', 'Cẩm Giàng', 'Tứ Kỳ', 'Gia Lộc'],
          'Hải Phòng': ['Hồng Bàng', 'Lê Chân', 'Ngô Quyền', 'Hải An', 'Kiến An', 'Đồ Sơn', 'Dương Kinh', 'An Dương', 'An Lão'],
          'Hậu Giang': ['Vị Thanh', 'Ngã Bảy', 'Châu Thành', 'Châu Thành A', 'Long Mỹ', 'Phụng Hiệp', 'Vị Thủy', 'Kế Sách'],
          'Hòa Bình': ['Hòa Bình', 'Cao Phong', 'Đà Bắc', 'Kim Bôi', 'Lạc Sơn', 'Lạc Thủy', 'Lương Sơn', 'Tân Lạc', 'Yên Thủy'],
          'Hưng Yên': ['Hưng Yên', 'Ân Thi', 'Khoái Châu', 'Kim Động', 'Mỹ Hào', 'Phù Cừ', 'Tiên Lữ', 'Trưng Trắc', 'Văn Lâm'],
          'Khánh Hòa': ['Nha Trang', 'Cam Ranh', 'Ninh Hòa', 'Diên Khánh', 'Khánh Sơn', 'Khánh Vĩnh', 'Vạn Ninh', 'Cam Lâm'],
          'Kiên Giang': ['Rạch Giá', 'Hà Tiên', 'An Biên', 'An Minh', 'Châu Thành', 'Giồng Riềng', 'Gò Quao', 'Tây An', 'U Minh Thượng'],
          'Kon Tum': ['Kon Tum', 'Đắk Glei', 'Đắk Hà', 'Đắk Tô', 'Kon Plông', 'Kon Rẫy', 'Ngọc Hồi', 'Sa Thầy', 'Tu Mơ Rông'],
          'Lai Châu': ['Lai Châu', 'Mường Tè', 'Nậm Nhùn', 'Phong Thổ', 'Sìn Hồ', 'Tân Uyên', 'Than Uyên', 'Tam Đường', 'Lao Chải'],
          'Lâm Đồng': ['Đà Lạt', 'Bảo Lộc', 'Bảo Lâm', 'Cát Tiên', 'Đạ Huoai', 'Đạ Tẻh', 'Đơn Dương', 'Lạc Dương', 'Lạc Sơn'],
          'Lạng Sơn': ['Lạng Sơn', 'Chi Lăng', 'Hữu Lũng', 'Lộc Bình', 'Phú Lương', 'Văn Quan', 'Văn Lãng', 'Văn Bình', 'Tràng Định'],
          'Lào Cai': ['Lào Cai', 'Sa Pa', 'Bát Xát', 'Mường Khương', 'Văn Bàn', 'Bảo Thắng', 'Bảo Yên', 'Simacai', 'Văn Bàn'],
          'Long An': ['Tân An', 'Bến Lức', 'Cần Đước', 'Cần Giuộc', 'Châu Thành', 'Thủ Thừa', 'Tân Trụ', 'Tân Hưng', 'Tân Thạnh'],
          'Nam Định': ['Nam Định', 'Mỹ Lộc', 'Vụ Bản', 'Ý Yên', 'Trực Ninh', 'Xuân Trường', 'Giao Thủy', 'Nghĩa Hưng', 'Nam Trực'],
          'Nghệ An': ['Vinh', 'Cửa Lò', 'Nghĩa Đàn', 'Quỳ Châu', 'Quỳ Hợp', 'Quỳnh Lưu', 'Thanh Chương', 'Tân Kỳ', 'Hưng Nguyên'],
          'Ninh Bình': ['Ninh Bình', 'Tam Điệp', 'Kim Sơn', 'Yên Khánh', 'Yên Mô', 'Hoa Lư', 'Gia Viễn', 'Nho Quan'],
          'Ninh Thuận': ['Phan Rang-Tháp Chàm', 'Ninh Sơn', 'Ninh Phước', 'Ninh Hải', 'Bác Ái', 'Ninh Hải', 'Thuận Bắc', 'Thuận Nam'],
          'Phú Thọ': ['Việt Trì', 'Thanh Sơn', 'Thanh Thủy', 'Đoan Hùng', 'Phù Ninh', 'Lâm Thao', 'Cẩm Khê', 'Tam Nông', 'Tân Sơn'],
          'Phú Yên': ['Tuy Hòa', 'Sông Cầu', 'Đông Hòa', 'Tuy An', 'Phú Hòa', 'Sông Hinh', 'Tây Hòa', 'Đồng Xuân'],
          'Quảng Bình': ['Đồng Hới', 'Ba Đồn', 'Bố Trạch', 'Quảng Trạch', 'Lệ Thủy', 'Minh Hóa', 'Tuyên Hóa', 'Vũng Chùa'],
          'Quảng Nam': ['Tam Kỳ', 'Hội An', 'Duy Xuyên', 'Quế Sơn', 'Nông Sơn', 'Hiệp Đức', 'Thăng Bình', 'Phú Ninh', 'Tiên Phước'],
          'Quảng Ngãi': ['Quảng Ngãi', 'Bình Sơn', 'Duy Xuyên', 'Hoài Nhơn', 'Lý Sơn', 'Mộ Đức', 'Sơn Tịnh', 'Tư Nghĩa', 'Trà Bồng'],
          'Quảng Trị': ['Đông Hà', 'Quảng Trị', 'Gio Linh', 'Hướng Hóa', 'Vĩnh Linh', 'Triệu Phong', 'Cam Lộ', 'Cồn Cát'],
          'Sóc Trăng': ['Sóc Trăng', 'Châu Thành', 'Cù Lao Dung', 'Kế Sách', 'Ngã Năm', 'Thạnh Trị', 'Long Phú', 'Mỹ Xuyên', 'Trần Đề'],
          'Sơn La': ['Sơn La', 'Mộc Châu', 'Yên Châu', 'Mai Sơn', 'Sông Mã', 'Sông Mộc', 'Vân Hồ', 'Quỳnh Nhai', 'Bắc Yên'],
          'Tây Ninh': ['Tây Ninh', 'Tân Biên', 'Tân Châu', 'Dương Minh Châu', 'Châu Thành', 'Gò Dầu', 'Bến Cầu', 'Hòa Thành'],
          'Thái Bình': ['Thái Bình', 'Đông Hưng', 'Hưng Hà', 'Quỳnh Phụ', 'Tiền Hải', 'Thái Thụy', 'Vũ Thư', 'Kiến Xương'],
          'Thái Nguyên': ['Thái Nguyên', 'Sông Công', 'Phổ Yên', 'Đại Từ', 'Định Hóa', 'Phú Bình', 'Tân Cương', 'Đại Từ', 'Tân Thái'],
          'Thanh Hóa': ['Thanh Hóa', 'Bỉm Sơn', 'Sầm Sơn', 'Bá Thước', 'Cẩm Thủy', 'Mường Lát', 'Ngọc Lặc', 'Thọ Xuân', 'Tĩnh Gia'],
          'Thừa Thiên Huế': ['Huế', 'Hương Thủy', 'Hương Trà', 'A Lưới', 'Nam Đông', 'Phú Vang', 'Phú Lộc', 'Quảng Điền'],
          'Tiền Giang': ['Mỹ Tho', 'Cai Lậy', 'Cái Bè', 'Châu Thành', 'Chợ Gạo', 'Gò Công', 'Tân Phước', 'Tân Phú', 'Tân Thành'],
          'TP. Hồ Chí Minh': ['Quận 1', 'Quận 2', 'Quận 3', 'Quận 4', 'Quận 5', 'Quận 6', 'Quận 7', 'Quận 8', 'Quận 9', 'Quận 10'],
          'Trà Vinh': ['Trà Vinh', 'Càng Long', 'Cầu Kè', 'Cầu Ngang', 'Châu Thành', 'Tiểu Cần', 'Duyên Hải', 'Trà Cú'],
          'Tuyên Quang': ['Tuyên Quang', 'Chiêm Hóa', 'Hàm Yên', 'Lâm Bình', 'Na Hang', 'Yên Sơn', 'Sơn Dương', 'Tuyên Quang'],
          'Vĩnh Long': ['Vĩnh Long', 'Bình Minh', 'Bình Tân', 'Long Hồ', 'Mang Thít', 'Tam Bình', 'Vũng Liêm', 'Trà Ôn', 'Lấp Vò'],
          'Vĩnh Phúc': ['Vĩnh Yên', 'Phúc Yên', 'Bình Xuyên', 'Lập Thạch', 'Sông Lô', 'Tam Dương', 'Tam Đảo', 'Vĩnh Tường'],
          'Yên Bái': ['Yên Bái', 'Nghĩa Lộ', 'Lục Yên', 'Mù Cang Chải', 'Trạm Tấu', 'Văn Chấn', 'Văn Yên', 'Yên Bình'],
          
        }
      },
      JAPAN: {
        provinces: {
          'Hokkaido': ['Sapporo', 'Hakodate', 'Asahikawa', 'Otaru', 'Obihiro'],
      'Aomori': ['Aomori', 'Hachinohe', 'Hirosaki', 'Kuroishi', 'Gonohe'],
      'Iwate': ['Morioka', 'Ichinoseki', 'Kitakami', 'Oshu', 'Fujisawa'],
      'Miyagi': ['Sendai', 'Ishinomaki', 'Sakura', 'Shiogama', 'Kakuda'],
      'Akita': ['Akita', 'Odate', 'Yokote', 'Kazuno', 'Daisen'],
      'Yamagata': ['Yamagata', 'Yonezawa', 'Tendo', 'Sagae', 'Nanyo'],
      'Fukushima': ['Fukushima', 'Koriyama', 'Iwaki', 'Soma', 'Aizuwakamatsu'],
      'Ibaraki': ['Mito', 'Tsukuba', 'Hitachi', 'Tsuchiura', 'Waterfront'],
      'Tochigi': ['Utsunomiya', 'Kanuma', 'Nikkō', 'Oyama', 'Shimotsuke'],
      'Gunma': ['Maebashi', 'Kiryu', 'Takasaki', 'Isesaki', 'Ota'],
      'Saitama': ['Saitama', 'Kawaguchi', 'Koshigaya', 'Omiya', 'Urawa'],
      'Chiba': ['Chiba', 'Narita', 'Kashiwa', 'Funabashi', 'Ichihara'],
      'Tokyo': ['Tokyo', 'Shinjuku', 'Shibuya', 'Ikebukuro', 'Ueno'],
      'Kanagawa': ['Yokohama', 'Kawasaki', 'Sagamihara', 'Fujisawa', 'Odawara'],
      'Niigata': ['Niigata', 'Nagaoka', 'Sanjo', 'Joetsu', 'Tainai'],
      'Toyama': ['Toyama', 'Takaoka', 'Uozu', 'Kurobe', 'Nanto'],
      'Ishikawa': ['Kanazawa', 'Kaga', 'Wajima', 'Nomi', 'Hakusan'],
      'Fukui': ['Fukui', 'Sabae', 'Echizen', 'Awara', 'Tsuruga'],
      'Yamanashi': ['Kofu', 'Fujiyoshida', 'Otsuki', 'Minami-Alps', 'Nirasaki'],
      'Nagano': ['Nagano', 'Matsumoto', 'Suwa', 'Ina', 'Okaya'],
      'Gifu': ['Gifu', 'Tajimi', 'Kakamigahara', 'Seki', 'Gujo'],
      'Shizuoka': ['Shizuoka', 'Hamamatsu', 'Numazu', 'Fujinomiya', 'Ishikawa'],
      'Aichi': ['Nagoya', 'Toyota', 'Okazaki', 'Kasugai', 'Ichinomiya'],
      'Mie': ['Tsu', 'Yokkaichi', 'Ise', 'Matsusaka', 'Kameyama'],
      'Shiga': ['Otsu', 'Hikone', 'Kusatsu', 'Nagahama', 'Shiga'],
      'Kyoto': ['Kyoto', 'Uji', 'Kameoka', 'Muko', 'Fushimi'],
      'Osaka': ['Osaka', 'Sakai', 'Higashiosaka', 'Takatsuki', 'Toyonaka'],
      'Hyogo': ['Kobe', 'Himeji', 'Amagasaki', 'Nishinomiya', 'Kakogawa'],
      'Nara': ['Nara', 'Yamatokoriyama', 'Ikoma', 'Tenri', 'Kashihara'],
      'Wakayama': ['Wakayama', 'Hashimoto', 'Kishiwada', 'Tanabe', 'Wakayama'],
      'Tottori': ['Tottori', 'Yonago', 'Kurayoshi', 'Sakaiminato', 'Tottori'],
      'Shimane': ['Matsue', 'Izumo', 'Masuda', 'Nihonmatsu', 'Shimane'],
      'Okayama': ['Okayama', 'Kurashiki', 'Tsuyama', 'Sanyo-Onoda', 'Okayama'],
      'Hiroshima': ['Hiroshima', 'Fukuyama', 'Kure', 'Hatsukaichi', 'Hiroshima'],
      'Yamaguchi': ['Yamaguchi', 'Ube', 'Shunan', 'Hagi', 'Yamaguchi'],
      'Tokushima': ['Tokushima', 'Oe', 'Mima', 'Anan', 'Naruto'],
      'Kochi': ['Kochi', 'Nankoku', 'Tosa', 'Ino', 'Kochi'],
      'Fukuoka': ['Fukuoka', 'Kitakyushu', 'Kurume', 'Fukuoka', 'Munakata'],
      'Saga': ['Saga', 'Tosu', 'Karatsu', 'Imari', 'Saga'],
      'Nagasaki': ['Nagasaki', 'Sasebo', 'Isahaya', 'Omura', 'Nagasaki'],
      'Kumamoto': ['Kumamoto', 'Kumamoto', 'Yatsushiro', 'Tamana', 'Kumamoto'],
      'Oita': ['Oita', 'Beppu', 'Takamatsu', 'Oita', 'Saiki'],
      'Miyazaki': ['Miyazaki', 'Hyuga', 'Nichinan', 'Kokono', 'Miyazaki'],
      'Kagoshima': ['Kagoshima', 'Kirishima', 'Izumi', 'Satsumasendai', 'Kagoshima'],
      'Okinawa': ['Naha', 'Okinawa', 'Uruma', 'Miyakojima', 'Ishigaki'],
        }
      }
};

const Cart = () => {

  const cartProduct = JSON.parse(localStorage.getItem('cartProduct'));
  const [formData, setFormData] = useState({
    recipient: '',
    phone: '',
    email: '',
    region: 'VIETNAM',
    province: '',
    district: '',
    address: '',
    deliveryTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
      ...(name === 'region' && { province: '', district: '' }), 
      ...(name === 'province' && { district: '' })
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
   
  };

  const renderProvinces = () => {
    return Object.keys(data[formData.region].provinces).map((province) => (
      <option key={province} value={province}>{province}</option>
    ));
  };

  const renderDistricts = () => {
    const districts = data[formData.region].provinces[formData.province] || [];
    return districts.map((district) => (
      <option key={district} value={district}>{district}</option>
    ));
  };

  return (
    <div className='form-con'>
      <Header />
      <div className='form-top'>
        <div className='form-top1'>
          <Link to="/" style={{ marginLeft: '270px', color: 'rgb(0, 132, 255)' }}>Mua thêm sản phẩm khác</Link>
          <span style={{ marginLeft: '500px' }}>Giỏ hàng của bạn</span>
        </div>
        <div className='form-nav'>
          <div className='form-header'>
            <div className='LIST-CART'></div>
            <div className="cart-container">
        {cartProduct ? (
          <div className="cart-item">
            <img className="cart-item-image" style={{width:'100px',height:'100px',marginLeft:'20px',paddingTop:'20px',padding:'20px'}} src={`http://localhost:8090/Image/${cartProduct.image}`} alt={cartProduct.name} />
          <a>{cartProduct.name}</a>
            <div className="cart-item-info">
              <p>Giá: {cartProduct.price}₫</p>
              <p>số lương : {cartProduct.quantity}</p>
            </div>
          </div>
        ) : (
          <p>Giỏ hàng trống.</p>
        )}
      </div>
          </div>
          <hr className="custom-hr" />
          <div>
            <span style={{ color: 'red', fontWeight: 'bold', fontSize: '18px', marginLeft: '60%' }}>Tổng số tiền :</span>
          </div>
          <hr className="custom-hr1" />
          <div className='formButton'>
            <button>Cập nhật giỏ hàng</button>
          </div>
          <hr className="custom-hr1" /><br/>
        <div className='from-home'>
          <form onSubmit={handleSubmit}>
            <div >
              <label>Người nhận hàng:</label>
              <input style={{marginLeft:'100px',width:'500px',padding:'10px',height:'35px'}}
                type="text"
                name="recipient"
                value={formData.recipient}
                onChange={handleChange}
              />
            </div><br/>
            <div>
              <label>Số điện thoại:</label>
              <input style={{marginLeft:'130px',width:'500px',padding:'10px',height:'35px'}}
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div><br/>
            <div>
              <label>Email:</label>
              <input style={{marginLeft:'185px',width:'500px',padding:'10px',height:'35px'}}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div><br/>
            <div>
              <label>Khu vực phân phối:</label>
              <select   style={{marginLeft:'90px',width:'110px',height:'35px'}}
                name="region"
                value={formData.region}
                onChange={handleChange}
              >
                <option value="VIETNAM"> VIỆT NAM</option>
                <option value="JAPAN">NHẬT BẢN</option>
              </select>
          
              
              <select  style={{marginLeft:'10px',width:'190px',height:'35px'}}
                name="province"
                value={formData.province}
                onChange={handleChange}
              >
                <option value="">Chọn tỉnh/thành phố</option>
                {renderProvinces()}
              </select>
        
            
              <select  style={{marginLeft:'10px',width:'170px',height:'35px'}}
                name="district"
                value={formData.district}
                onChange={handleChange}
              >
                <option value="">Chọn quận/huyện</option>
                {renderDistricts()}
              </select>
            </div><br/>
            <div>
              <label>Địa chỉ:</label>
              <input style={{marginLeft:'178px',width:'500px',padding:'10px',height:'35px'}}
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div><br/>
            <div>
              <label>Thời gian giao hàng:</label>
              <input  style={{marginLeft:'85px',width:'500px',padding:'10px',height:'35px'}}
                type="text"
                name="deliveryTime"
                value={formData.deliveryTime}
                onChange={handleChange}
              />
            </div><br/>
            <hr className="custom-hr1" />
            <button style={{marginTop:'10px',marginBottom:'50px',marginLeft:'40%'}} type="submit">Xác nhận </button>
          </form>
          </div>
        </div>
       <div className='form-footer'>
<a>Bằng cách đặt hàng, bạn đồng ý với Điều khoản sử dụng của LILY JEWELERY.COM</a>
       </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;