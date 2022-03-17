import React from "react";


export default function Navbar(props) {
  const {countItem,showCart,setShowCart} = props;

  return (
    <>
      <nav className="navbar ">
        <div className="container">
          <a className="navbar-brand">Electronics</a>
       
            <ul className="navbar-list">
              <li>Home</li>
              <li>
                <i className="bi bi-cart2" onClick={()=>{setShowCart(!showCart)}}>  </i>
                <span>{countItem}</span>
              </li>
              <li><i className="bi bi-person"></i></li>
            </ul>
    
        </div>
      </nav>
    </>
  );
}
