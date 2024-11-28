import React from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector} from "react-redux"; 

function Home() {
  const {data} = useSelector(state => state.host);
  console.log(data);
  
  return (
    <div>
        <h1>Home</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <hr />
        <NavLink to="/a/remote-home">Home</NavLink>
        <NavLink to="/a/remote-about">About</NavLink>
        <NavLink to="/a/remote-contact">Contact</NavLink>
        <hr />
        <NavLink to="/b/remote-home">Home</NavLink>
        <NavLink to="/b/remote-about">About</NavLink>
        <NavLink to="/b/remote-contact">Contact</NavLink>
        <hr />
        <NavLink to="/c/remote-home">Home</NavLink>
        <NavLink to="/c/remote-about">About</NavLink>
        <NavLink to="/c/remote-contact">Contact</NavLink>
    </div>
  )
}

export default Home