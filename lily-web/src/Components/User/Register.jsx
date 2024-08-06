import React, { useState } from 'react';
import './register.css';
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

const Register = () => {
  const [captcha, setCaptcha] = useState(generateCaptchaWithColors());
  const [captchaInput, setCaptchaInput] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [error, setError] = useState('');

  const handleCaptchaRefresh = () => {
    setCaptcha(generateCaptchaWithColors());
  };

  const validateUsername = (username) => {
    const usernamePattern = /^(?=.*[A-Z])(?=.*\d).{7,}$/;
    return usernamePattern.test(username);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?!.*\busername\b)(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:"<>?])[A-Za-z\d!@#$%^&*()_+{}|:"<>?]{7,}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const captchaString = captcha.map(item => item.char).join('');
    
    if (captchaInput !== captchaString) {
      setError('Mã xác nhận không đúng. Vui lòng thử lại.');
      handleCaptchaRefresh();
    } else if (!validateUsername(username)) {
      setError('Tên tài khoản phải dài hơn 6 ký tự, có ít nhất một ký tự in hoa và một số.');
    } else if (!validatePassword(password)) {
      setError('Mật khẩu phải dài hơn 6 ký tự, có ít nhất một ký tự in hoa, một số và một ký tự đặc biệt.');
    } else if (password !== confirmPassword) {
      setError('Mật khẩu và xác nhận mật khẩu không khớp.');
    } else if (!agreement) {
      setError('Bạn phải đồng ý với các điều khoản.');
    } else {
     
      setError('');
      alert('Đăng ký thành công!');
    }
  };

  return (
    <div className='form-register'>
      <Header />
      <div className='form-register1'>
        <div className='register-form-container'>
          <h4>Đăng ký thành viên</h4>
          <form onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
        <div>
            <div className='form-group1'>
              <label htmlFor='username'>Tài Khoản(*):</label>
              <input
                type='text'
                id='username'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <small className='hint'>* Tên tk dài hơn 6 ký tự, có 1 cái in hoa và 1 số.</small>
            </div>
            <div className='form-group1'>
              <label htmlFor='email'>E-mail:</label>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
            <div className='form-group1'>
              <label htmlFor='password'>Mật khẩu(*):</label>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <small className='hint'>* Mật khẩu dài hơn 6 ký tự, có 1 cái in hoa, 1 số và một ký tự đặc biệt.</small>
            </div>
            <div className='form-group1'>
              <label htmlFor='confirm-password'>Xác nhận mật khẩu(*):</label>
              <input
                type='password'
                id='confirm-password'
                name='confirm-password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className='form-group2 captcha-group1'>
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
            <div className='form-group3'>
              <input
                type='checkbox'
                id='agreement'
                name='agreement'
                checked={agreement}
                onChange={(e) => setAgreement(e.target.checked)}
              />
              <label htmlFor='agreement'>
                Tôi đã đọc và đồng ý các
                <a href='/terms-and-conditions' target='_blank'>《ĐIỀU KHOẢN THỎA THUẬN》</a>
              </label>
            </div>
            <hr className="custom-hr1" /><br/>
            <button3 type='submit'>Đăng ký</button3>
          </form>
          <div className='form-links'>
            <a>Nếu có tài khoản xin mời <Link to='/login'> Đăng nhập</Link></a>  
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
