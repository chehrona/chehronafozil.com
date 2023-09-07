import React from "react";

import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { certificateList } from "../helper";

import { 
    MainContainer,
    PageTitle,
    Link,
    CertWrapper,
    CertName,
    Company,
    StyledIcon,
} from "./certificateStyles";

export default function Certificates() {
    return (
        <MainContainer>
            <PageTitle>Certificates</PageTitle>
            {certificateList.map((entry, i) => {
                return (
                    <CertWrapper key={i}>
                        <CertName>
                            {entry?.name}
                            <Company>freeCodeCamp</Company>
                        </CertName>
                        <Link target={'_blank'} href={entry?.link}>
                            <StyledIcon icon={faUpRightFromSquare} />     
                        </Link>
                    </CertWrapper>
                );
            })}
        </MainContainer>
    )
}