import React from 'react';

const style = {
    header:{
      background: "red"
    }, 
    h1:{
      fontSize: "100px"
    },
  };

  function Header() {
    return (
      <header className="header" style = {style.header}>
        <h1 style = {style.h1}>Welcome</h1>
      </header>
    );
  }
  
  export default Header;