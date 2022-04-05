import React from 'react'
import "./Button.css";
import "./Card"

const Button = () => {
  return (
    <div>
        
        <button onClick={() =>window.location.reload(false)}  className="btn first">Random</button>

    </div>
  )
}

export default Button 