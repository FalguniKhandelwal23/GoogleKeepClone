import React from "react";
import images from './images.png';
const Header=()=>{
    return(<>
        <div className="header">
          
          <img src={images}  alt ="logo" height="50" width="60"/>
          
          <h1>
            Memo
          </h1>
          </div>
        
    </>)
}
export default Header;