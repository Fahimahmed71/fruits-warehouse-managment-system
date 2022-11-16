import React from "react";
import gif from "../../../img/login.gif";
import logo from "../../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import GoogleSignIn from "../SocialSignIn/GoogleSignIn";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useRef } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const emailRef = useRef("");
  const passRef = useRef("");

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const pass = passRef.current.value;

    if (loading) {
      return;
    }

    if (error) {
      toast.error(error.message, {
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
      await signInWithEmailAndPassword(email, pass);
      nav("/home");
      e.target.reset();
    }
  };

  const handleGuest = async () => {
    const email = process.env.REACT_APP_email;
    const pass = process.env.REACT_APP_password;

    await signInWithEmailAndPassword(email, pass);

    toast.success(`Welcome ${email}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    nav("/home");
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      {/* desktop */}
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="login"
            src={gif}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <span className="sr-only">Home</span>
            <img className="w-20" src={logo} alt="logo" />
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome To Sign In 🎉
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>

        {/* mobile */}
        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <span className="sr-only">Home</span>
              <img className="w-14" src={logo} alt="logo" />

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome To Sign In 🎉
              </h2>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>

            {/* form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              {/* Email */}
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Email
                </label>

                <input
                  ref={emailRef}
                  required
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm font-medium text-gray-700  shadow-sm py-2 px-3"
                />
              </div>

              {/* Password */}
              <div className="col-span-6 ">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Password
                </label>

                <input
                  ref={passRef}
                  required
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-2 px-3"
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Login
                </button>

                <p className="mt-4 text-sm text-gray-500 dark:text-white sm:mt-0">
                  Don't Have An Account?{" "}
                  <Link
                    to="/register"
                    className="text-gray-700 dark:text-white hover:text-green-500 underline "
                  >
                    Registration
                  </Link>
                </p>
              </div>
            </form>
            <GoogleSignIn />

            <button
              onClick={handleGuest}
              className="group relative block mx-auto mt-5 text-sm font-medium text-red-600 focus:outline-none active:text-red-500"
            >
              <span className="absolute inset-0 border border-current"></span>
              <span className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                Guest Sign in
              </span>
            </button>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Login;
