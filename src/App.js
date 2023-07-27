import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LeftNavBar from './components/LeftNavBar';
import TopBar from './components/TopBar';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <LeftNavBar />
        <TopBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
