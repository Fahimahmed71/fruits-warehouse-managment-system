import { useEffect, useState } from "react";
import CartData from "./CartData";

const Cart = ({
  cart,
  handleDelete,
  countRef,
  handleChange,
  grandTotalRef,
}) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * parseFloat(item.cost)));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <section className=" mt-5">
        {cart.map((carts) => (
          <CartData
            cart={cart}
            carts={carts}
            key={carts._id}
            handleDelete={handleDelete}
            handleChange={handleChange}
          />
        ))}

        <div className="flex justify-center items-center gap-2 text-2xl font-medium text-neutral-500 ">
          <h1>Grand Total: $</h1>
          <input
            ref={grandTotalRef}
            type="number"
            className="w-20 "
            value={price}
            disabled
            readOnly
          />
        </div>
      </section>
    </>
  );
};

export default Cart;
