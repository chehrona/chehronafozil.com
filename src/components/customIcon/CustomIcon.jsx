import React from "react";
import { ReactComponent as GitHub } from './icons/github.svg';
import { ReactComponent as LinkedIn } from './icons/linkedin.svg';
import { ReactComponent as Mail } from './icons/mail.svg';
import { ReactComponent as CV } from './icons/cv.svg';

import { ReactComponent as Web } from './icons/web.svg';
import { ReactComponent as IOS } from './icons/ios.svg';
import { ReactComponent as Android } from './icons/android.svg';
import { ReactComponent as Link } from './icons/link.svg';

import { ReactComponent as Api } from './icons/api.svg';
import { ReactComponent as Aws } from './icons/aws.svg';
import { ReactComponent as Styled } from './icons/styled.svg';
import { ReactComponent as Meili } from './icons/meili.svg';
import Caddy from './icons/caddy.png';
import CaddyWhite from './icons/caddy_white.png';

const CustomIcon = ({ icon, size = '1.5rem', color = 'var(--white)' }) => {
    switch (icon) {
        case "cv": 
            return <CV fill={color} height={size} width={size} />
        case "github": 
            return <GitHub fill={color} height={size} width={size} />
        case "linkedin": 
            return <LinkedIn fill={color} height={size} width={size} />
        case "mail": 
            return <Mail fill={color} height={size} width={size} />
        
        case "web": 
            return <Web fill={color} height={size} width={size} />
        case "ios": 
            return <IOS fill={color} height={size} width={size} />
        case "android": 
            return <Android fill={color} height={size} width={size} />
        case "link": 
            return <Link fill={color} height={size} width={size} />

        case "api": 
            return <Api fill={color} height={size} width={size} />
        case "aws": 
            return <Aws fill={color} height={size} width={size} />
        case "styled": 
            return <Styled fill={color} height={size} width={size} />
        case "meili": 
            return <Meili fill={color} height={size} width={size} />
        case "caddy": 
            return <img src={Caddy} alt="Caddy" style={{height: size, width: size}} />;
        case "caddy_white": 
            return <img src={CaddyWhite} alt="Caddy" style={{height: size, width: size}} />;
        default:
            return null;
    }
}

export default CustomIcon;