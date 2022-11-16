import React from "react";
import useProductsGETAPI from "../../../../hooks/useProductsGETAPI/useProductsGETAPI";
import StockProductBody from "./StockProductBody/StockProductBody";

const StockProduct = () => {
  const [product] = useProductsGETAPI();

  return (
    <section className="mt-20">
      <h1 className="mb-3 text-lg font-medium text-red-400 ">Today Stock</h1>

      <div className="overflow-x-auto border border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead>
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Image
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Product
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Quantity
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Grand Total
              </th>
            </tr>
          </thead>
          {product.slice(0, 5).map((products) => (
            <StockProductBody products={products} key={products._id} />
          ))}
        </table>
      </div>
    </section>
  );
};

export default StockProduct;
