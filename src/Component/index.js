import React, { useState } from 'react'
import Navbar  from './Navbar'
import ProductPage from './ProductPage'

function Main() {
    const[showCart,setShowCart]=useState(false)
    const[countItem,setCountItem]=useState(0)

  return (
    <>
    <Navbar showCart={showCart} setShowCart={setShowCart} countItem={countItem}/>
    <ProductPage showCart={showCart} setShowCart={setShowCart} countItem={countItem} setCountItem={setCountItem} />
    </>
  )
}

export default Main