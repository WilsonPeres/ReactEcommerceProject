import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/logo'

const toolbar =(props)=>(
    <div className="Toolbar">
        <Logo />
        <nav>
        <NavigationItems/>
        </nav>
    </div>
);

export default toolbar;