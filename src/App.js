import './sass/main.scss'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddAnimal from './components/AddAnimal';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider, useCtx } from './context/Auth';
import AdoptMe from './components/AdoptMe';
import SignUp from './components/SignUp';


function App() {

  const {adoptAnimal} = useCtx();

  return <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'}
            element={<Home />}
          />
          <Route path='/add-animal' element={<PrivateRoute >
            <AddAnimal />
          </PrivateRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path='/adopt-me' element={
            <PrivateRoute >
              <AdoptMe data={adoptAnimal} />
            </PrivateRoute>} 
            />
        </Routes>
      </BrowserRouter>

  </>
}

export default App;
