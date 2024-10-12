import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed for routing

const ErrorPage: React.FC = () => {
  return (
    <Result
      status="error"
      title="Something Went Wrong"
      subTitle="Sorry, an unexpected error has occurred. Please try again later."
      extra={
        <Link to="/">
          <Button type="primary">Back to Home</Button>
        </Link>
      }
    />
  );
};

export default ErrorPage;
