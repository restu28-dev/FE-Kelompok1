import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Order from './pages/Order';
import Galeri from './pages/Galeri';
import Login from './pages/login';
import User from './pages/User';
import Register from './pages/Register';
import Sewa from './pages/Sewa';
import Diantar from './pages/Diantar';
import Dijemput from './pages/Dijemput';
import Akun from './pages/Akun';
// import pesanan from './pages/Pesanan';

function App() {
  return (
    <Router>
      <Layout>
        <AppHeader />
        <Layout.Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/order" element={<Order />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/login" element={<Login />} />
            <Route path="/User" element={<User />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Sewa" element={<Sewa />} />
            <Route path="/Diantar" element={<Diantar />} />
            <Route path="/Dijemput" element={<Dijemput />} />
            <Route path="/Akun" element={<Akun />} /> 
            {/* <Route path="/Pesanan" element={<pesanan />} /> */}
          </Routes>
        </Layout.Content>
        <AppFooter />
      </Layout>
    </Router>
  );
}

export default App;