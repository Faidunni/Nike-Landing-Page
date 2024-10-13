import React from "react";
import { Link } from "react-router-dom";
import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = () => {
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

      {/* Display grid of products */}
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product, index) => (
          <Link to={`/product/${index}`} key={product.name}>
            <PopularProductCard {...product} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
