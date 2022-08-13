import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
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
import { useEffect, useState } from 'react';


function App() {
const [isLogin, setIsLogin]= useState()

  useEffect(() => {
    const checkIfLogin = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLogin(false);
      } else {
        setIsLogin(true);
      }
    };
    checkIfLogin();
   
  }, []);


  return (
   <Routes>
        
        <Route path="/" element={<Home />}/>
        <Route path='register' element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dasboard' element={<Dasboard/>}/>
        {/* <Route
        path='/dasboard'
        element={
        <ProtectedRoute isLogin={Login}>

        <Dasboard/>
        </ProtectedRoute> */}
        
        }
        />
        
   </Routes>
        
          
 
    
  );
}

export default App;
