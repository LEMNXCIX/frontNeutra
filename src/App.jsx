import React from "react";
import Home  from "./pages/Home";

import GoTop from "../src/components/Up";
import { ProductList } from "./pages/ProductList";
import { Product } from "./pages/Product";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Cart } from "./pages/Cart";

export function App() {
  return(
    <>
     <GoTop scrollStepInPx="100" delayInMs="10" />
    {/* <Home /> */}
    {/* <ProductList/> */}
    {/* <Product/> */}
    {/* <Register/> */}
    {/* <Login/> */}
    <Cart/>
    </>

  ) ;
}
