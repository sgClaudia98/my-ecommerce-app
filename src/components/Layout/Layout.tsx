import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom'; // Make sure to install react-router-dom if you haven't
import { ShoppingCartOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { MenuItemType } from 'antd/es/menu/interface';

const { Header, Content, Footer } = Layout;

const AppLayout: React.FC = () => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header >
      <div className='flex items-center justify-between'>
        <div className="text-2xl font-bold text-white">My E-Commerce</div>
        <Menu
          theme="dark"
          mode="horizontal"
          className='flex justify-end list-none'
          defaultSelectedKeys={['1']}
          style={{ flex: 1, minWidth: 0 }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/home" className="text-white">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
              <Link to="/cart" className="text-white">Cart</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link to="/profile" className="text-white">Profile</Link>
            </Menu.Item>
          </Menu>
          </div>
      </Header>
      
      <Content style={{ padding: '0 48px' }}>
        <Outlet />
      </Content>
      <Footer className="text-center">©2024 My E-Commerce. All rights reserved.</Footer>
    </Layout>
  );
};

export default AppLayout;
