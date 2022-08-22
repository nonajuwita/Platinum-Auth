import React, { useState,useEffect,useCallback, useContext } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const Login = ({}) => {
  const authContextData = useContext(AuthContext)
  const {setIsLogin} = authContextData
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState("");
  const navigate = useNavigate();
  // console.log("berhasil");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    // console.log(email, password);
    


    const payload = {
      email: email,
      password: password,
    };
   

    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) =>{
        setRes(res.data.token)
        localStorage.setItem('token',res.data.token)
       
        navigate("/dasboard")
        setIsLogin(true);
        
     

      }
      )
      
     
      .catch((err) => console.log(err));
  };

  console.log(res)

  const redirect = useCallback(
    () => navigate("/dasboard", { replace: true }),
    [navigate]
  );

  useEffect(() => {
    const checkIfLogin = () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      redirect();
    };
    checkIfLogin();
  }, [redirect]);
 

  return (
    <div>
      <div>
        <form>
          <label>Username</label>
          <input onChange={(e) => handleEmail(e)}></input>
          <br></br>
          <label>Password</label>
          <input onChange={(e) => handlePassword(e)}></input>
        </form>

        <button onClick={handleLogin}>Login</button>

        {!!res.length && <h1>Sudah Login</h1>}


      </div>
    </div>
  );
};

export default Login;
