import React from 'react'
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

function Contact() {
  // const {data} = useSelector(state => state.host);
  // console.log(data);

  return (
    <div>
          <h1>Contact - C</h1>
          <NavLink to="/c/remote-home">Home</NavLink>
        <NavLink to="/c/remote-about">About</NavLink>
        <NavLink to="/c/remote-contact">Contact</NavLink>
    </div>
  )
}

export default Contact