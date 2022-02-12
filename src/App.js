import React from "react";
import Header from "./components/Header";
import Thumbnails from "./components/Thumbnails";
import imagesArr from "./data";
import './App.css';

function App() {
 
  return (
    <div className="App">
      <Header />
      <div id="wrapper">
        <Thumbnails images={imagesArr} />
      </div>
    </div>
  );
}

export default App;
