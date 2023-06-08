import React from 'react';
import Homepage from './views/homepage/Homepage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import Header from './components/header/Header';
import Footer from "./components/footer/Footer";

function App() {
  return (
      <>
        <Header />
        <Homepage />
        <Footer />
      </>
  );
}

export default App;
