import React from "react";
import { experienceList } from "../helper";

import { useMediaQuery } from "react-responsive";

import { 
    ExperienceContainer,
    PageTitle,
    Date,
    WorkBox,
    Location,
    WorkWrapper,
    WorkTitle,
    WorkDesc,
    DescUnit
} from "./experienceStyles";

export default function Experience() {
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    return (
        <ExperienceContainer>
            <PageTitle>Professional background</PageTitle>
            {experienceList.map((entry, i) => {
                return (
                    <WorkBox key={i + 2}>
                        <Date>{entry?.dates}</Date>
                        <WorkWrapper>
                            <WorkTitle>{entry?.title}</WorkTitle>
                            <Location>{isMobile ? entry?.place : entry?.place - entry?.dates}</Location>
                            {isMobile ? <Location>{entry?.city}, {entry?.dates}</Location> : null}
                            <WorkDesc>
                                {entry?.desc.map((exp, i) => {
                                    return <DescUnit key={i + 3} dangerouslySetInnerHTML={{__html: exp}} />
                                })}
                            </WorkDesc>
                        </WorkWrapper>
                    </WorkBox>
                );
            })}
        </ExperienceContainer>
    )
}