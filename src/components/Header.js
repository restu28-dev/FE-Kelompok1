import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons'; // Import icon user dari antd

const { Header } = Layout;

const AppHeader = () => {
  // Simulasi status login, ganti dengan logika autentikasi nyata
  const isLoggedIn = false; // Ganti dengan status login sebenarnya

  return (
    <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#3c627b' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="logonya.png" // Ganti dengan path gambar logo bundar Anda
          alt="Logo"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            marginRight: '10px',
          }}
        />
        <div className="logo" style={{ color: '#fff', fontSize: '24px' }}>
          BlueBike
        </div>
      </div>
      <Menu
        theme="#3c627b"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Menu.Item key="1">
          <Link to="/">Rumah</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/galeri">Foto</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/order">Pesan</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/about">Tentang Kami</Link>
        </Menu.Item>
      </Menu>
      <div>
        {isLoggedIn ? (
          <Button type="link" style={{ color: '#000' }}>
            <Link to="/user">
              <UserOutlined style={{ fontSize: '24px' }} />
            </Link>
          </Button>
        ) : (
          <Button type="primary">
            <Link to="/Login">join</Link>
          </Button>
        )}
      </div>
    </Header>
  );
};

export default AppHeader;
