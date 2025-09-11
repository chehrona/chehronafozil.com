import React from "react";
import { educationList } from "../helper";

import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import { PageTitle } from "../commonStyles";

import { 
    EducationContainer,
    Link,
    ButtonWrapper,
    School,
    EducationBox,
    DegreeWrapper,
    DegreeSubtitle,
    Cap,
} from "./educationStyles";

export default function Education() {
    return (
        <EducationContainer>
            <PageTitle>Education</PageTitle>
            {educationList.map((entry, i) => {
                return (
                    <EducationBox key={i + 1}>
                        <DegreeWrapper>
                            <Cap icon={faGraduationCap} />
                            <div>
                                {entry?.title}
                            </div>
                        </DegreeWrapper>
                        <DegreeSubtitle>
                            {entry?.subtitle}
                        </DegreeSubtitle>
                        <School>
                            {entry?.uni}
                        </School>
                        {entry?.buttons &&
                                <Link target="_blank" href={entry?.buttons.link}>
                                <ButtonWrapper>
                                    <div>{entry?.buttons.name}</div>
                                </ButtonWrapper>
                            </Link>
                        }
                    </EducationBox>
                );
            })}
        </EducationContainer>
    )
}