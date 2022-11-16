import React, { useRef } from "react";
import Nav from "../../Nav/Nav";
import axios from "axios";
import { toast } from "react-toastify";

const Products = () => {
  const nameRef = useRef("");
  const trackRef = useRef("");
  const warehouseRef = useRef("");
  const costRef = useRef("");
  const texRef = useRef("");
  const uniteRef = useRef("");
  const descRef = useRef("");
  const imgRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const track = trackRef.current.value;
    const warehouse = warehouseRef.current.value;
    const cost = costRef.current.value;
    const tex = texRef.current.value;
    const unite = uniteRef.current.value;
    const desc = descRef.current.value;
    const img = imgRef.current.value;
    const total = cost * unite + tex / 100;
    const removedDecimal = total.toFixed(2);

    if ((cost, tex, unite < 0)) {
      toast.warn("Cannot set this value", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    await axios
      .post(
        "https://warehouse-managment-system-production.up.railway.app/products",
        {
          name: name,
          track: track,
          warehouse: warehouse,
          cost: cost,
          tex: tex,
          unite: unite,
          desc: desc,
          img: img,
          total: removedDecimal,
          amount: 1,
        }
      )
      .then((res) =>
        toast.success("Success 🎈", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      )
      .catch((err) => console.log(err));

    e.target.reset();
  };

  return (
    <div className="flex gap-5">
      <Nav />

      <dl className="mt-10 w-screen container mx-auto">
        <h1 className="text-red-400 text-center font-medium text-3xl underline uppercase tracking-widest">
          Create Product
        </h1>

        <dd className="mt-10">
          <form onSubmit={handleSubmit}>
            <dl className="flex gap-5">
              {/* name */}
              <div>
                <label className="block text-neutral-500 font-medium text-sm">
                  Product Name
                </label>
                <input
                  spellCheck
                  ref={nameRef}
                  required
                  className="px-3 py-1 outline-0 ring-1 ring-red-400 rounded-md focus:ring-[#fdd59e] mt-1 w-[20em]"
                  type="text"
                  placeholder="Enter Product Name"
                  id="product name"
                  name="product name"
                />
              </div>

              {/* Tracking Number */}
              <div>
                <label className="block text-neutral-500 font-medium text-sm">
                  Tracking Number
                </label>
                <input
                  ref={trackRef}
                  required
                  className="px-3 py-1 outline-0 ring-1 ring-red-400 rounded-md focus:ring-[#fdd59e] mt-1 w-[20em]"
                  type="text"
                  placeholder="Enter Tracking Number"
                  id="track number"
                  name="track number"
                />
              </div>

              {/* warehouse */}
              <div>
                <h1 className="text-neutral-500 font-medium text-sm">
                  Warehouse
                </h1>
                <select
                  ref={warehouseRef}
                  required
                  className="outline-0 text-gray-500 px-3 py-1 ring-1 ring-red-400 rounded-md focus:ring-[#fdd59e] mt-1 "
                  name="warehouse"
                  id="warehouse"
                  placeholder="warehouse"
                >
                  <option value="Warehouse 01">Warehouse 01</option>
                  <option value="Warehouse 02">Warehouse 02</option>
                </select>
              </div>
            </dl>

            {/* cost */}
            <dl className="mt-5 flex gap-5">
              <div>
                <label className="block text-neutral-500 font-medium text-sm">
                  Costs
                </label>
                <input
                  ref={costRef}
                  step="any"
                  required
                  className="px-3 py-1 outline-0 ring-1 ring-red-400 rounded-md focus:ring-[#fdd59e] mt-1 w-[20em]"
                  type="number"
                  placeholder="Enter Costs (USD$)"
                  id="costs"
                  name="costs"
                />
              </div>

              {/* Tex */}
              <div>
                <label className="block text-neutral-500 font-medium text-sm">
                  Tex
                </label>
                <input
                  ref={texRef}
                  required
                  className="px-3 py-1 outline-0 ring-1 ring-red-400 rounded-md focus:ring-[#fdd59e] mt-1 w-[20em]"
                  type="number"
                  placeholder="Enter Tex Amount (USD$)"
                  id="Tex"
                  name="Tex"
                />
              </div>

              {/* Unite */}
              <div>
                <label className="block text-neutral-500 font-medium text-sm">
                  Quantity
                </label>
                <input
                  ref={uniteRef}
                  required
                  className="px-3 py-1 outline-0 ring-1 ring-red-400 rounded-md focus:ring-[#fdd59e] mt-1 w-[20em]"
                  type="number"
                  placeholder="Enter Quantity (Kg)"
                  id="quantity"
                  name="quantity"
                />
              </div>
            </dl>

            {/* img */}
            <div className="mt-5">
              <label className="block text-neutral-500 font-medium text-sm">
                Image
              </label>
              <input
                ref={imgRef}
                required
                className="px-3 py-1 outline-0 ring-1 ring-red-400 rounded-md focus:ring-[#fdd59e] mt-1 w-[95%]"
                type="url"
                placeholder="Image URL"
                id="img"
                name="img"
              />
              <h1 className="text-xs font-semibold text-gray-500 mt-1">
                *Upload Image to{" "}
                <a
                  className="underline"
                  href=" https://imgbb.com/ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  imgbb.com
                </a>
              </h1>
            </div>

            {/* desc */}
            <textarea
              ref={descRef}
              placeholder="Description"
              name="desc"
              id="desc"
              className="mt-5 ring-1 ring-red-400 focus:ring-[#fdd59e] focus:outline-0 px-2 py-2 rounded-lg w-[95%] block"
            ></textarea>

            {/* button */}
            <button className="bg-red-600 hover:bg-transparent hover:ring-1 hover:ring-red-400 px-10 py-2 rounded-md text-white hover:text-red-400 mt-6 block mx-auto hover:animate-pulse">
              Submit
            </button>
          </form>
        </dd>
      </dl>
    </div>
  );
};

export default Products;
