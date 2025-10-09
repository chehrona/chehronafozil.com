import React from "react";
import { useMediaQuery } from "react-responsive";

import SideNav from "../sideNav/SideNav";

import { StyledFooter, Text } from "./footerStyles";

export default function Footer() {
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    return (
        <StyledFooter>
            {isMobile ? <SideNav /> : null}
            <Text>Designed & Built by Chehrona Fozil</Text>
        </StyledFooter>
    )
}