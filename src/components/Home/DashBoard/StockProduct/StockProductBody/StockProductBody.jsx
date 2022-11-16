import React from "react";

const StockProductBody = ({ products }) => {
  const { name, img, unite, total } = products;

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
          {unite} kg
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 capitalize">
          ${total}
        </td>
      </tr>
    </tbody>
  );
};

export default StockProductBody;
