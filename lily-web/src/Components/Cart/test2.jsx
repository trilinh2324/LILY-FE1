import React from 'react';
import { useLocation } from 'react-router-dom';

const Buy = () => {
  const { state } = useLocation();
  const formData = state?.formData || {};

  return (
    <div style={{ padding: '20px' }}>





      <h1>Thông tin đơn hàng</h1>
      <div><strong>Người nhận hàng:</strong> {formData.recipientName}</div>
      <div><strong>Số điện thoại:</strong> {formData.phoneNumber}</div>
      <div><strong>Email:</strong> {formData.email}</div>
      <div><strong>Khu vực phân phối:</strong> {formData.selectedCountry}</div>
      <div><strong>Tỉnh/Thành phố:</strong> {formData.selectedProvince}</div>
      <div><strong>Quận/Huyện:</strong> {formData.selectedDistrict}</div>
      <div><strong>Địa chỉ nhận hàng:</strong> {formData.address}</div>
      <div><strong>Thời gian giao hàng:</strong> {formData.deliveryTime}</div>
    </div>
  );
};

export default Buy;
