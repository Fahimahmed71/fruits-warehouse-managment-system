import React from "react";
import { BsCart4, BsCartCheck } from "react-icons/bs";
import { MdOutlineAccountBalance } from "react-icons/md";
import { Link } from "react-router-dom";
import Nav from "../../Nav/Nav";
import Charts from "./Charts/Charts";
import StockProduct from "./StockProduct/StockProduct";
import useProductsGETAPI from "../../../hooks/useProductsGETAPI/useProductsGETAPI";
import usePurchasesGETAPI from "../../../hooks/usePurchasesGETAPI/usePurchasesGETAPI";
import { AiOutlineFileAdd } from "react-icons/ai";
import useShopGETAPI from "../../../hooks/useShopGETAPI/useShopGETAPI";

const DashBoard = () => {
  const [product] = useProductsGETAPI();
  const [purchases] = usePurchasesGETAPI();
  const [shop] = useShopGETAPI();

  let total = 0;
  let grandTotal = 0;

  for (const loop of shop) {
    total = parseInt(loop.grandTotal);
  }

  for (const loop of shop) {
    grandTotal += parseInt(loop.grandTotal);
  }

  return (
    <section className="flex gap-5 ">
      <Nav />

      <dl className="mt-10 w-screen container mx-auto">
        <article className="flex items-center justify-center gap-4 rounded-lg border border-gray-100 bg-white p-6">
          <span className="rounded-full bg-green-100 p-3 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>

          <div>
            <p className="text-2xl font-medium text-green-500">${grandTotal}</p>

            <p className="text-sm text-gray-500">Total Sales</p>
          </div>
        </article>

        <dt className="flex justify-center gap-10 mt-5">
          {/* products */}
          <Link
            to="allproducts"
            className="flex items-center gap-5 py-5 px-7 shadow-2xl border border-neutral-200 hover:scale-105 rounded-lg"
          >
            <BsCartCheck className="text-4xl text-red-200" />
            <div>
              <h1 className="text-red-400 font-medium text-2xl">Products</h1>
              <h1 className="text-neutral-600 text-xl font-medium">
                {product.length}
              </h1>
            </div>
          </Link>

          {/* purchases */}
          <Link
            to="allpurchases"
            className="flex items-center gap-5 py-5 px-7 shadow-2xl border border-neutral-200 hover:scale-105 rounded-lg"
          >
            <AiOutlineFileAdd className="text-4xl text-red-200" />
            <div>
              <h1 className="text-red-400 font-medium text-2xl">Purchases</h1>
              <h1 className="text-neutral-600 text-xl font-medium">
                {purchases.length}
              </h1>
            </div>
          </Link>

          {/* shop */}
          <Link
            to="shop"
            className="flex items-center gap-5 py-5 px-7 shadow-2xl border border-neutral-200 hover:scale-105 rounded-lg"
          >
            <BsCart4 className="text-4xl text-red-200" />
            <div>
              <h1 className="text-red-400 font-medium text-2xl">Shop</h1>
            </div>
          </Link>

          {/* balance */}
          <Link
            to="balance"
            className="flex items-center gap-5 py-5 px-7 shadow-2xl border border-neutral-200 hover:scale-105 rounded-lg"
          >
            <MdOutlineAccountBalance className="text-4xl text-red-200" />
            <div>
              <h1 className="text-red-400 font-medium text-2xl">
                Last Balance
              </h1>
              <h1 className="text-neutral-600 text-xl font-medium">
                $ {total}
              </h1>
            </div>
          </Link>
        </dt>

        {/* charts & graphs */}
        <dt className="mt-10">
          <Charts />

          <StockProduct />
        </dt>
      </dl>
    </section>
  );
};

export default DashBoard;
