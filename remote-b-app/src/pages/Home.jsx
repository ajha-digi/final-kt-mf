import React from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"; 

function Home() {
  const {data} = useSelector(state => state.host);
  console.log("data from remote App B", data);
  
  return (
    <div>
        <h1>Home - B</h1>
        <NavLink to="/b/remote-home">Home</NavLink>
        <NavLink to="/b/remote-about">About</NavLink>
        <NavLink to="/b/remote-contact">Contact</NavLink>
    </div>
  )
}

export default Home