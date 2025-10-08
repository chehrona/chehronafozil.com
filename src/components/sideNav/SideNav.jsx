import React from "react";

// Styled components
import { MainContainer, SideLine, StyledGitHub, StyledLinkedIn, StyledMail } from "./sideNavStyles";

export default function SideNav() {
    return (
        <MainContainer>
            <a target="_blank" href="https://github.com/chehrona">
                <StyledGitHub />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/chehrona/">
                <StyledLinkedIn />
            </a>
            <a target="_blank" href="mailto:chehronafozil@gmail.com">
                <StyledMail />
            </a>
            <SideLine />
        </MainContainer>  
    )
}