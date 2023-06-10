import React, { useState } from "react";
import './Navbar.css'

function Navbar() {
  const [burgerclass, setBurgerclass] = useState("burger-bar unclicked");
  const [menuclass, setMenuclass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu=()=>{
    if(!isMenuClicked){
      setBurgerclass("burger-bar clicked")
      setMenuclass("menu visible")
    }else{
      setBurgerclass("burger-bar unclicked")
      setMenuclass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burgerclass}></div>
          <div className={burgerclass}></div>
          <div className={burgerclass}></div>
        </div>
      </nav>
      <div className={menuclass}>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact</h3>
      </div>
    </div>
  );
}

export default Navbar;
