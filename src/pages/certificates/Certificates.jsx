import React from "react";

import { certificateList } from "../../components/helper";

import { PageTitle } from "../../components/commonStyles";

import { 
    MainContainer,
    Link,
    CertWrapper,
    Company,
    StyledIcon,
    ListContainer
} from "./certificateStyles";
import { PageContainer } from "../landing/pageStyles";
import CustomIcon from "../../components/customIcon/CustomIcon";

export default function Certificates() {
    return (
        <PageContainer>
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
                                        <StyledIcon>
                                            <CustomIcon icon={'link'} size="1rem" color={'var(--highlight)'} />
                                        </StyledIcon>     
                                    </Link>
                                </Company>
                                
                            </div>
                        </CertWrapper>
                    );
                })}
            </ListContainer>
        </MainContainer></PageContainer>
    )
}