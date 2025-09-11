import React from "react";

// Styled components
import { MainContainer, SideLine, StyledGitHub, StyledLinkedIn, StyledMail } from "./sideNavStyles";

export default function SideNav() {
    return (
        <MainContainer>
            <a target="_blank" href="https://github.com/chehrona">
                <StyledGitHub />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/chehronai-fozil-a952a7a3/">
                <StyledLinkedIn />
            </a>
            <a target="_blank" href="mailto:chehronaifozil@gmail.com">
                <StyledMail />
            </a>
            <SideLine />
        </MainContainer>  
    )
}