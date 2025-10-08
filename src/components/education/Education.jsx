import React from "react";
import { educationList } from "../helper";

import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import { PageTitle } from "../commonStyles";

import { 
    EducationContainer,
    Link,
    School,
    EducationBox,
    DegreeWrapper,
    DegreeSubtitle,
    Cap,
} from "./educationStyles";
import { ButtonWrapper } from "../projects/projectStyles";

export default function Education() {
    return (
        <EducationContainer>
            <PageTitle>Education</PageTitle>
            {educationList.map((entry, i) => {
                return (
                    <EducationBox key={i + 1}>
                        <Cap icon={faGraduationCap} />
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
        </EducationContainer>
    )
}