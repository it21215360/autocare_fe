import React, { useState, useEffect } from 'react';

function DeliveryConfirm() {
  const [order, setOrder] = useState({});

  useEffect(() => {
    // This is where you would typically make an API call to retrieve the order details
    // In this example, we're just hardcoding some sample data
    const sampleOrder = {
      id: 123,
      date: '2023-04-17T09:30:00.000Z',
      items: [
        { id: 1, name: 'Product A', price: 9.99 },
        { id: 2, name: 'Product B', price: 14.99 },
      ],
      total: 24.98,
    };
    setOrder(sampleOrder);
  }, []);

  return (
    <div>
      <h1>Order Confirmation</h1>
      <p>Thank you for your order! Here are your order details:</p>
      <p>Order ID: {order.id}</p>
      <p>Order Date: {new Date(order.date).toLocaleString()}</p>
      <ul>
        {order.items &&
          order.items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
      </ul>
      <p>Total: ${order.total.toFixed(2)}</p>
    </div>
  );
}

export default DeliveryConfirm;
