import React from "react";

// Styled components
import { Dot, Letter, MainContainer } from "./logoStyles";

export default function Logo() {
    return (
        <MainContainer>
            <Letter src="/letterC.svg" id="logo--letter-1" />
            <Dot src="/dot.svg" />
            <Letter src="/letterF.svg" top={"0.0125rem"} left={"0.1875rem"} id="logo--letter-2" />
        </MainContainer>
    )
}