import PopularProductCard from "../components/PopularProductCard";
import { products, singleProduct } from "../constants";
import { useState } from "react";
import SingleProduct from "../components/SingleProduct";

const PopularProducts = () => {
  // use state
  const [singleProduct, setSingleProduct] = useState(null);

  const handleProductClick = (product) => {
    setSingleProduct(product);
  };

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Best <span className="text-coral-red">Seller</span> Items
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Elevate your everyday essentials with our premium range. Uncover
          unmatched craftsmanship, innovation, and timeless elegance.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ">
        {products.map((product) => (
          <div onClick={() => handleProductClick(product)}>
            <PopularProductCard key={product.name} {...product} />
          </div>
        ))}
      </div>

      {/* display single products on click */}
      {singleProduct && <SingleProduct {...singleProduct} />}
    </section>
  );
};

export default PopularProducts;
