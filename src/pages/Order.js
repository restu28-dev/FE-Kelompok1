import React, { useState } from 'react';
import { Card, Button, Row, Col, Modal, Carousel, Rate, Tag, notification } from 'antd'; // Import notification
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

const Order = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    image: '',
    description: '',
    price: '',
    features: [],
    reviews: [],
    stock: '',
    status: '',
  });
  const navigate = useNavigate();

  const styles = {
    orderContainer: {
      padding: '40px',
    },
    orderH2: {
      fontSize: '36px',
      color: '#003366',
      textAlign: 'center',
      marginBottom: '10px',
    },
    orderH3: {
      fontSize: '28px',
      color: '#0055a5',
      textAlign: 'center',
      marginBottom: '30px',
    },
    bikeCard: {
      borderRadius: '8px',
      backgroundColor: '#e6f7ff',
      textAlign: 'center',
      padding: '10px',
      marginBottom: '20px',
    },
    bikeImage: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
      marginBottom: '10px',
      borderRadius: '8px',
      cursor: 'pointer',
    },
    modalImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      marginBottom: '15px',
    },
    modalButton: {
      marginTop: '20px',
      backgroundColor: '#003366',
      borderColor: '#003366',
      borderRadius: '8px',
    },
    pricingRowCol: {
      textAlign: 'center',
    },
    benefitsSection: {
      marginBottom: '60px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    benefitsText: {
      fontSize: '18px',
      marginBottom: '20px',
    },
    benefitsImage: {
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      borderRadius: '8px',
    },
    orderImage: {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
      borderRadius: '8px',
    },
    orderSection: {
      padding: '50px',
      backgroundImage: 'url("kotatua.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      textAlign: 'center',
      color: '#ffffff',
    },
    requirementsSection: {
      padding: '40px',
      backgroundColor: '#e6f7ff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    requirementsHeader: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#000000',
      textAlign: 'center',
    },
    facilityContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    facilityRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '20px',
      width: '100%',
      maxWidth: '1200px',
    },
    facilityCard: {
      flex: '1 1 calc(25% - 20px)', // Ensures equal width with space for gap
      height: '150px',
      borderRadius: '8px',
      backgroundColor: '#e6f7ff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      padding: '20px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize: '16px',
    },
    carouselImage: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
    },
  };

  const bikeData = [
    {
      title: 'Viar U3',
      image: 'viaru3.jpg',
      description:
        'Viar U3 adalah sepeda listrik yang efisien dan mudah digunakan, cocok untuk perjalanan dalam kota.',
      price: 'Rp 10.000',
      features: ['Ringan dan kompak', 'Baterai tahan lama'],
      reviews: [
        { username: 'Ali', rating: 4, comment: 'Nyaman digunakan di kota.' },
        { username: 'Budi', rating: 5, comment: 'Hemat energi.' },
      ],
      stock: '5 unit',
      status: 'available',
    },
    {
      title: 'Lankeleisi G550',
      image: 'lankeleisi.jpg',
      description:
        'Lankeleisi G550 memiliki daya tahan baterai yang kuat dan performa yang tangguh di medan berat.',
      price: 'Rp 15.000',
      features: ['Performa tinggi', 'Kapasitas baterai besar'],
      reviews: [
        { username: 'Cici', rating: 5, comment: 'Cocok untuk perjalanan jauh.' },
        { username: 'Dedi', rating: 4, comment: 'Tangguh di medan berat.' },
      ],
      stock: '0 unit',
      status: 'stok habis',
    },
    {
      title: 'Exotic Groza X6',
      image: 'exotic-x6.jpg',
      description:
        'Exotic Groza X6 menawarkan desain modern dan kenyamanan maksimal selama perjalanan.',
      price: 'Rp 11.000',
      features: ['Desain modern', 'Kenyamanan berkendara'],
      reviews: [
        { username: 'Eka', rating: 4, comment: 'Stylish dan nyaman.' },
        { username: 'Fani', rating: 5, comment: 'Sangat cocok untuk perjalanan panjang.' },
      ],
      stock: '7 unit',
      status: 'available',
    },
    {
      title: 'Exotic Groza X7',
      image: 'exotic-x7.jpg',
      description:
        'Exotic Groza X7 adalah pilihan tepat bagi Anda yang mencari sepeda listrik dengan performa tinggi dan gaya.',
      price: 'Rp 10.000',
      features: ['Performa tinggi', 'Desain stylish'],
      reviews: [
        { username: 'Gita', rating: 5, comment: 'Performa sangat baik.' },
        { username: 'Hadi', rating: 4, comment: 'Desain yang menarik.' },
      ],
      stock: '13 unit',
      status: 'available',
    },
    {
      title: 'Uwinfly D7S',
      image: 'uwinfly.jpg',
      description:
        'Uwinfly D7S dikenal dengan keandalannya dan kemudahan penggunaan, ideal untuk pengguna pemula.',
      price: 'Rp 10.000',
      features: ['Mudah digunakan', 'Keandalan tinggi'],
      reviews: [
        { username: 'Ika', rating: 4, comment: 'Sangat baik untuk pemula.' },
        { username: 'Joni', rating: 5, comment: 'Hemat dan efisien.' },
      ],
      stock: '12 unit',
      status: 'available',
    },
    {
      title: 'United Dresden V1',
      image: 'united.jpg',
      description:
        'United Dresden V1 menggabungkan teknologi canggih dan desain elegan untuk pengalaman berkendara yang luar biasa.',
      price: 'Rp 12.000',
      features: ['Teknologi canggih', 'Desain elegan'],
      reviews: [
        { username: 'Kris', rating: 5, comment: 'Teknologi mutakhir.' },
        { username: 'Lia', rating: 4, comment: 'Desain yang sangat elegan.' },
      ],
      stock: '0 unit',
      status: 'stok habis',
    },
    {
      title: 'Viar Caraka',
      image: 'viar.jpg',
      description:
        'Viar Caraka adalah sepeda listrik serbaguna dengan fitur lengkap yang memastikan keamanan dan kenyamanan.',
      price: 'Rp 10.000',
      features: ['Fitur lengkap', 'Keamanan dan kenyamanan'],
      reviews: [
        { username: 'Mia', rating: 4, comment: 'Serbaguna dan aman.' },
        { username: 'Nana', rating: 5, comment: 'Kenyamanan ekstra saat berkendara.' },
      ],
      stock: '10 unit',
      status: 'available',
    },
  ];

  const facilitiesData = [
    { key: '1', icon: '🛡️', label: 'Dekker Sepeda' },
    { key: '2', icon: '🚴‍♂️', label: 'Helm sepeda' },
    { key: '3', icon: '⛈️', label: 'Jas Hujan' },
  ];

  const showModal = (bike) => {
    setModalContent(bike);
    setIsModalVisible(true);
  };

  const handleOrderClick = (bike) => {
    if (bike.status !== 'available') {
      notification.error({
        message: 'Tidak Bisa Disewa',
        description: `Sepeda ini tidak bisa disewa karena status '${bike.status}'.`,
      });
    } else {
      navigate('/sewa');
    }
  };

  const handleBikeClick = (bike) => {
    showModal(bike);
  };

  return (
    <div style={styles.orderContainer}>
      {/* Section 1: Best Offers */}
      <section style={styles.orderSection}>
        <h1 style={styles.orderH2}>Keunggulan</h1>
        <Row gutter={16} style={styles.pricingRowCol}>
          <Col span={24}>
            <div style={styles.facilityContainer}>
              <div style={styles.facilityRow}>
                <Card style={styles.facilityCard} hoverable>
                  <p>Layanan Pelanggan 24/7<br /></p>
                </Card>
                <Card style={styles.facilityCard} hoverable>
                  <p>Pemeliharaan Rutin<br /></p>
                </Card>
                <Card style={styles.facilityCard} hoverable>
                  <p>Stasiun pengisian mudah diakses<br /></p>
                </Card>
                <Card style={styles.facilityCard} hoverable>
                  <p>Pemesanan dan pelacakan mudah lewat ponsel<br /></p>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      {/* Section 2: Benefits */}
      <section style={styles.requirementsSection}>
        <h2 style={styles.requirementsHeader}>
          Berbagai fasilitas pendukung yang akan Anda dapatkan jika menyewa sepeda listrik di sini:
        </h2>
        <div style={styles.facilityContainer}>
          <div style={styles.facilityRow}>
            {facilitiesData.map((facility) => (
              <div key={facility.key} style={styles.facilityCard}>
                <div style={{ fontSize: '40px' }}>{facility.icon}</div>
                <div>{facility.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Bike List */}
      <section>
        <h2 style={styles.orderH2}>Kami memiliki berbagai jenis sepeda listrik</h2>
        <p style={{ textAlign: 'center', marginBottom: '30px' }}>
          Semua sepeda listrik yang kami sewakan telah melalui proses pengecekan rutin dan siap digunakan untuk perjalanan Anda.
        </p>
        <Row gutter={16}>
          {bikeData.map((bike, index) => (
            <Col span={8} key={index}>
              <Card
                style={styles.bikeCard}
                cover={
                  <img
                    alt={bike.title}
                    src={bike.image}
                    style={styles.bikeImage}
                    onClick={() => handleBikeClick(bike)}
                  />
                }
                hoverable
              >
                <Meta
                  title={bike.title}
                  description={
                    <>
                     <p>Stok: {bike.stock}</p>
                      <p>Harga: {bike.price}</p>
                      <p>
                        <Tag color={bike.status === 'available' ? 'green' : 'red'}>
                          {bike.status === 'available' ? '' : 'Stok Habis'}
                        </Tag>
                      </p>
                    </>
                  }
                />
                <Button
                  type="primary"
                  style={{ marginTop: '10px' }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent event from bubbling up to Col
                    handleOrderClick(bike); // Pass the bike data to handleOrderClick
                  }}
                  disabled={bike.status !== 'available'}
                >
                  {bike.status === 'available' ? 'Sewa Sekarang' : 'Stok Habis'}
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Modal for bike details */}
      <Modal
        title={modalContent.title}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <img src={modalContent.image} alt={modalContent.title} style={styles.modalImage} />
        <p>{modalContent.description}</p>
        <p>
          <strong>Harga:</strong> {modalContent.price}
        </p>
        <p>
          <strong>Keunggulan:</strong>
        </p>
        <ul>
          {modalContent.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <p>
          <strong>Komentar Pelanggan:</strong>
        </p>
        <Carousel autoplay>
          {modalContent.reviews.map((review, index) => (
            <div key={index}>
              <p>
                <strong>{review.username}</strong> <Rate value={review.rating} disabled />
              </p>
              <p>{review.comment}</p>
            </div>
          ))}
        </Carousel>
      </Modal>
    </div>
  );
};

export default Order;
