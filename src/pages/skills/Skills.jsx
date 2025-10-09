import React from "react";

// Styled components
import { Circle, LangWrapper, MainContainer, StyledIcon, TextBody, TextBox, ToolBox, Text } from "./skillStyles";
import { PageTitle } from "../../components/commonStyles";

// Helper
import { tech } from "../../components/helper";
import { PageContainer } from "../landing/pageStyles";
import CustomIcon from "../../components/customIcon/CustomIcon";
import { useMediaQuery } from "react-responsive";

export default function Skills() {
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    return (
        <PageContainer >
            <MainContainer>
                <TextBox>
                    <PageTitle>Some technologies I have been working with</PageTitle>
                    <TextBody>
                        I love creating products that scale beautifully and genuinely improve how people work and live.
                    </TextBody>
                </TextBox>
                <ToolBox>
                    {tech.map((entry, i) => {
                        return (
                            <LangWrapper key={i} style={{ fontSize: entry.icon.startsWith('styled') ? (isMobile ? '0.87rem' : '1.05rem') : '1.25rem'}}>
                                <Circle>
                                    {!entry.icon.startsWith('devicon') ? <CustomIcon icon={entry.icon} color="#fff" size={isMobile ? '2rem' : '1.5rem'} /> : <StyledIcon className={entry.icon} />}
                                </Circle>
                                <Text>{entry.title}</Text>
                            </LangWrapper>
                        )
                    })}
                </ToolBox>
            </MainContainer>
        </PageContainer>
    )
}