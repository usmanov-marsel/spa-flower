import "./App.css";
import { Login } from "./components/Login/Login";
import { Registration } from "./components/Registration/Registration";
import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { Main } from "./components/Main/Main";
import { Reset } from "./components/Reset/Reset";
import { Cart } from "./components/Cart/Cart";
import { useSelector } from "react-redux";
import { Profile } from "./components/Profile/Profile";

function App() {
  let cart = useSelector((state) => state.cart);
  if (cart.bouquets.length == 0 && localStorage.getItem("cart"))
    cart = JSON.parse(localStorage.getItem("cart"));
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Идёт загрузка ...</div>}>
            <Main />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<div>Идёт загрузка ...</div>}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/registration"
        element={
          <Suspense fallback={<div>Идёт загрузка ...</div>}>
            <Registration />
          </Suspense>
        }
      />
      <Route
        path="/reset"
        element={
          <Suspense fallback={<div>Идёт загрузка ...</div>}>
            <Reset />
          </Suspense>
        }
      />
      <Route
        path="/cart"
        element={
          <Suspense fallback={<div>Идёт загрузка ...</div>}>
            <Cart cart={cart} />
          </Suspense>
        }
      />
      <Route
        path="/profile"
        element={
          <Suspense fallback={<div>Идёт загрузка ...</div>}>
            <Profile />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
