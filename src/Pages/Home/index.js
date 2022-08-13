import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
        <h1>
            Home
        </h1>
        <Link to={"/register"}>
        <button>Register</button>
          </Link>
          <Link to={"/login"}>
        <button>Login</button>
          </Link>
          <Link to={"/dasboard"}>
        <button>Dasboard</button>
          </Link>
        
        
    </div>
  )
}

export default Home;