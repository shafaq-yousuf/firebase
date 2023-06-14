import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './screens/signup';
import Login from './screens/login';
import Welcome from './screens/Welcome';
import ProtectedRoutes from './screens/ProtectedRoutes';
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='welcome' element={<ProtectedRoutes Component={Welcome} />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
