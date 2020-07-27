import React from "react";
// import logo from "./logo.svg";
// import { Button, Card, Col, Descriptions, Divider, Row } from "antd";
// import { ShoppingCartOutlined } from "@ant-design/icons";
// import CardArticle from "./components/CardArticle";
import "./App.css";
// import SomeCard from "./components/SomeCard";
// import HomeItemsListBlock from "./components/HomeItemsListBlock";
import BasicLayout from "./layouts/BasicLayout";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recomendations from "./pages/Recomendations";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <BasicLayout>
              <Home />
            </BasicLayout>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <BasicLayout>
              <Orders />
            </BasicLayout>
          }
        ></Route>
        <Route
          path="/order"
          element={
            <BasicLayout>
              <Orders />
            </BasicLayout>
          }
        ></Route>
        <Route
          path="/orders/:orderId"
          element={
            <BasicLayout>
              <Orders />
            </BasicLayout>
          }
        ></Route>
        <Route
          path="/recomendations"
          element={
            <BasicLayout>
              <Recomendations/>
            </BasicLayout>
          }
        ></Route>
        <Route
          path="/recomendations/:recomendId"
          element={
            <BasicLayout>
              <Recomendations/>
            </BasicLayout>
          }
        ></Route>
        <Route
          path="/product/:productId"
          element={
            <BasicLayout>
              <Product/>
            </BasicLayout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
    // <BasicLayout>
    //   {/* <Home /> */}
    //   <Orders></Orders>
    // </BasicLayout>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
