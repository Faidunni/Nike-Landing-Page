import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../constants";
import SingleProduct from "../components/SingleProduct";

const SingleProductPage = () => {
  const { productId } = useParams(); // Extract productId from the URL
  const product = products[productId]; // Find the product based on the productId

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold">Product Details</h2>
      <SingleProduct {...product} />
    </div>
  );
};

export default SingleProductPage;
