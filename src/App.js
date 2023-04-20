import React from "react";
import QuoteGenerator from "./QuoteGenerator";
import "./App.css";
//import Naving from "./Naving";
import Footer from "./Footer";
import Header from "./Header";
function App() {
  return (
    <div>
      <Header/>
      <QuoteGenerator />
     
      <Footer/>
    </div>

  );
}

export default App;