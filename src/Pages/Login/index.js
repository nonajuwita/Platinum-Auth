import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = (setIsLogin) => {
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
        
     

      }
      )
      
     
      .catch((err) => console.log(err));
  };

  console.log(res)
 

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
