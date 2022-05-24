import { useState } from "react";

export default function Offers() {
  const [items] = useState([
    { title: "Der Goldfisch", price: 21.99 },
    { title: "Impression Sunrise", price: 34.99 },
    { title: "Convergence", price: 12.99 },
  ]);

  return (
    <div>
      <h3>Latest Offers</h3>
      <div className='offers'>
        {items.map((item) => (
          <div key={item.title}>
            <img src='https://via.placeholder.com/350x200' alt='product' />
            <h4>{item.title}</h4>
            <p>BGN{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
