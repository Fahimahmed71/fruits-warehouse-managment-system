import React from "react";
import useShopGETAPI from "../../../hooks/useShopGETAPI/useShopGETAPI";
import Nav from "../../Nav/Nav";
import BalanceData from "./BalanceData.jsx/BalanceData";

const Balance = () => {
  const [shop] = useShopGETAPI();

  return (
    <section className="flex gap-5">
      <Nav />

      <dl className="w-full ">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Img
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Warehouse
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Quantity
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Total
                </th>
              </tr>
            </thead>
            {shop.map((shopData) => (
              <BalanceData shopData={shopData} key={shopData._id} />
            ))}
          </table>
        </div>
      </dl>
    </section>
  );
};

export default Balance;
