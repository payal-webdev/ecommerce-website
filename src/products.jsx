import { useEffect, useState } from "react";
import axios from "axios";

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios.get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);


  function addToCart(product) {

  const oldCart = JSON.parse(localStorage.getItem("cart")) || [];

  oldCart.push(product);

  localStorage.setItem("cart", JSON.stringify(oldCart));

}
function addToWishlist(product) {
  const oldWishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

  oldWishlist.push(product);

  localStorage.setItem(
    "wishlist",
    JSON.stringify(oldWishlist)
  );
}
return (
    <div className="products-container">

     
    
        {products.map((product) => (
        <div  className="product-card" key={product.id}>

          <img
            src={product.thumbnail}
            alt={product.title}
            width="150"
          />

          <h3>{product.title}</h3>

          <p>Category: {product.category}</p>

          <p>Price: ${product.price}</p>

          <button onClick={() => addToCart(product)}>
  Add to Cart
</button>
<button onClick={() => addToWishlist(product)}>
  ❤️
</button>

        </div>
      ))}

    </div>
  );
}

export default Products;