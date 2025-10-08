import React from "react";

// Styled components
import {  MainContainer, Img } from "./logoStyles";

export default function Logo() {
    
    return (
        <MainContainer>
            <Img src={process.env.PUBLIC_URL + "logo.svg"} />
        </MainContainer>
    );
  }