import React from "react";
import { educationList } from "../../components/helper";

import { PageTitle } from "../../components/commonStyles";

import { 
    Link,
    School,
    EducationBox,
    DegreeWrapper,
    DegreeSubtitle,
    Degree,
} from "./educationStyles";
import { ButtonWrapper } from "../projects/projectStyles";
import { PageContainer } from "../landing/pageStyles";

export default function Education() {
    return (
        <PageContainer>
            <PageTitle>Education</PageTitle>
            {educationList.map((entry, i) => {
                return (
                    <EducationBox key={i + 1}>
                        <Degree />
                        <DegreeWrapper>
                            <div>
                                {entry?.title}
                            </div>
                            <DegreeSubtitle>
                                {entry?.subtitle}
                            </DegreeSubtitle>
                            <School>
                                {entry?.uni}
                            </School>
                            {entry?.buttons &&
                                <Link target="_blank" href={entry?.buttons.link}>
                                    <ButtonWrapper>{entry?.buttons.name}</ButtonWrapper>
                                </Link>
                            }
                        </DegreeWrapper>
                    </EducationBox>
                );
            })}
        </PageContainer>
    )
}