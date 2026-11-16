import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  return (
    <div>
      <h1>My Cart</h1>

      {cart.map((product) => (
        <div key={product.id}>
          <img
            src={product.thumbnail}
            alt={product.title}
            width="150"
          />

          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;