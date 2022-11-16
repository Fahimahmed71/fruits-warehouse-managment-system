import React from "react";
import { MdDelete } from "react-icons/md";
import useProductsGETAPI from "../../../../../hooks/useProductsGETAPI/useProductsGETAPI";

const AllProductsBody = ({ products, setProduct }) => {
  const { name, cost, tex, warehouse, img, unite, total } = products;
  const [product] = useProductsGETAPI();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure");
    if (proceed) {
      const url = `https://warehouse-managment-system-production.up.railway.app/products/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remain = product.filter((products) => products._id !== id);
          setProduct(remain);
        });
    }
  };

  return (
    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 capitalize">
          <img className="w-14 h-10 object-cover" src={img} alt="" />
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 capitalize">
          {name}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 capitalize">
          ${cost}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 capitalize">
          {unite}Kg
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 capitalize">
          {tex}%
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 capitalize">
          ${total}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 capitalize">
          {warehouse}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 capitalize">
          <MdDelete
            onClick={() => handleDelete(products._id)}
            className="text-2xl text-red-400 hover:text-red-200 cursor-pointer"
          />
        </td>
      </tr>
    </tbody>
  );
};

export default AllProductsBody;
