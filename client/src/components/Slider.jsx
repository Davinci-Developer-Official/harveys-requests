import React from 'react'
import men from '../assets/images/hsi0.jpg'
import {useState}from 'react'
import walk from '../assets/clips/closet.mp4'
import mens from '../assets/clips/walk2.mp4'
import womans from '../assets/clips/walk1.mp4'
import unisexs from '../assets/clips/unisex.mp4'
import kidz from '../assets/clips/kids.mp4'
function Slider() {
    const[man,showMan]=useState(false)
    const[woman,showWoman]=useState(false)
    const[kids,showKids]=useState(false)
    const[unisex ,showUnisex]=useState(false)
    const[hide,setHide]=useState(true)
    const[text ,showText]=useState(false)
  return (
    <div className="slider">
        {hide&&(<span className="sl" 
        onMouseEnter={()=>showText(true)}
        onMouseLeave={()=>showText(false)}
        >
        {text && <a className="text" >Raid your closet</a>}
            <video src={walk} autoplay="true" loop alt=""/>
            </span>)}
        {man&&(
            <span className="men-sl" 
            onMouseEnter={()=>showText(true)}
        onMouseLeave={()=>showText(false)}
            >
                    {text && <a className="text" >Mens outfit</a>}
                <video src={mens} autoplay="true" loop />
            </span>
        )}
            
        {woman&&(<span className="women-sl"
        onMouseEnter={()=>showText(true)}
        onMouseLeave={()=>showText(false)}
        >
        {text && <a className="text" >women outfit</a>}
            <video src={womans} autoplay="true" loop/>
        </span>)}

        {kids&&(<span className="kids-sl"
        onMouseEnter={()=>showText(true)}
        onMouseLeave={()=>showText(false)}
        >
        {text && <a className="text" >kids outfit</a>}
            <video src={kidz} autoplay="true" loop/>
        </span>)}
        {unisex&&(<span className="unisex-sl"
        onMouseEnter={()=>showText(true)}
        onMouseLeave={()=>showText(false)}
        >
        {text && <a className="text" >Unisex outfit</a>}
        <video src={unisexs} autoplay="true" loop/>
            </span>)}
        <div className="choices">
        <button className="hide-btn"
        onClick={()=>{
            setHide(true)
            showUnisex(false)
            showWoman(false)
            showMan(false)
            showKids(false)
        }}
        onMouseEnter={()=>{
            setHide(true)
            showUnisex(false)
            showWoman(false)
            showMan(false)
            showKids(false)
        }}
        >c</button>
        <button className="man-btn" onClick={
            ()=>{
                showMan(true)
                setHide(false)
                showWoman(false)
                showKids(false)
                showUnisex(false)
            }
            
        }
        onMouseEnter={()=>{showMan(true)
            setHide(false)
            showWoman(false)
            showKids(false)
            showUnisex(false)}}
        >m</button>
        <button className="women-btn" onClick={()=>{
            showWoman(true)
            showMan(false)
            showKids(false)
            showUnisex(false)
            setHide(false)
            }}
            onMouseEnter={()=>{
                showWoman(true)
                showMan(false)
                showKids(false)
                showUnisex(false)
                setHide(false)
            }}
            >w</button>
        <button className="kids-btn" onClick={()=>{
            showKids(true)
            showMan(false)
            showUnisex(false)
            showWoman(false)
            setHide(false)
            }}
            onMouseEnter={()=>{
                showKids(true)
                showMan(false)
                showUnisex(false)
                showWoman(false)
                setHide(false)
            }}
            >k</button> 
        <button className="unisex-btn"  onClick={()=>{
            showUnisex(true)
            showWoman(false)
            showMan(false)
            showKids(false)
            setHide(false)
            }}
            onMouseEnter={()=>{
            showUnisex(true)
            showWoman(false)
            showMan(false)
            showKids(false)
            setHide(false)
            }}
            >u</button>

       
        </div>
    </div>
  )
}

export default Slider