
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home"
import Register from "./Pages/Register";
import Login from './Pages/Login';
import Dasboard from './Pages/Dasboard'
import ProtectedRoute from './HOC';
import Detail from './Detail';
import { useEffect, useState } from 'react';
import AuthContextProvider from './context/AuthContext';


function App() {


  return (
    <AuthContextProvider>
   <Routes>
        
        <Route path="/" element={<Home />}/>
        <Route path='register' element={<Register />} />
        <Route path="/login" element={<Login/>} />
        
        <Route
        path='/dasboard'
        element={
        <ProtectedRoute>
          
        <Dasboard/>
        </ProtectedRoute>
        
        }
        />
        <Route
        path="/detail/:id"
        element={

          <ProtectedRoute>
            <Detail />
          </ProtectedRoute>
        }
      />
        
   </Routes>
   </AuthContextProvider>
        
          
 
    
  );
}

export default App;
