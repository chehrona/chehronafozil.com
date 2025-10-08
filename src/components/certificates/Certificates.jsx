import React from "react";

import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { certificateList } from "../helper";

import { PageTitle } from "../commonStyles";

import { 
    MainContainer,
    Link,
    CertWrapper,
    Company,
    StyledIcon,
    ListContainer
} from "./certificateStyles";

export default function Certificates() {
    return (
        <MainContainer>
            <PageTitle>Certificates</PageTitle>
            <ListContainer>
                {certificateList.map((entry, i) => {
                    return (
                        <CertWrapper key={i}>
                            <div>
                                {entry?.name}
                                <Company>freeCodeCamp
                                    <Link target={'_blank'} href={entry?.link}>
                                        <StyledIcon icon={faUpRightFromSquare} />     
                                    </Link>
                                </Company>
                                
                            </div>
                        </CertWrapper>
                    );
                })}
            </ListContainer>
        </MainContainer>
    )
}