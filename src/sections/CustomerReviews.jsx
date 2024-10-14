import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container ">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        {" "}
        What Our <span className="text-coral-red">Customers</span> Says
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuie reviews from our customers who have experienced our
        products. We are proud to have a 5 star rating.
      </p>
      <div className="mt-24 flex flex-2 justify-evenly items-center mx:lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
