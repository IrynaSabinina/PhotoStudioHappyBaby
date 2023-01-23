import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Galery } from "./components/Galery/Galery";
function App() {
  return (
    <>
      <div>
        <Header />
        <Galery />
      </div>
    </>
  );
}

export default App;
