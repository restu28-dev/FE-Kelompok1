import React, { useState } from 'react';
import { Layout, Card, Typography, Button, Modal, Table, Tag, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;
const { Title, Text } = Typography;

const dummyUser = {
  username: 'Limbad',
  profilePicture: 'limbad.jpeg',
};

const User = () => {
  const [showOrderHistory, setShowOrderHistory] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [orderHistory, setOrderHistory] = useState([
    { id: 1, rentalDate: '2024-08-18', duration: 4, order: '2024-08-20', product: 'Viar u3', status: 'Selesai' },
    { id: 2, rentalDate: '2024-04-05', duration: 2, order: '2024-08-10', product: 'Viar Caraka', status: 'Proses' },
    { id: 3, rentalDate: '2024-07-05', duration: 2, order: '2024-08-10', product: 'Viar Caraka', status: 'Selesai' },
  ]);
  const navigate = useNavigate();

  const handleViewOrderHistory = () => {
    setShowOrderHistory(true);
  };

  const handleCloseOrderHistory = () => {
    setShowOrderHistory(false);
  };

  const handleManageAccount = () => {
    navigate('/akun');
  };

  const handleEditStatus = (order) => {
    setSelectedOrder(order);
    setIsEditModalVisible(true);
  };

  const handleSaveStatus = () => {
    if (selectedOrder) {
      const updatedOrders = orderHistory.map(order =>
        order.id === selectedOrder.id ? { ...order, status: 'Pesanan dibatalkan' } : order
      );
      setOrderHistory(updatedOrders);
      message.success('Status pesanan berhasil diubah menjadi Pesanan dibatalkan.');
      setIsEditModalVisible(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditModalVisible(false);
  };

  const tableData = orderHistory.map((item, index) => ({
    key: index + 1,
    id: item.id,
    rentalDate: item.rentalDate,
    duration: item.duration,
    order: item.order,
    product: item.product,
    status: item.status,
  }));

  const columns = [
    {
      title: 'No',
      dataIndex: 'key',
      key: 'key',
      render: (text, record, index) => index + 1,
      width: 50,
    },
    {
      title: 'ID Pemesan',
      dataIndex: 'id',
      key: 'id',
      width: 120,
    },
    {
      title: 'Tanggal Sewa',
      dataIndex: 'rentalDate',
      key: 'rentalDate',
      width: 150,
    },
    {
      title: 'Durasi (per jam)',
      dataIndex: 'duration',
      key: 'duration',
      width: 150,
    },
    {
      title: 'Pemesanan',
      dataIndex: 'order',
      key: 'order',
      width: 150,
    },
    {
      title: 'Nama Produk',
      dataIndex: 'product',
      key: 'product',
      width: 200,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status, record) => {
        let color;
        switch (status) {
          case 'Selesai':
            color = 'green';
            break;
          case 'Dikirim':
            color = 'blue';
            break;
          case 'Proses':
            color = 'orange';
            break;
          case 'Dalam Perjalanan':
            color = 'purple';
            break;
          case 'Pesanan dibatalkan':
            color = 'red';
            break;
          default:
            color = 'grey';
        }
        return (
          <div>
            <Tag color={color} style={{ marginBottom: '5px' }}>{status}</Tag>
            {status !== 'Selesai' && status !== 'Pesanan dibatalkan' && (
              <Button type="link" onClick={() => handleEditStatus(record)}>
                Ubah
              </Button>
            )}
          </div>
        );
      },
      width: 150,
    },
  ];

  return (
    <Layout>
      <Content style={{ padding: '50px', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
        <Card style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <Title level={2}>Selamat Datang di BlueBike Limbad!</Title>
          <div>
            <div style={{ marginBottom: '20px' }}>
              <img
                src={dummyUser.profilePicture}
                alt="Profil"
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  border: '4px solid #1890ff',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            </div>
            <Text style={{ fontSize: '18px', display: 'block' }}>
              Nama: {dummyUser.username}
            </Text>
            <div style={{ marginTop: '20px' }}>
              <Button type="primary" size="large" style={{ marginRight: '10px' }} onClick={handleManageAccount}>
                Kelola Akun
              </Button>
              <Button type="default" size="large" onClick={handleViewOrderHistory}>
                Riwayat Pesanan
              </Button>
            </div>
          </div>
        </Card>
      </Content>

      <Modal
        title="Riwayat Pesanan"
        visible={showOrderHistory}
        onCancel={handleCloseOrderHistory}
        footer={null}
        width={800}
      >
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={false}
          bordered
          scroll={{ x: 'max-content' }}
          style={{ wordBreak: 'break-word' }}
        />
      </Modal>

      <Modal
        title="Ubah Status Pesanan"
        visible={isEditModalVisible}
        onOk={handleSaveStatus}
        onCancel={handleCancelEdit}
        okText="Batalkan"
        cancelText="Batal"
      >
        <p>Apakah Anda yakin ingin membatalkan pesanan?</p>
      </Modal>
    </Layout>
  );
};

export default User;
