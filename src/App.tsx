import { Routes } from './routing/Routes';
import { CartProvider } from './contexts/cartContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const basename = process.env.NODE_ENV === 'development' ? '/' : '/my-ecommerce-app';
  console.log(basename, "BASENAME")
  return (
    <CartProvider>
      <BrowserRouter basename={basename}>
        <Routes />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
