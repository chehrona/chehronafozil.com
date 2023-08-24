import React from "react";
import Logo from "../components/logo/Logo";
import SideNav from "../components/sideNav/SideNav";

import { PageContainer } from "./pageStyles";
import Typewriter from "../components/typewriter/Typewriter";

export default function FirstPage() {
    return (
        <PageContainer id="firstPage">
            <SideNav />
            <a href={"#firstPage"}>
                <Logo />
            </a>
            <Typewriter />
        </PageContainer>
    )
}