import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../img/logo.png";
import { BsCart4, BsGraphUp } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import { AiOutlineBank, AiOutlineFile, AiOutlineFileAdd } from "react-icons/ai";
import { toast } from "react-toastify";
import { MdOutlinePeople } from "react-icons/md";

const Nav = () => {
  const [user, loading, error] = useAuthState(auth);

  const logOut = () => {
    toast(`Logged Out`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    signOut(auth);
  };

  return (
    <div className="flex sticky top-0 left-0 z-10 h-screen flex-col justify-between border-r bg-white">
      <div className="px-4 py-6">
        <img src={logo} className="block w-11 mx-auto rounded-lg" alt="logo" />

        {/* dashboard */}
        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1 ">
          <Link
            to="/home"
            className="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
          >
            <BsGraphUp />
            <span className="ml-3 text-sm font-medium"> Dashboard </span>
          </Link>
          {/* products */}
          <details className="group">
            <summary className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <FaCartArrowDown />
              <span className="ml-3 text-sm font-medium"> Products </span>

              <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <nav aria-label="Teams Nav" className="mt-1.5 ml-8 flex flex-col">
              <Link
                to="/home/addproducts"
                className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <AiOutlineFileAdd />

                <span className="ml-3 text-sm font-medium">Add Product</span>
              </Link>

              <Link
                to="/home/allproducts"
                className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <AiOutlineFile />
                <span className="ml-3 text-sm font-medium"> All Products </span>
              </Link>
            </nav>
          </details>
          {/* Purchases */}
          <details className="group">
            <summary className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <span className="ml-3 text-sm font-medium"> Purchases </span>

              <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <nav aria-label="Teams Nav" className="mt-1.5 ml-8 flex flex-col">
              <Link
                to="/home/addpurchases"
                className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <AiOutlineFileAdd />

                <span className="ml-3 text-sm font-medium">Add Purchases</span>
              </Link>

              <Link
                to="/home/allpurchases"
                className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <AiOutlineFile />
                <span className="ml-3 text-sm font-medium">
                  {" "}
                  All Purchases{" "}
                </span>
              </Link>
            </nav>
          </details>

          {/* Shop */}
          <Link
            to="/home/shop"
            className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <BsCart4 />
            <span className="ml-3 text-sm font-medium">Shop</span>
          </Link>

          {/* Balance */}
          <Link
            to="/home/balance"
            className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <AiOutlineBank />
            <span className="ml-3 text-sm font-medium">Balance</span>
          </Link>

          {/* account */}
          <details className="group">
            <summary className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>

              <span className="ml-3 text-sm font-medium"> Account </span>

              <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <nav aria-label="Account Nav" className="mt-1.5 ml-8 flex flex-col">
              <button
                onClick={logOut}
                className="flex w-full items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>

                <span className="ml-3 text-sm font-medium"> Logout </span>
              </button>
            </nav>
          </details>
        </nav>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <Link className="flex shrink-0 items-center bg-white p-4 hover:bg-gray-50">
          <img
            alt="Profile"
            src={
              user?.photoURL
                ? user?.photoURL
                : "https://images.unsplash.com/photo-1505440484611-23c171ad6e96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=854&q=80"
            }
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="ml-1.5">
            <p className="text-xs">
              <strong className="block font-medium">
                {user?.displayName ? user?.displayName : "Violet"}
              </strong>

              <span>{user?.email}</span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
