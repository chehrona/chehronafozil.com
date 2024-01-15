import React from "react";
import { useMediaQuery } from "react-responsive";

import Logo from "../components/logo/Logo";
import SideNav from "../components/sideNav/SideNav";
import Typewriter from "../components/typewriter/Typewriter";

import { PageContainer } from "./pageStyles";

export default function FirstPage() {
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    return (
        <PageContainer id="firstPage">
            {!isMobile ? <SideNav /> : null}
            <a href={"#firstPage"}>
                <Logo />
            </a>
            <Typewriter />
        </PageContainer>
    )
}