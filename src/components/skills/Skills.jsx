import React from "react";

// Styled components
import { Circle, LangWrapper, MainContainer, StyledIcon, TextBody, TextBox, ToolBox } from "./skillStyles";
import { PageTitle } from "../commonStyles";

// Helper
import { tech } from "../helper";
import { PageContainer } from "../../pages/pageStyles";

export default function Skills() {
    return (
        <PageContainer >
            <MainContainer>
                <TextBox>
                    <PageTitle>Some technologies I have been working with</PageTitle>
                    <TextBody>
                        I love creating products that scale beautifully and genuinely improve how people work and live
                    </TextBody>
                </TextBox>
                <ToolBox>
                    {tech.map((entry, i) => {
                        return (
                            <LangWrapper key={i}>
                                <Circle>
                                    <StyledIcon className={entry.icon}></StyledIcon>
                                </Circle>
                                <div>{entry.title}</div>
                            </LangWrapper>
                        )
                    })}
                </ToolBox>
            </MainContainer>
        </PageContainer>
    )
}