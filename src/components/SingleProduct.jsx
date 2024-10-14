import { IoMdClose } from "react-icons/io";

const SingleProduct = ({ name, price, rating, imgURL, onClose }) => {
  return (
    <main className="px-10 flex flex-col md:flex-row gap-6 p-6 border rounded-lg shadow-lg mt-10 relative">
      <button
        className="p-1 text-xl font-bold absolute right-[10%] bg-slate-200 rounded-sm"
        onClick={onClose} // Call the onClose function when the button is clicked
      >
        <IoMdClose />
      </button>

      <img src={imgURL} alt={name} className="w-1/3 rounded-lg" />
      <div className="flex flex-col space-y-4">
        <h3 className="text-3xl font-bold">{name}</h3>

        <p className="text-xl text-gray-500">{price}</p>
        <p className="text-lg text-yellow-500">Rating: {rating}</p>
        <p className="text-md text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti
          porro tempora exercitationem, sapiente corporis. Officia facilis qui,
          dolores assumenda amet, minima rem provident eaque debitis voluptatem
          nemo sit eius.
        </p>
      </div>
    </main>
  );
};

export default SingleProduct;
