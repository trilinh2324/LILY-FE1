import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleCaptchaRefresh = () => {
    setCaptcha(generateCaptchaWithColors());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const captchaString = captcha.map(item => item.char).join('');
    
    if (captchaInput !== captchaString) {
      setError('Mã xác nhận không đúng. Vui lòng thử lại.');
      handleCaptchaRefresh();
    } else if (username !== 'expectedUsername' || password !== 'expectedPassword') { // Thay 'expectedUsername' và 'expectedPassword' bằng thông tin xác thực thực tế của bạn
      setError('Tài khoản hoặc mật khẩu không đúng. Vui lòng thử lại.');
    } else {
      // Xử lý đăng nhập thành công tại đây
      setError(''); // Xóa thông báo lỗi nếu đăng nhập thành công
    }
  };

  return (
    <div className='form-login'>
      <Header />
      <div className='form-login1'>
        <div className='login-form-container'>
          <h2>Đăng nhập thành viên</h2>
          <form onSubmit={handleSubmit}>
            {error && <div className='error-message'>{error}</div>}
            <div className='form-group'>
              <label htmlFor='username'>Tài Khoản(*):</label>
              <input
                type='text'
                id='username'
                name='username'
                value={username}
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
              <label htmlFor='remember'> Remember my login information</label>
            </div>
            <button type='submit'>Đăng nhập</button>
          </form>
          <div className='form-links'>
            <Link to='/forgot-password'>Bạn đã quên mật khẩu?</Link>
            <span> | </span>
            <Link to='/register'>Đăng ký thành viên</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
