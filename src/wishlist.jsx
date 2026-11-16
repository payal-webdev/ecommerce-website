import { useEffect, useState } from "react";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(savedWishlist);
  }, []);

  return (
    <div>
      <h1>My Wishlist</h1>

      {wishlist.map((product) => (
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

export default Wishlist;