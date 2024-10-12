import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { Product } from '../types/Product'; // Assuming you have a Product type defined
import { products } from '../mockData/product';

const { Title } = Typography;

// Sample product data (you can replace this with actual data from your API)
const HomePage: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Welcome to our store</Title>
      <Row gutter={16}>
        {products.map(product => (
          <Col span={8} key={product.id}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.image} />}
            >
              <Card.Meta title={product.name} description={`$${product.price}`} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
