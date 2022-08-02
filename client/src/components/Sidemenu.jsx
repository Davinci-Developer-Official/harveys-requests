import React from 'react'
import {useState , useEffect} from 'react'
import{useNavigate }from 'react-router-dom';
import{FaMars,FaVenus} from 'react-icons/fa'
function Sidemenu() {
    const [show , setShow]=useState(false);
    const [women , showWomen]=useState(false);
    const [kids ,showKids]=useState(false);
    const womens= ()=>{
        showWomen(true);
    }
    const kid= ()=>{
        showKids(true);
    }
    const veiw = ()=>{
        setShow(true)
        
    }
    const redirect = useNavigate()
    
  return (
    <div className="side-menu">
        <ul className="mo"
        onClick={()=>redirect('/men')}
        onMouseEnter={veiw}
        onMouseLeave={veiw=>setShow(false)}
        style={{cursor: 'pointer'}}
        >
            Men's Outfits<br/><FaMars/>
            {show &&(<>
            <li>Torso</li>
            <li>chinos</li>
            <li>inner wear</li>
            <li>socks</li>
            <li>shoes</li>
            </>)}
        </ul>
        <ul className="wo"
        onMouseEnter={womens}
        onMouseLeave={womens=>showWomen(false)}
        style={{cursor: 'pointer'}}>
            Women's Outfits <FaVenus/>
            {women &&(<>
            <li>Torso</li>
            <li>chinos</li>
            <li>inner wear</li>
            <li>socks</li>
            <li>shoes</li>
            </>)}
        </ul>
        <ul className="ko"
        onMouseEnter={kid}
        onMouseLeave={kid=>showKids(false)}
        style={{cursor: 'pointer'}}>
        
            Kids Outfits 
            {kids &&(<>
            <li>Torso</li>
            <li>chinos</li>
            <li>inner wear</li>
            <li>socks</li>
            <li>shoes</li>
            </>)}
        </ul>
        <div  className="om">Outfit Maker</div>
    </div>
  )
}

export default Sidemenu