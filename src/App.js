import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Register from "./components/Auth/Register/Register";
import RequiredAuth from "./components/Auth/RequiredAuth/RequiredAuth";
import NotFound from "./NotFound/NotFound";
import DashBoard from "./components/Home/DashBoard/DashBoard";
import Products from "./components/Home/Products/Products";
import AllProducts from "./components/Home/Products/AllProducts/AllProducts";
import Purchases from "./components/Home/Purchases/Purchases";
import AllPurchases from "./components/Home/Purchases/AllPurchases/AllPurchases";
import Customers from "./components/Home/Customers/Customers";
import Shop from "./components/Home/Shop/Shop";
import Balance from "./components/Home/Balance/Balance";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home">
          <Route
            index
            element={
              <RequiredAuth>
                <DashBoard />
              </RequiredAuth>
            }
          />
          <Route
            path="addproducts"
            element={
              <RequiredAuth>
                <Products />
              </RequiredAuth>
            }
          />
          <Route
            path="allproducts"
            element={
              <RequiredAuth>
                <AllProducts />
              </RequiredAuth>
            }
          />
          <Route
            path="addpurchases"
            element={
              <RequiredAuth>
                <Purchases />
              </RequiredAuth>
            }
          />
          <Route
            path="allpurchases"
            element={
              <RequiredAuth>
                <AllPurchases />
              </RequiredAuth>
            }
          />
          <Route
            path="customers"
            element={
              <RequiredAuth>
                <Customers />
              </RequiredAuth>
            }
          />
          <Route
            path="shop"
            element={
              <RequiredAuth>
                <Shop />
              </RequiredAuth>
            }
          />

          <Route
            path="balance"
            element={
              <RequiredAuth>
                <Balance />
              </RequiredAuth>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
