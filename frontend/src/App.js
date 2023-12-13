import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AddScreen from './screens/AddScreen';
import Items from './components/Items';
import Header from './components/Header';
import "./App.css"
import UpdateScreen from './screens/UpdateScreen';
import Home from './components/Home';

const App = () => {
  return (
    <>
    <Header />
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/add" element={<AddScreen />} />
          <Route path="/update/:id" element={<UpdateScreen />} />
        </Routes>
    </>
  );
};

export default App;
