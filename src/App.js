import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../src/Components/HeaderCard";
import APODPic from "./Components/APODPic";
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
