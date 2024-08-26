// src/pages/Bill.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import './Bill.css'; // Nếu bạn có file CSS riêng cho trang này

const Bill = () => {
    const { state } = useLocation();
    const orderData = state?.orderData || {};
    const items = orderData.items || []; // Đảm bảo items là một mảng

    return (
        <div className="bill-container">
            <h1>Thông tin Đơn Hàng</h1>
            <div className="bill-details">
                <h2>Thông tin người nhận</h2>
                <p>Họ và tên: {orderData.recipientName || 'N/A'}</p>
                <p>Số điện thoại: {orderData.recipientPhone || 'N/A'}</p>
                <p>Email: {orderData.recipientEmail || 'N/A'}</p>
                <p>Địa chỉ: {orderData.recipientAddress || 'N/A'}</p>
                <p>Thời gian giao hàng: {orderData.deliveryTime || 'N/A'}</p>
                <h2>Thông tin đơn hàng</h2>
                <ul>
                    {items.length > 0 ? (
                        items.map(item => (
                            <li key={item.productId}>
                                {item.productName} - {item.quantity} x {item.price.toLocaleString()}₫
                            </li>
                        ))
                    ) : (
                        <li>Không có sản phẩm trong đơn hàng.</li>
                    )}
                </ul>
                <p>Tổng số tiền sản phẩm: {orderData.totalAmount ? orderData.totalAmount.toLocaleString() : '0₫'}</p>
                <p>Tổng số tiền phải trả: {orderData.totalPayableAmount ? orderData.totalPayableAmount.toLocaleString() : '0₫'}</p>
                <p>Phương thức vận chuyển: {orderData.shippingMethod || 'N/A'}</p>
                <p>Phương thức thanh toán: {orderData.paymentMethod || 'N/A'}</p>
                <p>Mô tả thêm: {orderData.description || 'N/A'}</p>
            </div>
        </div>
    );
};

export default Bill;
