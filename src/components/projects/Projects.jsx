import React from "react";
import { projectList } from "../helper";

import { 
    ProjectContainer,
    PageTitle,
    ProjectBox,
    ProjectDesc,
    ProjectInfo,
    ProjectName,
    TechUsed,
    StyledIcon,
    Link,
    ButtonName,
    ButtonWrapper,
    ButtonBox,
    ImageWrapper,
    ProjectImage,
} from "./projectStyles";

export default function Projects() {
    return (
        <ProjectContainer>
            <PageTitle>Things I've built</PageTitle>
            {projectList.map((entry, i) => {
                return (
                    <ProjectBox right={entry.image.side}>
                        <ProjectInfo key={i}>
                            <ProjectName>{entry.title}</ProjectName>
                            <ProjectDesc>{entry.desc}</ProjectDesc>
                            <TechUsed>
                                {entry.tech.map((item, j) => {
                                    return <StyledIcon key={j} className={item}></StyledIcon>
                                })}
                            </TechUsed>
                            <ButtonBox>
                                {entry.buttons.map((button, k) => {
                                    return (
                                        <Link key={k} target="_blank" href={button.link}>
                                            <ButtonWrapper>
                                                <StyledIcon view={true} className={button.icon}></StyledIcon>
                                                <ButtonName>{button.name}</ButtonName>
                                            </ButtonWrapper>
                                        </Link>
                                    );
                                })}
                            </ButtonBox>
                        </ProjectInfo>
                        <ImageWrapper>
                            <ProjectImage src={entry?.image.src} />
                        </ImageWrapper>
                    </ProjectBox>
                );
            })}
        </ProjectContainer>
    )
}