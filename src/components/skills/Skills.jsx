import React from "react";

// Styled components
import { Circle, CircleWrap, LangWrapper, MainContainer, StyledIcon, TextBody, TextBox, ToolBox } from "./skillStyles";
import { PageTitle } from "../commonStyles";

// Helper
import { tech } from "../helper";

export default function Skills() {
    return (
        <MainContainer>
            <TextBox>
                <PageTitle>My toolbox to bring your projects to life</PageTitle>
                <TextBody>
                    As a self-taught developer, I dabbled a bit with different areas of programming, 
                    including data analytics. This allowed me to find my passion in web-development. I love creating websites that offer great user experience
                    and have a maintainable codebase.
                </TextBody>
            </TextBox>
            <ToolBox>
                {tech.map((entry, i) => {
                    return (
                        <LangWrapper key={i}>
                            <CircleWrap>
                                <Circle>
                                    <StyledIcon className={entry.icon}></StyledIcon>
                                </Circle>
                            </CircleWrap>
                            <div>{entry.title}</div>
                        </LangWrapper>
                    )
                })}
            </ToolBox>
        </MainContainer>  
    )
}