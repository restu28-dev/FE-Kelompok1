import React, { useState } from 'react';
import { Card, TimePicker, DatePicker, InputNumber, Select, Typography, Button, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const { Option } = Select;
const { Title } = Typography;

const Diantar = () => {
  const [deliveryTime, setDeliveryTime] = useState(null);
  const [duration, setDuration] = useState(1); // Default to 1 hour
  const [rentalDate, setRentalDate] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emergencyPhoneNumber, setEmergencyPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState(1); // Assume quantity of products
  const pricePerHour = 10000; // Example price per hour
  const navigate = useNavigate();

  const format = 'h:mm A'; // 12-hour format with AM/PM

  // Calculate total price based on duration and quantity
  const totalPrice = duration * pricePerHour * quantity;

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
    if (value === 'credit') {
      navigate('/shopeepay');
    } else if (value === 'transfer') {
      navigate('/transfer');
    }
  };

  const handleSubmit = () => {
    if (paymentMethod === 'cash') {
      message.success('Pesanan Anda berhasil dibuat');
    }

    const queryParams = new URLSearchParams({
      tanggalSewa: rentalDate,
      waktuPengantaran: deliveryTime,
      durasi: duration,
      jumlahProduk: quantity,
      alamatAntar: address,
      noHp: phoneNumber,
      noDarurat: emergencyPhoneNumber,
      totalHarga: totalPrice,
      metode: paymentMethod,
    }).toString();

    navigate(`/pesanan?${queryParams}`);
  };

  return (
    <div style={{ background: `url('/background.jpg')`, backgroundSize: 'cover', padding: '20px' }}>
      <Card title="Form Pengantaran Sepeda" style={{ maxWidth: '600px', margin: 'auto' }}>
        <Title level={4}>Informasi Pengantaran</Title>

        <label>Tanggal Sewa:</label>
        <DatePicker 
          onChange={(date) => setRentalDate(date ? date.format('YYYY-MM-DD') : null)} 
          style={{ width: '100%' }} 
        />

        <label>Waktu Pengantaran:</label>
        <TimePicker
          format={format}
          onChange={(time) => setDeliveryTime(time ? moment(time).format(format) : null)}
          style={{ width: '100%' }}
          use12Hours
        />

        <label>Durasi (jam):</label>
        <InputNumber
          min={1}
          max={24}
          value={duration}
          onChange={(value) => setDuration(value)}
          style={{ width: '100%' }}
        />

        <label>Jumlah Produk:</label>
        <InputNumber
          min={1}
          max={10}
          value={quantity}
          onChange={(value) => setQuantity(value)}
          style={{ width: '100%' }}
        />

        <label>Alamat Pengantaran:</label>
        <Input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ width: '100%' }}
        />

        <label>Nomor Telepon:</label>
        <Input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          style={{ width: '100%' }}
        />

        <label>Nomor Telepon Darurat:</label>
        <Input
          value={emergencyPhoneNumber}
          onChange={(e) => setEmergencyPhoneNumber(e.target.value)}
          style={{ width: '100%' }}
        />

        <label>Total Harga:</label>
        <InputNumber
          min={0}
          value={totalPrice}
          readOnly
          style={{ width: '100%' }}
        />

        <label>Metode Pembayaran:</label>
        <Select
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
          style={{ width: '100%' }}
        >
          <Option value="cash">Cash</Option>
          <Option value="credit">Credit Card</Option>
          <Option value="transfer">Bank Transfer</Option>
        </Select>

        {paymentMethod === 'credit' && (
          <div>
            <Button type="primary" onClick={() => navigate('/shopeepay')} style={{ marginTop: '10px' }}>
              ShopeePay
            </Button>
          </div>
        )}

        {paymentMethod === 'transfer' && (
          <div>
            <p>Nomor Rekening BRI: 987-654-3210</p>
          </div>
        )}

        <Button type="primary" style={{ marginTop: '20px' }} onClick={handleSubmit}>
          Kirim Pesanan
        </Button>
      </Card>
    </div  >
  );
};

export default Diantar;
