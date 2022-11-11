import './sass/main.scss'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddAnimal from './components/AddAnimal';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/Auth';



function App() {


  return <>
    <AuthProvider>

      <BrowserRouter>
        <Routes>
          <Route path={'/'}
            element={<Home />}
          />
          <Route path='/add-animal' element={<PrivateRoute >
            <AddAnimal />
          </PrivateRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>



  </>
}

export default App;
