import { useState } from "react";
import useProductsGETAPI from "../../../hooks/useProductsGETAPI/useProductsGETAPI";
import Cart from "./Cart/Cart";
import Product from "./Product/Product";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useRef } from "react";

const Shop = () => {
  const [product] = useProductsGETAPI();
  const [cart, setCart] = useState([]);

  const handleProduct = (e) => {
    const exist = cart.find((product) => product._id === e._id);
    let newCart = [];

    if (!exist) {
      newCart = [...cart, e];
    } else {
      const rest = cart.filter((product) => product._id !== e._id);
      newCart = [...rest, e];
    }

    setCart(newCart);
  };

  const handleDelete = (e) => {
    const remove = cart.filter((product) => product._id !== e._id);
    setCart(remove);
  };

  const handleChange = (item, d) => {
    if (item.amount === parseFloat(item.unite)) {
      toast.warn(`${item.name} stock finished`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      item.amount = 0;
    }

    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const countRef = useRef("");
  const grandTotalRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const grandTotal = grandTotalRef.current.value;

    const cartSubmit = cart;
    const empty = [];

    axios
      .post(
        "https://warehouse-managment-system-production.up.railway.app/sales",
        {
          cartData: cartSubmit,
          grandTotal: grandTotal,
        }
      )
      .then((res) => {
        toast.info("Thanks for shopping with us ✨", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setCart(empty);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Link to="/home" className="underline text-red-500 ">
        <h1 className="text-center mt-3 text-xl">Home</h1>
      </Link>
      <section className="flex gap-10 ">
        <dl className="relative flex-initial grid grid-cols-3 gap-5 w-[70%] my-10 ml-5 ">
          {product.map((product) => (
            <Product
              product={product}
              handleProduct={handleProduct}
              key={product._id}
            />
          ))}
        </dl>

        <dl className="flex-initial w-[50%] sticky top-0 h-screen border-l-2 border-gray-300 ">
          <form onSubmit={handleSubmit} className="px-3 mt-5 overflow-auto">
            <h1 className="text-center text-red-500 text-5xl font-medium underline">
              Cart
            </h1>
            <dl className="flex justify-around mt-2 text-gray-500">
              <h1>Name</h1>
              <h1>Quantity</h1>
              <h1>Total</h1>
            </dl>

            <Cart
              cart={cart}
              handleDelete={handleDelete}
              countRef={countRef}
              handleChange={handleChange}
              grandTotalRef={grandTotalRef}
            />

            <button
              className="absolute bottom-0 bg-green-400 w-[97%] py-2 text-white font-semibold text-3xl"
              disabled={cart.length === 0}
            >
              Pay Now
            </button>
          </form>
        </dl>
      </section>
    </>
  );
};

export default Shop;
