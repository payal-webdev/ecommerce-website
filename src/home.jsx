import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import background from "./assets/background.png";
import { useEffect } from "react";


function Home() {

    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    
    
    function handleSearch() {
      axios.get(`https://dummyjson.com/products/search?q=${search}`)
    .then((response) => {
      console.log(response.data.products);
    })
    .catch((error) => {
      console.log(error);
    });
  }

    useEffect(() => {
  axios
    .get("https://dummyjson.com/products")
    .then((response) => {
      setProducts(response.data.products.slice(0, 4));
    })
    .catch((error) => {
      console.log(error);
    });
}, [] );
    
    
return (
    <div>
        <h1>My E-Commerce Website</h1>
    <nav>

        <Link to="/">Logo   |  </Link>

        <Link to="/">Home    |  </Link>

        <Link to="/products">Products        |   </Link>

        <Link to="/categories">Categories        </Link>

        |<input type="text" placeholder="Search products..." value={search}
          onChange={(e) => setSearch(e.target.value)}/>

       <button onClick={handleSearch}>Search</button>|

        <Link to="/cart">Cart                |     </Link>

        <Link to="/wishlist">Wishlist        |    </Link>

        <Link to="/login">Login              |     </Link>

        <Link to="/registration">Registration       |     </Link>

      </nav>
      <br/>
      <div className="hero"  style={{ backgroundImage: `url(${background})` }}>
        <h1>welcome to our shop</h1>
        <p>shop your favrioute products</p>
        <button>shop now</button>
      </div>
      
  <div className="categories-section">
  <h2>Shop By Category</h2>

  <div className="category-box">
    <div>
      <h3>Beauty</h3>
      <p>Explore Beauty Products</p>
    </div>

    <div>
      <h3>Fragrances</h3>
      <p>Explore Fragrances</p>
    </div>

    <div>
      <h3>Furniture</h3>
      <p>Explore Furniture</p>
    </div>

    <div>
      <h3>Groceries</h3>
      <p>Explore Groceries</p>
    </div>
  </div>

  <Link to="/categories">View All Categories</Link>
</div>

<div className="products-section">
  <h2>Featured Products</h2>

  <div className="product-box">
    {products.map((product) => (
      <div key={product.id}>
        <img
          src={product.thumbnail}
          alt={product.title}
          width="150"
        />

        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>

        <button>Add to Cart</button>
      </div>
    ))}
  </div>
<Link to="/products">View All Products</Link>
 </div>


 <div className="why-section">
  <h2>Why Choose Us</h2>

  <div className="why-box">

    <div>
      <h3>🚚 Fast Delivery</h3>
      <p>We provide fast and reliable delivery.</p>
    </div>

    <div>
      <h3>🔒 Secure Payment</h3>
      <p>Your payment information is safe and secure.</p>
    </div>

    <div>
      <h3>⭐ Quality Products</h3>
      <p>We provide quality products at the best price.</p>
    </div>

    <div>
      <h3>💬 24/7 Support</h3>
      <p>Our support team is always ready to help you.</p>
    </div>

  </div>
</div>

</div>
    
  );
}

export default Home;