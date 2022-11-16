import React from "react";
import { Link } from "react-router-dom";
import gif from "../../../img/Sign up.gif";
import logo from "../../../img/logo.png";
import GoogleSignIn from "../SocialSignIn/GoogleSignIn";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useState } from "react";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [check, setCheck] = useState(false);

  const [sendEmailVerification] = useSendEmailVerification(auth);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passRef = useRef("");
  const confirmPassRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const confirmPass = confirmPassRef.current.value;

    if (password !== confirmPass) {
      toast.error("Password didn't match", {
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
    } else {
      await createUserWithEmailAndPassword(email, password);
      toast.success(`Account created ${name}🎈`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      e.target.reset();
    }

    if (sendEmailVerification) {
      toast.info(`Check ${email}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      {/* desktop */}
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="img"
            src={gif}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <span className="sr-only">Home</span>
            <img className="md:w-20 w-10" src={logo} alt="" />

            <h1 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
              Welcome to Signup 🎉
            </h1>

            {/* form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              {/* name */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Name
                </label>

                <input
                  ref={nameRef}
                  required
                  type="text"
                  id="Name"
                  name="name"
                  className="mt-1 py-1 px-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              {/* email */}
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Email
                </label>

                <input
                  ref={emailRef}
                  required
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 py-1 px-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              {/* password */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Password
                </label>

                <input
                  ref={passRef}
                  required
                  type="password"
                  id="Password"
                  name="password"
                  className=" py-1 px-3 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              {/* confirm password */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Password Confirmation
                </label>

                <input
                  ref={confirmPassRef}
                  required
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  className="mt-1 py-1 px-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    onClick={() => setCheck(!check)}
                    required
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
                  />

                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    I Will Accept Company Privacy Policy
                  </span>
                </label>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  disabled={!check}
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                >
                  {check ? "Create an account" : "Accept company policy"}
                </button>

                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                  Already have an account?{" "}
                  <Link
                    to="/"
                    className="text-white underline hover:text-green-500"
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </form>
            <GoogleSignIn />
          </div>
        </main>
      </div>
    </section>
  );
};

export default Register;
