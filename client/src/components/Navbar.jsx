import React, { useEffect } from 'react'
import logo from '../assets/images/logo.jpg'
import{FaBars} from 'react-icons/fa'
import profile from '../assets/images/si0.jpg'
import{FaSearch} from 'react-icons/fa'
import {useState } from 'react'
import Sidemenu from './Sidemenu'

function Navbar() {
   
    const[show, setShow]=useState(false);
    const[sidemenu,showSidemenu]=useState(false);
    const event = ()=>{
        console.log(`side menu triggered`);
        showSidemenu(true)
    }
    const name  = ()=>{
        setShow(true);
    }
    
    const search= ()=>{
        window.location.reload(true)
            }
  return (
    <div className="navbar">
        <div className="profile"><img src={profile} /></div>
        
        <div className="logo">
            <img src={logo} alt="logo"
            style={{cursor:'pointer'}} 
            onClick={name}
            onDoubleClick={name=>setShow(false)}
            />
            {show &&(<a className="hr">Harvey's Request</a>)}
        </div>
        <div className="search"> 
        <input type="text" className="search-box"/> 
        <FaSearch 
        style={{cursor:'pointer'}}
        onClick={search}
        className="search-bar"/>
        </div>
        <FaBars 
        className="menu-btn"
        onClick={event}
        onDoubleClick={event=>showSidemenu(false)}
        style={{cursor:'pointer'}}
        />
        {sidemenu && <Sidemenu/>}
        </div>
  )
}

export default Navbar