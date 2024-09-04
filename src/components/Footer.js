import React from 'react';
import { Layout, Row, Col, Button, Typography } from 'antd';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';  // Pastikan Link diimport dari react-router-dom

const { Footer } = Layout;
const { Title, Text } = Typography;

const FooterComponent = () => {
  return (
    <Footer style={{ backgroundColor: '#3c627b', padding: '20px 5px' }}>
      <Row justify="center" style={{ marginBottom: '8px' }}>
        <Col xs={24} style={{ textAlign: 'center' }}>
          <Title level={2} style={{ color: '#ffffff' }}>
            Butuh bantuan kami?
          </Title>
          <Text style={{ color: '#b0c4de' }}>
            Silakan hubungi kami untuk informasi selengkapnya
          </Text>
          <br />
          <Button
            type="primary"
            style={{
              marginTop: '10px',
              backgroundColor: '#4b6778',
              borderColor: '#4b6778',
              color: '#ffffff',
            }}
            size="large"
            onClick={() => window.location.href = 'mailto:sepeda@bluebike.com'}
          >
            Hubungi kami
          </Button>
        </Col>
      </Row>

      <Row justify="space-between" style={{ padding: '20px 0', backgroundColor: '#2c4147', borderRadius: '8px' }}>
        <Col xs={24} sm={12} md={6} style={{ textAlign: 'left', paddingTop: '0px' }}>
          <img
            src="logonya.png"
            alt="BlueBike Logo"
            style={{ width: '150px', marginBottom: '20px' }}
          />
          <Text style={{ color: '#ffffff', display: 'block' }}>
            Rental Motor Semarang adalah penyedia jasa layanan sewa/rental motor terpercaya di Sukorejo.
          </Text>
        </Col>

        <Col xs={24} sm={12} md={4} style={{ textAlign: 'left' }}>
          <Title level={5} style={{ color: '#ffffff' }}>
            Quick Link
          </Title>
          <Link to="/" style={{ color: '#ffffff', display: 'block', marginBottom: '10px' }}>Home</Link>
          <Link to="/Galeri" style={{ color: '#ffffff', display: 'block', marginBottom: '10px' }}>Galeri</Link>
          <Link to="/Order" style={{ color: '#ffffff', display: 'block', marginBottom: '10px' }}>Order</Link>
          <Link to="/about" style={{ color: '#ffffff', display: 'block', marginBottom: '10px' }}>Tentang Kami</Link>
        </Col>
        <Col xs={24} sm={12} md={4} style={{ textAlign: 'left' }}>
          <Title level={5} style={{ color: '#ffffff' }}>
            Hubungi kami
          </Title>
          <div style={{ color: '#ffffff', marginBottom: '10px' }}>
            <PhoneOutlined style={{ marginRight: '8px' }} />
            <Link to="tel:+628123456789" style={{ color: '#ffffff' }}>+62 812-3456-789</Link>
          </div>
          <div style={{ color: '#ffffff', marginBottom: '10px' }}>
            <MailOutlined style={{ marginRight: '8px' }} />
            <Link to="mailto:sepeda@bluebike.com" style={{ color: '#ffffff' }}>sepeda@bluebike.com</Link>
          </div>
        </Col>
        <Col xs={24} sm={12} md={6} style={{ textAlign: 'center' }}>
          <Title level={5} style={{ color: '#ffffff' }}>
            Lokasi Kami
          </Title>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31674.861547152395!2d110.049832!3d-7.084467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e706d08dfaff53b%3A0x48ce8cfaa12bd34b!2sSukorejo%2C%20Kendal%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1725191401054!5m2!1sen!2sid"
            width="90%"
            height="150"
            style={{ border: '0', borderRadius: '8px' }}
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
            title="Lokasi Sukorejo, Kendal Regency"
          ></iframe>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
