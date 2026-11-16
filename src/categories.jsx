import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (

  
    <div  className="categories-container">
      
   {categories.map((category) => (

        <div className="categories-card"  key={category.slug}>

          <Link to={`/category/${category.slug}`}>
            {category.name}
          </Link>

        </div>

      ))}

    </div>
  );
}

export default Categories;