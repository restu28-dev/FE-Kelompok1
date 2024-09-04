import React from 'react';
import { Layout, Row, Col, Card, Typography, Image } from 'antd';

const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '70px', backgroundColor: '#f0f2f5' }}>
        <Row justify="center" style={{ marginBottom: '30px' }}>
          <Col span={12}>
            <Title level={2} style={{ textAlign: 'center' }}>Tentang Bluebike</Title>
            <Paragraph style={{ textAlign: 'center', fontSize: '18px', color: '#555' }}>
              Selamat datang di Bluebike, penyedia sewa sepeda listrik terpercaya dan terdepan di daerah Sukorejo. Kami berkomitmen untuk menyediakan sepeda listrik berkualitas tinggi dengan layanan terbaik untuk memenuhi kebutuhan transportasi Anda.
            </Paragraph>
          </Col>
        </Row>

        <Row gutter={16} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Card
              bordered={false}
              cover={
                <Image
                  src="kualitasterjamin.jpg"
                  alt="Quality"
                  preview={false}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
              }
            >
              <Title level={4}>Kualitas Terjamin</Title>
              <Paragraph>
                Sepeda listrik kami dirancang dengan teknologi terbaru dan diuji untuk memastikan performa optimal serta keandalan yang tinggi.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              bordered={false}
              cover={
                <Image
                  src="pelayanantop.jpg"
                  alt="Service"
                  preview={false}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
              }
            >
              <Title level={4}>Pelayanan Terbaik</Title>
              <Paragraph>
                Kami menyediakan layanan pelanggan yang ramah dan responsif. Tim kami siap membantu Anda dengan segala kebutuhan sewa sepeda listrik.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              bordered={false}
              cover={
                <Image
                  src="bundaran.jpg"
                  alt="Location"
                  preview={false}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
              }
            >
              <Title level={4}>Lokasi Strategis</Title>
              <Paragraph>
                Tempat sewa kami terletak di lokasi strategis, memudahkan Anda untuk mengakses sepeda listrik kapan saja dan di mana saja.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        <Row justify="center" style={{ marginTop: '50px' }}>
          <Col span={16}>
            <Card
              bordered={false}
              style={{ textAlign: 'center' }}
            >
              <Title level={3}>Mengapa Memilih Bluebike?</Title>
              <Paragraph style={{ fontSize: '16px', color: '#666' }}>
                Bluebike adalah pilihan utama untuk sewa sepeda listrik karena kami menawarkan kualitas terbaik, harga yang kompetitif, dan layanan pelanggan yang luar biasa. Cobalah sekarang dan nikmati pengalaman berkendara yang berbeda dengan sepeda listrik Bluebike!
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default About;
