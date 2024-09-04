import React from 'react';
import { Card, Col, Row, Typography, Divider } from 'antd';
import { useLocation } from 'react-router-dom';

const { Title, Text } = Typography;

const Pesanan = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Extracting query parameters
  const orderDetails = {
    rentalDate: queryParams.get('tanggalSewa'),
    deliveryTime: queryParams.get('waktuPengantaran'),
    duration: queryParams.get('durasi'),
    quantity: queryParams.get('jumlahProduk'),
    address: queryParams.get('alamatAntar'),
    phoneNumber: queryParams.get('noHp'),
    emergencyPhoneNumber: queryParams.get('noDarurat'),
    totalPrice: queryParams.get('totalHarga'),
    paymentMethod: queryParams.get('metode'),
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <Title level={2}>Detail Pesanan</Title>
      <Card bordered={false} style={{ marginBottom: '16px' }}>
        <Title level={4}>Informasi Pesanan</Title>
        <Text strong>Tanggal Sewa:</Text> <Text>{orderDetails.rentalDate}</Text><br />
        <Text strong>Waktu Pengantaran:</Text> <Text>{orderDetails.deliveryTime}</Text><br />
        <Text strong>Durasi:</Text> <Text>{orderDetails.duration} jam</Text><br />
        <Text strong>Jumlah Produk:</Text> <Text>{orderDetails.quantity}</Text><br />
        <Text strong>Alamat Pengantaran:</Text> <Text>{orderDetails.address}</Text><br />
        <Text strong>Nomor Telepon:</Text> <Text>{orderDetails.phoneNumber}</Text><br />
        <Text strong>Nomor Telepon Darurat:</Text> <Text>{orderDetails.emergencyPhoneNumber}</Text><br />
        <Text strong>Total Harga:</Text> <Text>{`Rp ${orderDetails.totalPrice}`}</Text><br />
        <Text strong>Metode Pembayaran:</Text> <Text>{orderDetails.paymentMethod}</Text><br />
      </Card>
    </div>
  );
};

export default Pesanan;
