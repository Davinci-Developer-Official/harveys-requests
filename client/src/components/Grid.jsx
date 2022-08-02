import React from 'react';
import {useNavigate} from 'react-router-dom'
function Grid() {
  let redirect = useNavigate();
  return (
    <div className="grid-box">
        <div className="item1">
           <p> Match Clothing</p>
            
        </div>
        <div className="grid">
        <div className="grid-item1">Competition</div>
        <div className="grid-item2">Chat</div>
        <div className="grid-item3">Features</div>
        <div className="grid-item4" 
        onClick={()=>{
          redirect('/store')
        }}
        >Store</div>
        <div className="grid-item5">Preferences</div>
        </div>
    </div>
  )
}

export default Grid
