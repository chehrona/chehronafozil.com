import React from "react";
import { useMediaQuery } from "react-responsive";

import SideNav from "../sideNav/SideNav";

import { StyledFooter } from "./footerStyles";

export default function Footer() {
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    return (
        <StyledFooter>
            {isMobile ? <SideNav /> : null}
            <div>Designed & Built by Chehrona Fozil</div>
        </StyledFooter>
    )
}