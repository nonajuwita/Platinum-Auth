
import React, {createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

const AuthContextProvider = (props) =>{
    const [isLogin, setIsLogin]= useState(false)

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

  const authContextData = {
    isLogin,setIsLogin

  }

    return(
        
        <AuthContext.Provider value={authContextData}>
            {props.children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;