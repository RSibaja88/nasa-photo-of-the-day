import React from "react";
// import axios from "axios";
import Header from "../src/Components/HeaderCard";
import APODPic from "./Components/APODPic";
import APODCard from "./Components/APODCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <APODPic />
    </div>
  );
}

export default App;
