import React, { useState } from 'react';
import { Card, DatePicker, TimePicker, InputNumber, Select, Typography, Button, Input } from 'antd';
import moment from 'moment';

const { Option } = Select;
const { Title } = Typography;

const Dijemput = () => {
  const [pickupTime, setPickupTime] = useState(null);
  const [duration, setDuration] = useState(1); // Default to 1 hour
  const [rentalDate, setRentalDate] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emergencyPhoneNumber, setEmergencyPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [numberOfProducts, setNumberOfProducts] = useState(1); // Default to 1 product

  const pricePerHour = 10000; // Harga per jam
  const [totalPrice, setTotalPrice] = useState(duration * pricePerHour * numberOfProducts);

  const handleDurationChange = (value) => {
    setDuration(value);
    setTotalPrice(value * pricePerHour * numberOfProducts);
  };

  const handleNumberOfProductsChange = (value) => {
    setNumberOfProducts(value);
    setTotalPrice(duration * pricePerHour * value);
  };

  const handlePickupTimeChange = (time) => {
    setPickupTime(time ? moment(time).format('h:mm A') : null);
  };

  const handleSubmit = () => {
    alert('Pesanan telah dikirim!');
  };

  return (
    <div style={{ background: `url('/background.jpg')`, backgroundSize: 'cover', padding: '20px' }}>
      <Card title="Form Jemput Sepeda" style={{ maxWidth: '600px', margin: 'auto' }}>
        <Title level={4}>Informasi Jemput</Title>
        
        <label>Tanggal Sewa:</label>
        <DatePicker
          onChange={(date) => setRentalDate(date ? date.format('YYYY-MM-DD') : null)}
          style={{ width: '100%' }}
        />

        <label>Waktu Jemput:</label>
        <TimePicker
          format='h:mm A'
          onChange={handlePickupTimeChange}
          style={{ width: '100%' }}
          use12Hours
        />

        <label>Durasi (jam):</label>
        <InputNumber
          min={1}
          max={24}
          value={duration}
          onChange={handleDurationChange}
          style={{ width: '100%' }}
        />

        <label>Jumlah Produk:</label>
        <InputNumber
          min={1}
          max={10}
          value={numberOfProducts}
          onChange={handleNumberOfProductsChange}
          style={{ width: '100%' }}
        />

        <label>Total Harga:</label>
        <div style={{ marginBottom: '10px' }}>Rp {totalPrice.toLocaleString()}</div>

        <label>Metode Pembayaran:</label>
        <Select
          value={paymentMethod}
          onChange={(value) => setPaymentMethod(value)}
          style={{ width: '100%' }}
        >
          <Option value="cash">Cash</Option>
          <Option value="credit">Credit Card</Option>
          <Option value="transfer">Bank Transfer</Option>
        </Select>

        <label>Nomor Telepon:</label>
        <Input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          style={{ width: '100%' }}
        />

        <label>Nomor Telepon Darurat:</label>
        <Input
          type="tel"
          value={emergencyPhoneNumber}
          onChange={(e) => setEmergencyPhoneNumber(e.target.value)}
          style={{ width: '100%' }}
        />

        <label>Alamat (sesuai KTP):</label>
        <Input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ width: '100%' }}
        />

        <Button
          type="primary"
          style={{ marginTop: '20px' }}
          onClick={handleSubmit}
        >
          Kirim Pesanan
        </Button>
      </Card>
    </div>
  );
};

export default Dijemput;
