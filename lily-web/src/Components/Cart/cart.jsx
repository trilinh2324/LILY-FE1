import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './cart.css';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { AuthContext } from '../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const provincesData = {
  "VietNam": [
    { name: "Hà Nội", districts: ["Ba Đình", "Hoàn Kiếm", "Tây Hồ", "Long Biên", "Cầu Giấy", "Đống Đa", "Hai Bà Trưng", "Thanh Xuân", "Hoàng Mai", "Nam Từ Liêm", "Bắc Từ Liêm"] },
    { name: "TP Hồ Chí Minh", districts: ["Quận 1", "Quận 2", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8", "Quận 9", "Quận 10", "Quận 11", "Quận 12", "Tân Bình", "Tân Phú", "Bình Thạnh", "Gò Vấp", "Phú Nhuận", "Bình Tân", "Nhà Bè", "Hóc Môn", "Củ Chi", "Bình Chánh"] },
    { name: "Đà Nẵng", districts: ["Hải Châu", "Thanh Khê", "Sơn Trà", "Ngũ Hành Sơn", "Liên Chiểu"] },
    { name: "An Giang", districts: ['Long Xuyên', 'Châu Đốc', 'Tân Châu', 'An Phú', 'Châu Phú', 'Châu Thành', 'Phú Tân', 'Thoại Sơn'] },
    { name: "Bà Rịa - Vũng Tàu", districts: ['Vũng Tàu', 'Bà Rịa', 'Châu Đức', 'Côn Đảo', 'Long Điền', 'Đất Đỏ', 'Tân Thành'] },
    { name: "Bắc Giang", districts: ['TP Bắc Giang', 'Hiệp Hòa', 'Lạng Giang', 'Lục Nam', 'Lục Ngạn', 'Yên Thế', 'Tân Yên', 'Sơn Động', 'Yên Dũng', 'Việt Yên'] },
    { name: "Bắc Kạn", districts: ['TP Bắc Kạn', 'Ba Bể', 'Bạch Thông', 'Chợ Đồn', 'Chợ Mới', 'Hà Quảng', 'Hòa An', 'Ngân Sơn', 'Pác Nặm', 'Na Rì'] },
    { name: "Bạc Liêu", districts: ['TP Bạc Liêu', 'Đông Hải', 'Giá Rai', 'Hòa Bình', 'Hồng Dân', 'Vĩnh Lợi', 'Châu Hưng', 'Phước Long'] },
    { name: "Bắc Ninh", districts: ['TP Bắc Ninh', 'Gia Bình', 'Lương Tài', 'Quế Võ', 'Thuận Thành', 'Yên Phong', 'Tiên Du', 'Đình Bảng'] },
    { name: "Bến Tre", districts: ['TP Bến Tre', 'Ba Tri', 'Bình Đại', 'Châu Thành', 'Chợ Lách', 'Mỏ Cày Bắc', 'Mỏ Cày Nam', 'Thạnh Phú', 'Giồng Trôm'] },
    { name: "Bình Định", districts: ['Quy Nhơn', 'An Lão', 'Hoài Ân', 'Hoài Nhơn', 'Phù Mỹ', 'Phù Cát', 'Tây Sơn', 'Vân Canh', 'Nhơn Hòa'] },
    { name: "Bình Dương", districts: ['Thủ Dầu Một', 'Bàu Bàng', 'Bến Cát', 'Dầu Tiếng', 'Di An', 'Tân Uyên', 'Dĩ An', 'Thuận An'] },
    { name: "Bình Phước", districts: ['Đồng Xoài', 'Bình Long', 'Bù Đăng', 'Bù Đốp', 'Bù Gia Mập', 'Chơn Thành', 'Đắk Hoa', 'Đồng Phú'] },
    { name: "Cà Mau", districts: ['Cà Mau', 'Đầm Dơi', 'Năm Căn', 'Ngọc Hiển', 'Phú Tân', 'Thới Bình', 'Trần Văn Thời', 'U Minh'] },
    { name: "Cao Bằng", districts: ['Cao Bằng', 'Bảo Lâm', 'Bảo Lạc', 'Hạ Lang', 'Hòa An', 'Nguyên Bình', 'Quảng Uyên', 'Thạch An', 'Trà Lĩnh', 'Trà Âu'] },
    { name: "Hà Giang", districts: ['Hà Giang', 'Bắc Mê', 'Bắc Quang', 'Đồng Văn', 'Hoàng Su Phì', 'Mèo Vạc', 'Vị Xuyên', 'Yên Minh'] },
    { name: "Hà Nam", districts: ['Phủ Lý', 'Duy Tiên', 'Kim Bảng', 'Lý Nhân', 'Thanh Liêm'] },
    { name: "Hà Tĩnh", districts: ['Hà Tĩnh', 'Cẩm Xuyên', 'Can Lộc', 'Hương Khê', 'Hương Sơn', 'Kỳ Anh', 'Lộc Hà', 'Nghi Xuân', 'Thạch Hà', 'Vũ Quang'] },
    { name: "Hòa Bình", districts: ['Hòa Bình', 'Cao Phong', 'Đà Bắc', 'Kỳ Sơn', 'Lạc Sơn', 'Lạc Thủy', 'Mai Châu', 'Tân Lạc', 'Tân Sơn', 'Yên Thủy'] },
    { name: "Hưng Yên", districts: ['Hưng Yên', 'Kim Động', 'Khoái Châu', 'Mỹ Hào', 'Nam Trực', 'Nghĩa Hưng', 'Trực Ninh', 'Văn Giang', 'Văn Lâm', 'Văn Môn', 'Yên Mỹ'] },
    { name: "Khánh Hòa", districts: ['Nha Trang', 'Cam Ranh', 'Vạn Ninh', 'Ninh Hòa', 'Khánh Vĩnh', 'Khánh Sơn', 'Diên Khánh', 'Cam Lâm'] },
    { name: "Kon Tum", districts: ['Kon Tum', 'Đăk Glei', 'Đăk Hà', 'Đăk Tô', 'Ngọc Hồi', 'Sa Thầy', 'Tu Mơ Rông'] },
    { name: "Lai Châu", districts: ['Lai Châu', 'Mường Tè', 'Mường Lay', 'Phong Thổ', 'Sìn Hồ', 'Tam Đường', 'Tân Uyên'] },
    { name: "Lâm Đồng", districts: ['Đà Lạt', 'Bảo Lộc', 'Bảo Lâm', 'Cát Tiên', 'Di Linh', 'Đạ Huoai', 'Đạ Tẻh', 'Đam Rông', 'Lâm Hà', 'Lạc Dương', 'Lạc Phú'] },
    { name: "Lạng Sơn", districts: ['Lạng Sơn', 'Cao Lộc', 'Đồng Đăng', 'Hữu Lũng', 'Lộc Bình', 'Tràng Định', 'Văn Lãng', 'Văn Quan', 'Bình Gia', 'Hữu Lũng'] },
    { name: "Lào Cai", districts: ['Lào Cai', 'Bát Xát', 'Mường Khương', 'Sapa', 'Văn Bàn', 'Văn Chấn'] },
    { name: "Nam Định", districts: ['Nam Định', 'Giao Thủy', 'Hải Hậu', 'Mỹ Lộc', 'Nam Trực', 'Nghĩa Hưng', 'Trực Ninh', 'Xuân Trường', 'Vụ Bản'] },
    { name: "Nghệ An", districts: ['Vinh', 'Cửa Lò', 'Nghi Lộc', 'Nghi Xuân', 'Thanh Chương', 'Quỳ Hợp', 'Quỳnh Lưu', 'Tương Dương', 'Kỳ Sơn', 'Con Cuông', 'Hưng Nguyên'] },
    { name: "Ninh Bình", districts: ['Ninh Bình', 'Gia Viễn', 'Hoa Lư', 'Kim Sơn', 'Nho Quan', 'Yên Khánh', 'Yên Mô', 'Yên Sơn'] },
    { name: "Ninh Thuận", districts: ['Phan Rang-Tháp Chàm', 'Ninh Hải', 'Ninh Phước', 'Ninh Sơn', 'Bác Ái'] },
    { name: "Quảng Bình", districts: ['Đồng Hới', 'Bố Trạch', 'Quảng Trạch', 'Lệ Thủy', 'Tuyên Hóa', 'Minh Hóa'] },
    { name: "Quảng Nam", districts: ['Tam Kỳ', 'Hội An', 'Duy Xuyên', 'Điện Bàn', 'Quế Sơn', 'Núi Thành', 'Tiên Phước', 'Phú Ninh'] },
    { name: "Quảng Ngãi", districts: ['Quảng Ngãi', 'Bình Sơn', 'Lý Sơn', 'Tư Nghĩa', 'Sơn Tịnh', 'Minh Long', 'Sơn Hà', 'Sơn Tây', 'Trà Bồng', 'Trà Sơn'] },
    { name: "Quảng Trị", districts: ['Đông Hà', 'Hải Lăng', 'Triệu Phong', 'Cam Lộ', 'Vĩnh Linh', 'Gio Linh', 'Hướng Hóa', 'Cồn Cỏ'] },
    { name: "Sóc Trăng", districts: ['Sóc Trăng', 'Châu Thành', 'Kế Sách', 'Long Phú', 'Mỹ Tú', 'Ngã Năm', 'Ngã Bảy', 'Thạnh Trị'] },
    { name: "Sơn La", districts: ['Sơn La', 'Mai Sơn', 'Mộc Châu', 'Yên Châu', 'Quỳnh Nhai', 'Sông Mã', 'Sông Sil', 'Vân Hồ'] },
    { name: "Tây Ninh", districts: ['Tây Ninh', 'Củ Chi', 'Dương Minh Châu', 'Gò Dầu', 'Hòa Thành', 'Tân Châu', 'Tân Biên', 'Trảng Bàng'] },
    { name: "Thái Bình", districts: ['Thái Bình', 'Hưng Hà', 'Quỳnh Phụ', 'Thái Thụy', 'Tiền Hải', 'Vũ Thư'] },
    { name: "Thái Nguyên", districts: ['Thái Nguyên', 'Đại Từ', 'Phổ Yên', 'Sông Công', 'Võ Nhai', 'Định Hóa', 'Đại Từ'] },
    { name: "Thanh Hóa", districts: ['TP Thanh Hóa', 'Bỉm Sơn', 'Hoàng Hóa', 'Mường Lát', 'Ngọc Lặc', 'Nga Sơn', 'Tĩnh Gia', 'Yên Định', 'Hà Trung'] },
    { name: "Thừa Thiên Huế", districts: ['Huế', 'Hương Thủy', 'Hương Trà', 'Phú Vang', 'Phong Điền', 'Quảng Điền', 'A Lưới'] },
    { name: "Tiền Giang", districts: ['Mỹ Tho', 'Cai Lậy', 'Gò Công', 'Châu Thành', 'Chợ Gạo', 'Tân Phú Đông', 'Tân Phú'] },
    { name: "Trà Vinh", districts: ['Trà Vinh', 'Càng Long', 'Cầu Kè', 'Cầu Ngang', 'Duyên Hải', 'Tiểu Cần', 'Vĩnh Long'] },
    { name: "Tuyên Quang", districts: ['Tuyên Quang', 'Chiêm Hóa', 'Hàm Yên', 'Lâm Bình', 'Na Hang', 'Sơn Dương', 'Yên Sơn'] },
    { name: "Vĩnh Long", districts: ['Vĩnh Long', 'Bình Minh', 'Cao Lãnh', 'Mang Thít', 'Tam Bình', 'Trà Ôn', 'Vũng Liêm'] },
    { name: "Vĩnh Phúc", districts: ['Vĩnh Yên', 'Phúc Yên', 'Tam Đảo', 'Tam Dương', 'Lập Thạch', 'Vĩnh Tường', 'Yên Lạc'] },
    { name: "Yên Bái", districts: ['Yên Bái', 'Lục Yên', 'Mù Cang Chải', 'Trấn Yên', 'Văn Chấn', 'Văn Yên'] }
  ],
  "Japan": [
    { name: "Hokkaido", districts: ["Sapporo", "Asahikawa", "Otaru", "Hakodate", "Obihiro", "Kushiro"] },
    { name: "Aomori", districts: ["Aomori", "Hachinohe", "Hirosaki", "Goshogawara", "Towada"] },
    { name: "Iwate", districts: ["Morioka", "Ichinoseki", "Ōfunato", "Kitakami", "Ninohe"] },
    { name: "Miyagi", districts: ["Sendai", "Ishinomaki", "Sendaishi", "Shiroishi", "Kakuda"] },
    { name: "Akita", districts: ["Akita", "Odate", "Yokote", "Fujisaki", "Daisen"] },
    { name: "Yamagata", districts: ["Yamagata", "Yonezawa", "Tsuruoka", "Sakata", "Shinjo"] },
    { name: "Fukushima", districts: ["Fukushima", "Koriyama", "Aizu-Wakamatsu", "Ishikawa", "Nihonmatsu"] },
    { name: "Ibaraki", districts: ["Mito", "Tsukuba", "Hitachi", "Toride", "Tsukubamirai"] },
    { name: "Tochigi", districts: ["Utsunomiya", "Kanuma", "Nikkō", "Tōchigi", "Oyama"] },
    { name: "Gunma", districts: ["Maebashi", "Takasaki", "Isesaki", "Kiryu", "Ota"] },
    { name: "Saitama", districts: ["Saitama", "Kawaguchi", "Koshigaya", "Urawa", "Omiya"] },
    { name: "Chiba", districts: ["Chiba", "Funabashi", "Ichikawa", "Makuhari", "Kisarazu"] },
    { name: "Tokyo", districts: ["Tokyo", "Shibuya", "Shinjuku", "Asakusa", "Ueno"] },
    { name: "Kanagawa", districts: ["Yokohama", "Kawasaki", "Sagamihara", "Odawara", "Yokosuka"] },
    { name: "Niigata", districts: ["Niigata", "Nagaoka", "Sanjo", "Joetsu", "Shibata"] },
    { name: "Toyama", districts: ["Toyama", "Takaoka", "Imizu", "Nanto", "Uozu"] },
    { name: "Ishikawa", districts: ["Kanazawa", "Kanazawa", "Komatsu", "Kaga", "Noto"] },
    { name: "Fukui", districts: ["Fukui", "Sabae", "Echizen", "Tsuruga", "Obama"] },
    { name: "Yamanashi", districts: ["Kofu", "Fujiyoshida", "Otsuki", "Minami-Alps", "Katsunuma"] },
    { name: "Nagano", districts: ["Nagano", "Matsumoto", "Ueda", "Shiojiri", "Ina"] },
    { name: "Gifu", districts: ["Gifu", "Kakamigahara", "Ogaki", "Tajimi", "Mino"] },
    { name: "Shizuoka", districts: ["Shizuoka", "Hamamatsu", "Fujinomiya", "Numazu", "Atami"] },
    { name: "Aichi", districts: ["Nagoya", "Toyota", "Okazaki", "Ichinomiya", "Toyoake"] },
    { name: "Mie", districts: ["Tsu", "Yokkaichi", "Ise", "Kameyama", "Suzuka"] },
    { name: "Shiga", districts: ["Otsu", "Shiga", "Kusatsu", "Hikone", "Nagahama"] },
    { name: "Kyoto", districts: ["Kyoto", "Uji", "Fushimi", "Kameoka", "Muko"] },
    { name: "Osaka", districts: ["Osaka", "Sakai", "Higashiosaka", "Tondabayashi", "Neyagawa"] },
    { name: "Hyogo", districts: ["Kobe", "Himeji", "Amagasaki", "Nishinomiya", "Takarazuka"] },
    { name: "Nara", districts: ["Nara", "Yamatokoriyama", "Tenri", "Kashihara", "Gose"] },
    { name: "Wakayama", districts: ["Wakayama", "Shingu", "Tanabe", "Kainan", "Hashimoto"] },
    { name: "Tottori", districts: ["Tottori", "Yonago", "Kurayoshi", "Sakaiminato", "Daisen"] },
    { name: "Shimane", districts: ["Matsue", "Izumo", "Hamada", "Oda", "Masuda"] },
    { name: "Okayama", districts: ["Okayama", "Kurashiki", "Okayama", "Sayo", "Bizen"] },
    { name: "Hiroshima", districts: ["Hiroshima", "Fukuyama", "Kure", "Onomichi", "Hatsukaichi"] },
    { name: "Yamaguchi", districts: ["Yamaguchi", "Shunan", "Ube", "Hofu", "Yanai"] },
    { name: "Tokushima", districts: ["Tokushima", "Awa", "Naruto", "Kochi", "Mugi"] },
    { name: "Kagawa", districts: ["Takamatsu", "Zentsuji", "Marugame", "Sanuki", "Kotohira"] },
    { name: "Ehime", districts: ["Matsuyama", "Niihama", "Imabari", "Saijo", "Shikokuchuo"] },
    { name: "Kochi", districts: ["Kochi", "Nankoku", "Tosa", "Shimanto", "Kuroshio"] },
    { name: "Fukuoka", districts: ["Fukuoka", "Kitakyushu", "Fukuoka", "Iizuka", "Kurume"] },
    { name: "Saga", districts: ["Saga", "Tosu", "Karatsu", "Imari", "Ogi"] },
    { name: "Nagasaki", districts: ["Nagasaki", "Sasebo", "Isahaya", "Omura", "Shimabara"] },
    { name: "Kumamoto", districts: ["Kumamoto", "Kumamoto", "Yatsushiro", "Hitoyoshi", "Amakusa"] },
    { name: "Oita", districts: ["Oita", "Beppu", "Takamatsu", "Usa", "Yufu"] },
    { name: "Miyazaki", districts: ["Miyazaki", "Nobeoka", "Miyakonojo", "Kushima", "Hyuga"] },
    { name: "Kagoshima", districts: ["Kagoshima", "Kirishima", "Kanoya", "Satsumasendai", "Yakushima"] },
    { name: "Okinawa", districts: ["Naha", "Okinawa", "Urasoe", "Ginowan", "Miyakojima"] }
  ]
};

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [updatedQuantities, setUpdatedQuantities] = useState({});
  const [showZeroQuantityToast, setShowZeroQuantityToast] = useState(false);
  const [recipientName, setRecipientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('VietNam');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const navigate = useNavigate();
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedProvince('');
    setSelectedDistrict('');
  };
  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setSelectedDistrict('');
  };
  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      recipientName,
      phoneNumber,
      email,
      selectedCountry,
      selectedProvince,
      selectedDistrict,
      address,
      deliveryTime
    };

    navigate('/test', { state: { formData } });
  };

  const provinces = provincesData[selectedCountry] || [];
  const currentProvinces = provinces.map(province => province.name);
  const currentDistricts = provinces.find(province => province.name === selectedProvince)?.districts || [];

  useEffect(() => {
    if (user && user.userId) {
      fetchCartItems(user.userId);
    }
  }, [user]);

  const fetchCartItems = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8090/api/cart/user/${userId}`);
      setCartItems(response.data);
      calculateTotal(response.data);
    } catch (error) {
      setError('Có lỗi xảy ra khi lấy dữ liệu giỏ hàng.');
      console.error('Error fetching cart items:', error);
    }
  };

  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    setTotalAmount(total);
  };

  const removeItemFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:8090/api/cart/removeFromCart/${id}`);
      if (!showZeroQuantityToast) {
        setShowZeroQuantityToast(true);
        toast.success('Đã xóa sản phẩm có số lượng bằng 0 khỏi giỏ hàng.', { autoClose: 2000 });
      } else {
        toast.success('Sản phẩm đã bị xóa khỏi giỏ hàng.', { autoClose: 2000 });
      }
      if (user && user.userId) {
        fetchCartItems(user.userId);
      }
    } catch (error) {
      setError('Có lỗi xảy ra khi xóa sản phẩm khỏi giỏ hàng.');
      console.error('Error removing item from cart:', error);
    }
  };

  const handleQuantityChange = (id, value) => {
    const item = cartItems.find(item => item.id === id);
    const maxQuantity = item?.product?.quantity || 0;
    let quantity = parseInt(value, 10);

    if (isNaN(quantity) || quantity < 0) {

    }

    if (quantity > maxQuantity) {
      toast.error(`Số lượng "${item.product.name}" vượt quá số lượng có sẵn.`, { autoClose: 3000 });
      quantity = maxQuantity;
    }

    setUpdatedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantity,
    }));
  };

  const updateCartItemQuantity = async (id, quantity) => {
    try {
      const response = await axios.patch(`http://localhost:8090/api/cart/updateQuantity/${id}`, { quantity });
      return response;
    } catch (error) {
      throw new Error(error.response?.data || 'Có lỗi xảy ra khi cập nhật số lượng sản phẩm.');
    }
  };

  const handleUpdateClick = async () => {
    const invalidQuantities = Object.entries(updatedQuantities).filter(([id, quantity]) => quantity <= 0);

    if (invalidQuantities.length > 0) {
      await Promise.all(invalidQuantities.map(([id]) => removeItemFromCart(id)));
      if (user && user.userId) {
        fetchCartItems(user.userId);
      }
      return;
    }

    const exceededQuantities = cartItems.filter(item => {
      const newQuantity = updatedQuantities[item.id] !== undefined ? updatedQuantities[item.id] : item.quantity;
      return newQuantity > item.product.quantity;
    });

    if (exceededQuantities.length > 0) {
      exceededQuantities.forEach(item => {
        toast.error(`Số lượng "${item.product.name}" vượt quá số lượng có sẵn.`, { autoClose: 3000 });
      });
      return;
    }

    const updatePromises = cartItems.map(async (item) => {
      const quantity = updatedQuantities[item.id] !== undefined ? updatedQuantities[item.id] : item.quantity;
      try {
        if (quantity <= 0) {
          await removeItemFromCart(item.id);
        } else {
          await updateCartItemQuantity(item.id, quantity);
        }
      } catch (error) {
        setError(error.message);
      }
    });

    try {
      await Promise.all(updatePromises);
      toast.success('Cập nhật giỏ hàng thành công.', { autoClose: 2000 });
      if (user && user.userId) {
        fetchCartItems(user.userId);
      }
    } catch (error) {
      setError('Có lỗi xảy ra khi cập nhật giỏ hàng.');
      console.error('Error updating cart items:', error);
    }
  };

  if (!user) {
    return <p>Bạn cần đăng nhập để xem giỏ hàng.</p>;
  }

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
              <ToastContainer />
              {error && <div className="error-message">{error}</div>}
              {cartItems.length === 0 ? (
                <p style={{ textAlign: 'center' }}>Giỏ hàng của bạn đang trống.</p>
              ) : (
                <div>
                  <ul className="cart-items">
                    {cartItems.map((item) => (
                      <li key={item.id} className="cart-item">
                        <div className='navH-cart'>
                          <div className='nav-left'>
                            <a
                              style={{ borderRadius: '50px', color: 'black', position: 'absolute', marginLeft: '15px', marginTop: '-8px', backgroundColor: '#f4f4f4', width: '25px', height: '25px', textAlign: 'center', textDecoration: 'none' }}
                              onClick={() => removeItemFromCart(item.id)}
                              className="remove-button"
                            >
                              X
                            </a>
                            <img
                              src={`http://localhost:8090/Image/${item.product.image}`}
                              style={{ width: '100px', height: '100px', marginLeft: '20px' }}
                              alt={item.product.name}
                              className="cart-item-image"
                            />
                            <a
                              style={{ width: 'fit-content', display: 'inline-block', position: 'relative', top: '-40px' }}
                            >
                              {item.product.name}
                            </a>
                          </div>
                          <div className='nav-right'>
                            <br />
                            <a
                              style={{ paddingTop: '20px', color: 'red', marginRight: '100px' }}
                            >
                              {item.product.price.toLocaleString()} ₫
                            </a>
                            <br />
                            <div>
                              <input
                                style={{ width: '70px' }}
                                type="number"
                                value={updatedQuantities[item.id] !== undefined ? updatedQuantities[item.id] : item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <hr className="custom-hr3" />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div>
            <span style={{ color: 'red', fontWeight: 'bold', fontSize: '18px', marginLeft: '60%' }}>Tổng số tiền : {totalAmount.toLocaleString()} ₫</span>
          </div>
          <hr className="custom-hr1" />
          <div className='formButton'>
            <button onClick={handleUpdateClick} className="update-button">Cập nhật giỏ hàng</button>
          </div>
          <hr className="custom-hr1" /><br />
          <div className='from-home'>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Người nhận hàng:</label>
                <input
                  style={{ marginLeft: '100px', width: '500px', padding: '10px', height: '35px' }}
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)} required
                />
              </div><br />
              <div>
                <label>Số điện thoại:</label>
                <input
                  style={{ marginLeft: '130px', width: '500px', padding: '10px', height: '35px' }}
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^0\d{0,9}$/.test(value)) {
                      setPhoneNumber(value);
                    }
                  }}
                  required
                />
              </div>
              <br />
              <div>
                <label>Email:</label>
                <input
                  style={{ marginLeft: '185px', width: '500px', padding: '10px', height: '35px' }}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} required
                />
              </div><br />
              <div>
                <label>Khu vực phân phối:</label>
                <select
                  style={{ marginLeft: '90px', width: '110px', height: '35px' }}
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  <option value="VietNam">Việt Nam</option>
                  <option value="Japan">Janpan</option>
                </select>
                <select
                  style={{ marginLeft: '10px', width: '190px', height: '35px' }}
                  value={selectedProvince}
                  onChange={handleProvinceChange}
                >
                  <option value="">Chọn tỉnh thành</option>
                  {currentProvinces.map(province => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
                <select
                  style={{ marginLeft: '10px', width: '170px', height: '35px' }}
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                >
                  <option value="">Chọn quận huyện</option>
                  {currentDistricts.map(district => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div><br />
              <div>
                <label>Địa chỉ nhận hàng:</label>
                <input
                  style={{ marginLeft: '100px', width: '500px', padding: '10px', height: '35px' }}
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)} required
                />
              </div><br />
              <div>
                <label>Thời gian giao hàng:</label>
                <input
                  style={{ marginLeft: '85px', width: '500px', padding: '10px', height: '35px' }}
                  type="date"
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <br />
              <hr className="custom-hr3" />
              <button
                style={{ marginTop: '10px', marginBottom: '50px', marginLeft: '40%' }}
                type="submit"
              >
                Xác nhận
              </button>
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