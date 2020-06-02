import React from 'react';
import NavigationItem from "./NavigationItem";


const navigationItems = () =>(
    
    <ul className="NavigationItems">
       <NavigationItem link="/" >Home</NavigationItem>
       <NavigationItem link="/products" >Menu</NavigationItem>
       <NavigationItem link="/contactpage" >Contact</NavigationItem>
    </ul>
);

export default navigationItems;