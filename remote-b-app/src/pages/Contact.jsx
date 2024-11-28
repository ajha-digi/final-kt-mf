import React from 'react'
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

function Contact() {
  // const {data} = useSelector(state => state.host);
  // console.log(data);

  return (
    <div>
          <h1>Contact - B</h1>
          <NavLink to="/b/remote-home">Home</NavLink>
        <NavLink to="/b/remote-about">About</NavLink>
        <NavLink to="/b/remote-contact">Contact</NavLink>
    </div>
  )
}

export default Contact