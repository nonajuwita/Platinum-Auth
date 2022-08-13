import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dasboard = () => {
const [data, setData] = useState([])

useEffect( () => {
 getData()
      
},[])



const getData = () => 
{

axios
.get("https://reqres.in/api/users?page=2")
.then((res) => setData(res.data.data))
.catch((err)=> console.log(""))

}
const hhandleDialog = () => {
 

};


console.log(data)
  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{display:"flex",flexWrap:"wrap"}}>
       {
        data.map((item)=> (
          <div style={{margin:"10px"}}>
            <p>{item.first_name}</p>
            <img src={item.avatar}/>
            <div>
              <button onClick={handleDialog}>delete</button>
              <button>edit</button>
            </div>
          </div>
 
            
          
        ))
       }
        </div>

    </div>
    
  )
}

export default Dasboard