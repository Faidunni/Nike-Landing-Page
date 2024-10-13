const SingleProduct = ({ name, price, rating, desc, imgURL }) => {
  return (
    <section className="flex flex-col md:flex-row gap-6 p-6 border rounded-lg shadow-lg mt-6">
      <img src={imgURL} alt={name} className="w-1/3 rounded-lg" />
      <div className="flex flex-col space-y-4">
        <h3 className="text-3xl font-bold">{name}</h3>
        <p className="text-xl text-gray-500">{price}</p>
        <p className="text-lg text-yellow-500">Rating: {rating}</p>
        <p className="text-md text-gray-700">{desc}</p>
      </div>
    </section>
  );
};

export default SingleProduct;
