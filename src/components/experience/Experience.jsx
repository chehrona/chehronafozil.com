import React from "react";
import { experienceList } from "../helper";

import { useMediaQuery } from "react-responsive";

import { BodyText, PageTitle, SecondaryTitle } from "../commonStyles";

import { 
    WorkBox,
    Date,
    WorkWrapper,
    DescUnit,
    ExperienceContainer
} from "./experienceStyles";

export default function Experience() {
    const isMobile = useMediaQuery({ query: `(max-width: 1024px)` });

    return (
        <ExperienceContainer>
            <PageTitle>Professional background</PageTitle>
            {experienceList.map((entry, i) => {
                return (
                    <WorkBox key={i + 2}>
                        <Date>{entry?.dates}</Date>
                        <WorkWrapper>
                            <SecondaryTitle>{entry?.title}</SecondaryTitle>
                            <BodyText color={1}>{isMobile ? entry?.place : `${entry?.place} - ${entry?.city}`}</BodyText>
                            {isMobile ? <BodyText color={1}>{entry?.city}, {entry?.dates}</BodyText> : null}
                            <BodyText>
                                {entry?.desc.map((exp, i) => {
                                    return <DescUnit key={i + 3} dangerouslySetInnerHTML={{__html: exp}} />
                                })}
                            </BodyText>
                        </WorkWrapper>
                    </WorkBox>
                );
            })}
        </ExperienceContainer>
    )
}