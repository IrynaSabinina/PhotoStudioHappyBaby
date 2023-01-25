import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Galery } from "./components/Galery/Galery";
import { General } from "./components/General/General";
import { Routes, Route, useNavigate } from "react-router";
import { MainPage } from "./pages/MainPage/MainPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div>
      {/* <Galery /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
