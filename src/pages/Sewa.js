import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, Space, Select, notification } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const Sewa = () => {
  const [form] = Form.useForm(); // Create a form instance
  const [jumlahProduk, setJumlahProduk] = useState(1); // Default to 1
  const [pilihSepeda, setPilihSepeda] = useState(''); // User input for bike selection
  const [pilihan, setPilihan] = useState('');
  const navigate = useNavigate();

  const handleJumlahProdukChange = (value) => {
    setJumlahProduk(value);
  };

  const handlePilihSepedaChange = (e) => {
    setPilihSepeda(e.target.value);
  };

  const handlePilihanChange = (value) => {
    setPilihan(value);
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then(() => {
        if (pilihan) {
          navigate(`/${pilihan}`);
        } else {
          // Handle case where no option is selected
          notification.error({
            message: 'Peringatan',
            description: 'Silakan pilih opsi diantar atau dijemput.',
          });
        }
      })
      .catch(() => {
        // Handle validation failure
        notification.error({
          message: 'Peringatan',
          description: 'Silakan isi semua field dengan lengkap.',
        });
      });
  };

  return (
    <div style={styles.sewaContainer}>
      <h2 style={styles.sewaTitle}>Transaksi</h2>
      <Form
        name="sewa_form"
        layout="vertical"
        form={form}
        style={styles.sewaForm}
      >
        <Form.Item
          label="Pilih Sepeda"
          name="PilihSepeda"
          rules={[{ required: true, message: 'Silakan ketik nama sepeda!' }]}
          labelAlign="center"
        >
          <Input
            value={pilihSepeda}
            onChange={handlePilihSepedaChange}
            placeholder="Ketik nama sepeda"
            style={styles.centerText}
          />
        </Form.Item>

        <Form.Item
          label="Jumlah Produk"
          name="jumlahProduk"
          rules={[{ required: true, message: 'Silakan masukkan jumlah produk!' }]}
          labelAlign="center"
        >
          <InputNumber
            min={1}
            value={jumlahProduk}
            onChange={handleJumlahProdukChange}
            style={styles.centerText}
          />
        </Form.Item>

        <Form.Item
          label="Pilihan"
          name="pilihan"
          rules={[{ required: true, message: 'Silakan pilih opsi!' }]}
          labelAlign="center"
        >
          <Select
            placeholder="Pilih opsi"
            onChange={handlePilihanChange}
            style={styles.centerText}
          >
            <Option value="diantar">Diantar</Option>
            <Option value="dijemput">Dijemput</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Space style={styles.sewaButtons}>
            <Button
              type="primary"
              icon={<ArrowRightOutlined />}
              style={styles.button}
              onClick={handleSubmit}
            >
              Lanjutkan
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

const styles = {
  sewaContainer: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '40px',
    backgroundColor: '#B0E0E6',
    borderRadius: '10px',
  },
  sewaTitle: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
  },
  sewaForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  centerText: {
    textAlign: 'center',
  },
  sewaButtons: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
  },
};

export default Sewa;
