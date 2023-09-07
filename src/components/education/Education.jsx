import React from "react";
import { educationList } from "../helper";

import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import { 
    EducationContainer,
    PageTitle,
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
                    <EducationBox>
                        <DegreeWrapper>
                            <Cap icon={faGraduationCap} />
                            <div>
                                {entry?.title}
                                <DegreeSubtitle>
                                    {entry?.subtitle}
                                </DegreeSubtitle>
                            </div>
                        </DegreeWrapper>
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