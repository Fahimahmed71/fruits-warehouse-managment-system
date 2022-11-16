import React from "react";

const BalanceData = ({ shopData }) => {
  let img;
  let name;
  let warehouse;
  let amount;
  let cost;

  shopData.cartData.map(
    (cartItem) => ({ name, img, warehouse, amount, cost } = cartItem)
  );

  const convertCost = parseFloat(cost);

  const total = convertCost * amount;

  return (
    <>
      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            <img
              className="w-14 h-14 object-cover rounded-md"
              src={img}
              alt=""
            />
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">{name}</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {warehouse}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {amount}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            ${total}
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default BalanceData;
