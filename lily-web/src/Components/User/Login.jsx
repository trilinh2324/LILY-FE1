import React, { useState, useContext } from 'react';
import axios from 'axios';
import './login.css'; 
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { AuthContext } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const generateCaptcha = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let captcha = '';
  for (let i = 0; i < 4; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const generateCaptchaWithColors = () => {
  const captcha = generateCaptcha();
  return captcha.split('').map(char => ({
    char,
    color: getRandomColor(),
  }));
};

const Login = () => {
  const [captcha, setCaptcha] = useState(generateCaptchaWithColors());
  const [captchaInput, setCaptchaInput] = useState('');
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleCaptchaRefresh = () => {
    setCaptcha(generateCaptchaWithColors());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captchaString = captcha.map(item => item.char).join('');
    
    if (captchaInput !== captchaString) {
      toast.error('Mã xác nhận không đúng. Vui lòng thử lại.');
      handleCaptchaRefresh();
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8090/api/user/login', {
        userName: userName,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      if (response.status === 200) {
        toast.success('Đăng nhập thành công!');
        login({ 
          userId: response.data.userId, 
          userName: response.data.userName, 
          role: response.data.role 
        }); // Lưu thông tin người dùng vào AuthContext
        navigate('/'); // Chuyển hướng đến trang chủ khi đăng nhập thành công
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          if (error.response.data.message.includes('username')) {
            toast.error('Tên tài khoản không đúng.');
          } else if (error.response.data.message.includes('password')) {
            toast.error('Mật khẩu không đúng.');
          } else {
            toast.error(error.response.data.message || 'Đã xảy ra lỗi. Vui lòng thử lại.');
          }
        } else {
          toast.error('Đã xảy ra lỗi. Vui lòng thử lại.');
        }
      } else {
        console.error('Error:', error);
        toast.error('Đã xảy ra lỗi. Vui lòng thử lại.');
      }
    }
  };
  
  return (
    <div className='form-login'>
      <Header />
      <div className='form-login1'>
        <div className='login-form-container'>
          <h2>Đăng nhập thành viên</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='username'>Tài Khoản(*):</label>
              <input
                type='text'
                id='userName'
                name='userName'
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Mật khẩu(*):</label>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='form-group captcha-group'>
              <label htmlFor='captcha'>Mã xác nhận:</label>
              <input
                type='text'
                id='captcha'
                name='captcha'
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
              />
              <span className='captcha-code' onClick={handleCaptchaRefresh}>
                {captcha.map((item, index) => (
                  <span key={index} style={{ color: item.color }}>
                    {item.char}
                  </span>
                ))}
              </span>
            </div>
            <div className='form-group form-remember' style={{ marginLeft: '25%' }}>
              <input type='checkbox' id='remember' name='remember' />
              <label htmlFor='remember'>Ghi nhớ thông tin đăng nhập của tôi</label>
            </div>
            <div className='buton-login'>
              <button type='submit'>Đăng nhập</button>
            </div>
          </form>
          <div className='form-links'>
            <Link to='/forgot-password'>Bạn đã quên mật khẩu?</Link>
            <span> | </span>
            <Link to='/register'>Đăng ký thành viên</Link>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Login;
