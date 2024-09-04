import React, { useState } from 'react';
import { Card, Button, Upload, message, Input, Form } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Akun = () => {
  const [profileImage, setProfileImage] = useState('limbad.jpeg'); // Gambar profil default
  const [username, setUsername] = useState('Limbad');
  const [email, setEmail] = useState('Limbad@example.com');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('08123456789'); // Default phone number
  const [address, setAddress] = useState('Tegal, Jawa Tengah');
  const [form] = Form.useForm(); // Form instance untuk mengedit

  const navigate = useNavigate(); // Hook untuk navigasi

  // Fungsi untuk handle upload foto profil
  const handleUpload = ({ file }) => {
    if (file.status === 'done') {
      setProfileImage(URL.createObjectURL(file.originFileObj));
      message.success('Foto profil berhasil diubah');
    } else if (file.status === 'error') {
      message.error('Gagal mengubah foto profil');
    }
  };

  // Fungsi untuk handle save perubahan
  const handleSave = () => {
    form.validateFields()
      .then(values => {
        setUsername(values.username);
        setEmail(values.email);
        setAddress(values.address);
        setPassword(values.password);
        setPhoneNumber(values.phoneNumber);
        message.success('Perubahan berhasil disimpan');
        navigate('/user'); // Navigasi ke halaman User.js
      })
      .catch(errorInfo => {
        message.error('Gagal menyimpan perubahan');
      });
  };

  // Fungsi untuk handle batal
  const handleCancel = () => {
    navigate('/user'); // Navigasi ke halaman User.js
  };

  return (
    <div style={{ backgroundColor: '#00000', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Card
        title={<h2>Kelola Akun</h2>}
        bordered={false}
        style={{ width: 600, textAlign: 'center', backgroundColor: '#e6f7ff' }}
      >
        {/* Kontainer untuk gambar profil dan tombol upload */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
          <img
            src={profileImage}
            alt="Profil"
            style={{ 
              width: '150px', 
              height: '150px', 
              borderRadius: '50%', 
              border: '2px solid #1890ff', // Bingkai gambar
              objectFit: 'cover' // Menjaga rasio gambar saat dipotong
            }}
          />
          <Upload
            showUploadList={false}
            beforeUpload={() => false} // Prevent auto upload
            customRequest={handleUpload}
            accept="image/*" // Hanya menerima gambar
            style={{ marginTop: '10px' }}
          >
            <Button icon={<UploadOutlined />} type="primary">
              Ubah Profil
            </Button>
          </Upload>
        </div>

        {/* Form pengeditan profil langsung ditampilkan */}
        <Form
          form={form}
          layout="vertical"
          style={{ marginTop: '20px' }}
          initialValues={{ username, email, address, phoneNumber }}
        >
          <Form.Item name="username" label="Username">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input type="email" />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input.Password />
          </Form.Item>
          <Form.Item name="phoneNumber" label="Nomor Telepon">
            <Input />
          </Form.Item>
          <Form.Item name="address" label="Alamat">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleSave} style={{ marginRight: '10px' }}>
              Simpan
            </Button>
            <Button onClick={handleCancel}>
              Batal
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Akun;
