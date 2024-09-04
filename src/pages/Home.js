import React from 'react';
import { Layout, Row, Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom

const { Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout>
      <Content
        style={{
          padding: '50px 50px',
          backgroundImage: 'url(kotatua.jpg)', // Path ke gambar latar belakang
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh'
        }}
      >
        <Row justify="center" align="middle" style={{ textAlign: 'center' }}>
          <Col span={12}>
            <h1 style={{ fontSize: '36px', color: '#fff' }}>
              Rental sepeda listrik Terpercaya Di Daerah Sukorejo
            </h1>
            <p style={{ fontSize: '18px', marginBottom: '40px', color: '#fff' }}>
              Cari tempat sewa/rental sepeda listrik yang nyaman, terjangkau, berkualitas dan terpercaya.
              Disinilah tempatnya!
            </p>
            {/* Tombol Selengkapnya dengan Link ke halaman About */}
            <Button type="primary" size="large">
              <Link to="/about">Selengkapnya</Link>
            </Button>
          </Col>
          <Col span={8}>
            <img
              src="logonya.png"  // Path ke gambar logo
              alt="Logo"
              style={{
                width: '400px',     // Ukuran gambar
                height: '400px',    // Ukuran gambar
                borderRadius: '50%' // Membuat gambar bundar
              }}
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{ marginTop: '50px' }}>
          <Col span={8}>
            <Card title="Harga Terjangkau" bordered={false}>
              <p>sewa sepeda mulai dari Rp42.000</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Lokasi Strategis" bordered={false}>
              <p>dekat dengan bundaran sukorejo, tiangu,kebumen</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Antar Jemput" bordered={false}>
              <p>Siap antar dan jemput unit motor ke lokasi Anda</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Bersih Terawat" bordered={false}>
              <p>Rutin service agar unit sepeda selalu terjaga performa serta kebersihannya</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Banyak Pilihan" bordered={false}>
              <p>Anda bisa memilih beragam jenis sepeda sesuai dengan selera Anda</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Good Service" bordered={false}>
              <p>Dapatkan pelayanan cepat dan handal karena kepuasan Anda menjadi tujuan kami.</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Booking Mudah" bordered={false}>
              <p>Booking/rental mudah via website atau langsung menghubungi Customer Service kami.</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Tanpa Suara" bordered={false}>
              <p>Selain tanpa polusi udara, unit motor listrik Bluebike juga tanpa polusi suara.</p>
            </Card>
          </Col>
        </Row>
      </Content>

      <Footer style={{ textAlign: 'center', backgroundColor: '#f0f2f5' }}>
        {/* Footer kosong tanpa logo Bluebike */}
      </Footer>
    </Layout>
  );
};

export default Home;
