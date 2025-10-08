import React from "react";

// Styled components
import { Circle, LangWrapper, MainContainer, StyledIcon, TextBody, TextBox, ToolBox } from "./skillStyles";
import { PageTitle } from "../../components/commonStyles";

// Helper
import { tech } from "../../components/helper";
import { PageContainer } from "../landing/pageStyles";
import CustomIcon from "../../components/customIcon/CustomIcon";

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
                                    {!entry.icon.startsWith('devicon') ? <CustomIcon icon={entry.icon} color="#fff" /> : <StyledIcon className={entry.icon} />}
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