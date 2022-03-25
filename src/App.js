import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './assets/styles/components/Header';
import Home from './pages/Home';
import Favoris from './pages/Favoris';

const App = () => {
  return (
    
    <BrowserRouter>
      <Header></Header>
      <Routes> 
        {/* Routes à la place de switch -> nouveauté de React 2022 */}
        {/* <Route path="/" element={<Header/>} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/favoris" element={<Favoris />} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* element à la place de component -> également une nouveauté de React version 2022 */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;