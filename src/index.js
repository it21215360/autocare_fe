import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export { default as OrderForm } from './Order/Order_details';
export { default as CardForm } from './Order/Card_details';
export { default as AddtoCart } from './Order/Cart';
export { default as ProductPage} from './Order/Product';
export { default as  ReturnProduct} from './Order/Return_product';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
