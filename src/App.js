import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import * as PAGES from "./components/pages";

function App() {
  const [currentPage, handlePages] = useState("Homepage");

  const Page = PAGES[currentPage];

  return (
    <div className="App">
      <Header currentPage={currentPage} handlePages={handlePages} />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
