import React from "react";

const AllPurchasesBody = ({ purchases }) => {
  const { date, name, status, payment, supplier, warehouse, total, track } =
    purchases;

  return (
    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {date}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 capitalize">
          {name}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{track}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {warehouse}
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          <strong
            className={`rounded  px-3 py-1.5 text-xs font-medium ${
              payment === "paid"
                ? "text-green-700 bg-green-100"
                : "" || payment === "unpaid"
                ? "text-red-700 bg-red-100"
                : "" || payment === "pending"
                ? "text-yellow-400 bg-yellow-100"
                : "" || payment === "refunded"
                ? "text-sky-400 bg-sky-100"
                : ""
            }`}
          >
            {payment}
          </strong>
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 capitalize">
          {supplier}
        </td>

        <td className="whitespace-nowrap px-4 py-2">
          <strong
            className={`rounded  px-3 py-1.5 text-xs font-medium ${
              status === "ordered"
                ? "text-yellow-400 bg-yellow-100"
                : "" || status === "received"
                ? "text-green-700 bg-green-100"
                : "" || status === "pending"
                ? "text-red-700 bg-red-100"
                : ""
            }`}
          >
            {status}
          </strong>
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$ {total}</td>
      </tr>
    </tbody>
  );
};

export default AllPurchasesBody;
