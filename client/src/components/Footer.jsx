import React from 'react';
import{useState}from'react';
function Footer() {
    const[contributors ,setContributor]=useState(false)
  return (
    <div className="footer">
        <ul 
        className="cl"
        onClick={() => {
            setContributor(true)
        }}
        onDoubleClick={() =>setContributor(false)}
        ><p>Contributors</p></ul>
        {contributors&&(
            <li>Davinci Developer</li>
        )}
        <span>Trademark @enigmasoftwaredevelopers 2022</span>
    </div>
  )
}

export default Footer