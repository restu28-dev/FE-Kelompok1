import React from 'react';
import { Carousel, Card, Row, Col, Rate } from 'antd';

// Sample Galeri data
const GaleriData = [
  { id: 1, title: 'desain yang mewah', imageUrl: 'galeri.jpg' },
  { id: 2, title: 'dengan suara yang tidak berisik', imageUrl: 'galeri2.jpeg' },
  { id: 3, title: 'nyaman saat di pakai', imageUrl: 'galeri3.jpg' },
  { id: 4, title: 'bisa untuk berboncengan', imageUrl: 'boncengan.webp' },
  { id: 5, title: 'Fasilitas yang memadai', imageUrl: 'fasilitasmemadai.jpeg' },
  { id: 6, title: 'berbagai macam jenis sepeda', imageUrl: 'bermacamsepeda.jpeg' },
];

// Sample Comment data
const Comments = [
  { id: 1, username: 'Verrel Bramasta', text: 'Sepeda Listriknya bersih helmnya juga wangi best banget sewa di Bluebike terbaikk', rating: 4 },
  { id: 2, username: 'Al-Ghazali', text: 'ada kendala sedikit langsung di respon dengan baik. Aku saranin kalau mau rental disini aja, udah murah pelayannannya baik. jadi nyaman boncengan sama allysa', rating: 4 },
  { id: 3, username: 'Raffi Ahmad', text: 'Wow, sewa sepeda di Bluebike itu top mantap is the best! 🚲✨ Gak hanya sepedanya yang keren, tapi pelayanan di sini juga juara. Rayanza dan Rafathar suka banget, dan lihat nih, Lily digendong sama Mamah Gigi sambil ketawa ketawa naik sepeda! Haha, seru banget deh, kalian harus coba sendiri!', rating: 5 },
  { id: 4, username: 'Ellon Musk', text: 'Sewa sepeda di Bluebike? Ini luar biasa! 🚴‍♂️💫 Mereka menggabungkan teknologi mutakhir dengan desain yang canggih. Fasilitas yang disediakan sangat memadai, dan efisiensinya benar-benar mengesankan. Jika Anda mencari cara inovatif dan praktis untuk berkeliling, Bluebike adalah pilihan yang tepat. Jangan ragu untuk mencobanya dan rasakan sendiri pengalaman yang luar biasa ini!', rating: 4 },
  { id: 5, username: 'Selamat dr ramalan kiamat 2012', text: 'Sepedanya tidak kokoh, buat boncengan sama istri saya malah ambrol dan saya di duruh ganti rugi', rating: 1 },
];

const Galeri = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* Introductory Card */}
      <Card style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="galeri7.jpg"
            alt="Company"
            style={{ width: '50%', borderRadius: '8px' }}
          />
          <div style={{ paddingLeft: '16px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Rental Sepeda Listrik Sukorejo</h2>
            <p style={{ fontSize: '16px', marginTop: '8px' }}>
              Kami adalah penyedia jasa sewa motor yang berlokasi di Semarang. Kami hadir untuk Anda yang sedang membutuhkan alat transportasi khususnya berupa sepeda listrik. Dengan adanya kami, bermain Anda akan terasa lebih menyenangkan.
              Kami juga siap melayani antar jemput sepeda listrik di mana tempat Anda berada, selama masih di dalam Sukorejo yang penting bukan di luar angkasa 🙂
            </p>
          </div>
        </div>
      </Card>

      {/* Comment Carousel */}
      <Carousel autoplay style={{ marginBottom: '20px' }}>
        {Comments.map(comment => (
          <div key={comment.id}>
            <Card
              hoverable
              style={{ maxWidth: '80%', margin: '0 auto', padding: '20px', backgroundColor: '#e6f7ff' }} // Apply background color here
            >
              <Card.Meta 
                title={<div style={{ fontWeight: 'bold' }}>{comment.username}</div>}
                description={
                  <div>
                    <p>{comment.text}</p>
                    <Rate disabled defaultValue={comment.rating} />
                  </div>
                }
              />
            </Card>
          </div>
        ))}
      </Carousel>

      {/* Grid of Photo Cards */}
      <Row gutter={[16, 16]}>
        {GaleriData.map(photo => (
          <Col xs={24} md={8} key={photo.id}>
            <Card
              hoverable
              cover={<img alt={photo.title} src={photo.imageUrl} style={{ height: '200px', objectFit: 'cover' }} />}
              style={{ backgroundColor: '#e6f7ff' }} // Apply background color here
            >
              <Card.Meta title={photo.title} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Galeri;
