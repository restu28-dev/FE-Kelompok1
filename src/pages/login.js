import React, { useState } from 'react';
import { Form, Input, Button, message, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem('isLoggedIn', 'true'); // Simpan status login
      message.success('Selamat datang di penyewaan kami!');
      navigate('/user'); // Arahkan ke halaman user setelah login berhasil
    }, 1000);
  };

  return (
    <div style={containerStyle}>
      <Title level={2}>Masuk</Title>
      <Form
        layout="vertical"
        onFinish={onFinish}
        style={formStyle}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Silakan masukkan username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Silakan masukkan password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} style={{ width: '100%' }}>
            Masuk
          </Button>
        </Form.Item>
      </Form>

      <Text>
        Belum punya akun? <Link to="/register">Daftar</Link>
      </Text>
    </div>
  );
};

const containerStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  backgroundColor: '#fff',
};

const formStyle = {
  marginTop: '20px',
};

export default Login;
