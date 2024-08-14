import React, { useState } from 'react';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';
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

const Register = () => {
  const [captcha, setCaptcha] = useState(generateCaptchaWithColors());
  const [captchaInput, setCaptchaInput] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreement, setAgreement] = useState(false);
  const navigate = useNavigate();

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

  const validatePhoneNumber = (phoneNumber) => {
    const phonePattern = /^0\d{9}$/;
    return phonePattern.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captchaString = captcha.map(item => item.char).join('');

    if (captchaInput !== captchaString) {
      toast.error('Mã xác nhận không đúng. Vui lòng thử lại.');
      handleCaptchaRefresh();
    } else if (!validateUsername(username)) {
      toast.error('Tên tài khoản phải dài hơn 6 ký tự, có ít nhất một ký tự in hoa và một số.');
    } else if (!validatePhoneNumber(phoneNumber)) {
      toast.error('Số điện thoại của bạn nhập chưa đúng.');
    } else if (!validatePassword(password)) {
      toast.error('Mật khẩu phải dài hơn 6 ký tự, có ít nhất một ký tự in hoa, một số và một ký tự đặc biệt.');
    } else if (password !== confirmPassword) {
      toast.error('Mật khẩu và xác nhận mật khẩu không khớp.');
    } else if (!agreement) {
      toast.error('Bạn phải đồng ý với các điều khoản.');
    } else {
      try {
        await axios.post('http://localhost:8090/api/user/register', null, {
          params: {
            userName: username,
            password,
            phone_number: phoneNumber,
          },
        });
        toast.success('Đăng ký thành công!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } catch (error) {
        toast.error('Đăng ký thất bại. Vui lòng thử lại.');
      }
    }
  };

  return (
    <div className='form-register'>
      <Header />
      <div className='form-register1'>
        <div className='register-form-container'>
          <h4>Đăng ký thành viên</h4>
          <form onSubmit={handleSubmit}>
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
              <small className='hint'>* Tên tài khoản dài hơn 6 ký tự, có 1 ký tự in hoa và 1 số.</small>
            </div>
            <div className='form-group1'>
              <label htmlFor='phone'>Số điện thoại</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
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
              <small className='hint'>* Mật khẩu dài hơn 6 ký tự, có 1 ký tự in hoa, 1 số và một ký tự đặc biệt.</small>
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
            <button style={{marginLeft:'42%'}} type='submit'>Đăng ký</button>
          </form>
          <div className='form-links'>
            <span>Nếu có tài khoản xin mời <Link to='/login'> Đăng nhập</Link></span>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Register;
