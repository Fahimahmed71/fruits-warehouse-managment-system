import React from "react";

const Product = ({ product, handleProduct }) => {
  const { img, name, cost } = product;

  return (
    <section className="shadow-xl p-2 rounded-lg">
      <img
        alt="img"
        src={img}
        className="h-56 w-full object-cover rounded-lg"
      />

      <h3 className="mt-3 text-lg font-bold capitalize text-center text-red-400">
        {name}
      </h3>

      <p className="mt-2 text-base text-gray-700 text-center font-medium">
        ${cost}
      </p>

      <button
        onClick={() => handleProduct(product)}
        type="button"
        className="mt-4 block w-full rounded-sm bg-red-500 p-2 text-sm font-medium text-white"
      >
        Add to Cart
      </button>
    </section>
  );
};

export default Product;
