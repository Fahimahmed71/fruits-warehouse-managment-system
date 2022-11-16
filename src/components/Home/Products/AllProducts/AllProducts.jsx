import React from "react";
import useProductsGETAPI from "../../../../hooks/useProductsGETAPI/useProductsGETAPI";
import Nav from "../../../Nav/Nav";
import AllProductsBody from "./AllProductsBody/AllProductsBody";

const AllProducts = () => {
  const [product, setProduct] = useProductsGETAPI();

  return (
    <section className="flex gap-2">
      <Nav />

      <dl className="mt-10 w-screen container mx-auto">
        <h1 className="text-red-400 text-center font-medium text-3xl underline uppercase tracking-widest">
          All Product
        </h1>

        <div className="overflow-x-auto border border-gray-200 mt-5">
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
                  Price
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Quantity
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Tex
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Grand Total
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Warehouse
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"></th>
              </tr>
            </thead>
            {product.map((products) => (
              <AllProductsBody
                products={products}
                key={products._id}
                setProduct={setProduct}
              />
            ))}
          </table>
        </div>
      </dl>
    </section>
  );
};

export default AllProducts;
