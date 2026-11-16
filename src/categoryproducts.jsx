import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CategoryProducts() {

  const { slug } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios
      .get(`https://dummyjson.com/products/category/${slug}`)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [slug]);

  return (
    <div  className="categorypro">

      

      {products.map((product) => (

        <div className="categoryprods" key={product.id}>

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

export default CategoryProducts;