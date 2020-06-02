import React from 'react';
import InstagramIcon from '../SocailMediaIcons/IgIcon2.png';

const instagramIcon = (props) => (
   
    <div className="NavLogo">
        <a href="https://www.instagram.com/el_lagunero_antojos/" target="_blank" rel="noopener" >
            <img src={InstagramIcon} alt="Facebook Icon"/>
        </a>
    </div>
);

export default instagramIcon;