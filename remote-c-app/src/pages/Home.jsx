import React from 'react'
import { NavLink } from 'react-router-dom'
// import {useSelector} from "react-redux"; 

function Home() {
  // const {data} = useSelector(state => state.host);
  // console.log(data);
  
  return (
    <div>
        <h1>Home - C</h1>
        <NavLink to="/c/remote-home">Home</NavLink>
        <NavLink to="/c/remote-about">About</NavLink>
        <NavLink to="/c/remote-contact">Contact</NavLink>
    </div>
  )
}

export default Home