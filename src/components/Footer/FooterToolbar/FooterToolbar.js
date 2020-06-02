import React from 'react'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import Logo from '../../Logo/logo'
import FooterItems from '../Footeritems/Footeritems'
import FacebookIcon from '../../SocailMediaIcons/FacebookIcon';
import InstagramIcon from '../../SocailMediaIcons/InstagramIcon';


const Footertoolbar =(props)=>(
    <header className="FooterToolbar">
        <Logo />
        <FooterItems/>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default Footertoolbar;