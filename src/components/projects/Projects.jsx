import React from "react";
import { projectList } from "../helper";

import { useMediaQuery } from "react-responsive";

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
    StyledImg
} from "./projectStyles";

export default function Projects() {
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    return (
        <ProjectContainer>
            <PageTitle>Things I've built</PageTitle>
            {projectList.map((entry, i) => {
                return (
                    <ProjectBox right={entry.image.side}>
                        <ProjectInfo key={i}>
                            {!isMobile ? <ProjectName>{entry.title}</ProjectName> : null}
                            <ProjectDesc dangerouslySetInnerHTML={{__html: entry.desc}}></ProjectDesc>
                            <TechUsed>
                                {entry.tech.map((item, j) => {
                                    if (item.startsWith("/")) {
                                        return <StyledImg key={j} src={process.env.PUBLIC_URL + item}></StyledImg>
                                    } else {
                                        return <StyledIcon key={j} className={item}></StyledIcon>
                                    }
                                })}
                            </TechUsed>
                            <ButtonBox>
                                {entry.buttons.map((button, k) => {
                                    return (
                                        <Link key={k} target={"_blank"} href={button.link}>
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
                            {isMobile ? <ProjectName>{entry.title}</ProjectName> : null}
                            <ProjectImage src={process.env.PUBLIC_URL + entry?.image.src} />
                        </ImageWrapper>
                    </ProjectBox>
                );
            })}
        </ProjectContainer>
    )
}