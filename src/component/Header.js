import React from "react";
import "../App.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h2>LOGO</h2>
      </div>
      <div className="address">
        <h6>Location</h6>
      </div>
      
      <div className="searchbox" >
      <div className="office-product">
        <label>
            <h3>Office Product</h3>
        </label>
      </div>
        <input className="input" style={{height:"30px",width:"300px", borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}} placeholder="search here" />
        <button className="search" style={{height:"32px",width:"80px", borderTopRightRadius:"5px",borderBottomRightRadius:"5px"}}> Search</button> 
      </div>
      <div className="header-buttons">
       <a href=""><h1>A</h1></a> 
       <a href=""><h1>M</h1></a> 
       {/* <a href=""><h1>N</h1></a> 
       <a href=""><h1>B</h1></a>  */}
        
      </div>
    </div>
  );
}

export default Header;
