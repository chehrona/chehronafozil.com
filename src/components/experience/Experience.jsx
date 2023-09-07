import React from "react";
import { experienceList } from "../helper";

import { 
    ExperienceContainer,
    PageTitle,
    Date,
    WorkBox,
    Location,
    WorkWrapper,
    WorkTitle,
    WorkDesc,
} from "./experienceStyles";

export default function Experience() {
    return (
        <ExperienceContainer>
            <PageTitle>Professional background</PageTitle>
            {experienceList.map((entry, i) => {
                return (
                    <WorkBox key={i + 2}>
                        <Date>{entry?.dates}</Date>
                        <WorkWrapper>
                            <WorkTitle>{entry?.title}</WorkTitle>
                            <Location>{entry?.place}</Location>
                            <WorkDesc>
                                {entry?.desc.map((exp, i) => {
                                    return <div key={i + 3}>{exp}</div>
                                })}
                            </WorkDesc>
                        </WorkWrapper>
                    </WorkBox>
                );
            })}
        </ExperienceContainer>
    )
}