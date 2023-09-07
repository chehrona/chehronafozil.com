import React from "react";

import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { certificateList } from "../helper";

import { 
    MainContainer,
    PageTitle,
    Link,
    CertWrapper,
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
                        <div>
                            {entry?.name}
                            <Company>freeCodeCamp</Company>
                        </div>
                        <Link target={'_blank'} href={entry?.link}>
                            <StyledIcon icon={faUpRightFromSquare} />     
                        </Link>
                    </CertWrapper>
                );
            })}
        </MainContainer>
    )
}