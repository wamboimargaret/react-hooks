import React from 'react';
import'./index.css';
const Navigationbar = () => {
  return (
    <nav className="navbar">

    <li><a href='/login'>Login</a></li>
    <li><a href='/product'>Product</a></li>
    <li><a href='/addproduct'>Add product</a></li>
      
</nav> 
  );
};
export default Navigationbar;
