import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';



const Register = () => {


    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("")
    const[res,setRes]=useState("")
    // console.log("berhasil");


const handleEmail = (e) =>{
    setEmail(e.target.value)
    console.log(e.target.value)
}
const handlePassword= (e)=>{
    setPassword(e.target.value);
}
const handleRegister = (e) => {
   console.log(email,password)

        const  payload = {
            
        email : email,
        password : password

        }   
        
        axios 
        .post("https://reqres.in/api/register",payload)
        .then(res => setRes(res.data.token))
        .catch(err => console.log(err))
}




  return (
    <div>
        <h1>
            WELCOME ADMIN
        </h1>
         
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=> handleEmail(e)}/>
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=> handlePassword(e)} />
      </Form.Group>
      
      <Button onClick={handleRegister} variant="primary" >
        register
      </Button>
      {
       !!res.length && (<h1>Anda sudah terdaftar</h1>) 
      }
    </Form>
         
    </div>
  )
}

export default Register