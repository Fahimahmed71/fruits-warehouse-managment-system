import React from "react";
import {
  AiFillDelete,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";

const CartData = ({ carts, handleDelete, cart, handleChange }) => {
  const { img, name, cost } = carts;

  const total = carts.amount * parseFloat(cost).toFixed(2);

  return (
    <>
      <dl className="flex items-center justify-around my-3">
        <img className="w-10 h-14 rounded-md" src={img} alt="" />
        <h1>{name}</h1>

        <div className="flex items-center gap-3">
          <AiOutlinePlusCircle
            className="text-green-400 hover:text-red-500 cursor-pointer"
            onClick={() => handleChange(carts, 1)}
          />
          <h1>{carts.amount}</h1>
          <AiOutlineMinusCircle
            className="text-green-400 hover:text-red-500 cursor-pointer"
            onClick={() => handleChange(carts, -1)}
          />
        </div>

        <div className="flex justify-center items-center gap-2 ">
          <h1>$</h1>
          <input
            type="number"
            className="w-14 "
            value={total}
            disabled
            readOnly
          />
        </div>
        <AiFillDelete
          onClick={() => handleDelete(carts)}
          className="text-green-400 hover:text-red-400 cursor-pointer text-2xl"
        />
      </dl>
    </>
  );
};

export default CartData;
