import React from "react";

// Styled components
import { MainContainer, SideLine, Link } from "./sideNavStyles";
import CustomIcon from "../customIcon/CustomIcon";

export default function SideNav() {
    return (
        <MainContainer>
            <Link target="_blank" href={process.env.PUBLIC_URL + 'cv.pdf'}>
                <CustomIcon icon="cv" />
            </Link>
            <Link target="_blank" href="https://github.com/chehrona">
                <CustomIcon icon="github" />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/chehrona/">
                <CustomIcon icon="linkedin" />
            </Link>
            <Link target="_blank" href="mailto:chehronafozil@gmail.com">
                <CustomIcon icon="mail" />
            </Link>
            <SideLine />
        </MainContainer>  
    )
}