import React from 'react'
import { FaCopyright, FaMoneyCheck, FaSort, FaStoreAlt, FaWallet } from 'react-icons/fa'

function Categories() {
  return (
    <div className="category" >
        <span className="cat1">price Range<span className='icons'><FaMoneyCheck/></span></span>
        <span className="cat2">brand<span className='icons'><FaCopyright/></span></span>
        <span className="cat3">Order<span className='icons'><FaSort/></span></span>
        <span className="cat4">Accessories<span className='icons'><FaWallet/></span></span>
        <span className="cat5">Veiw Cart<span className='icons'><FaStoreAlt/></span></span>
        
        
        
    </div>
  )
}

export default Categories