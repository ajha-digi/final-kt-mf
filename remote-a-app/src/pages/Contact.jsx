import React from 'react'
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

function Contact() {
  // const {data} = useSelector(state => state.host);
  // console.log(data);

  return (
    <div>
          <h1>Contact -A</h1>
          <NavLink to="/a/remote-home">Home</NavLink>
        <NavLink to="/a/remote-about">About</NavLink>
        <NavLink to="/a/remote-contact">Contact</NavLink>
    </div>
  )
}

export default Contact