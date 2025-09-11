import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { projectList } from '../helper';

import { PageTitle, SecondaryTitle } from '../commonStyles';

import {
    ProjectContainer,
    ProjectBox,
    ProjectDesc,
    ProjectInfo,
    TechUsed,
    StyledIcon,
    Link,
    ButtonName,
    ButtonWrapper,
    ButtonBox,
    ImageWrapper,
    ProjectImage,
    StyledImg,
    StyledTooltip,
} from './projectStyles';

export default function Projects() {
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    return (
        <ProjectContainer>
            <PageTitle align={'right'}>Things I've built</PageTitle>
            {projectList.map((entry, i) => {
                return (
                    <ProjectBox right={entry.image.side}>
                        <ProjectInfo key={i}>
                            {!isMobile ? (
                                <SecondaryTitle>{entry.title}</SecondaryTitle>
                            ) : null}
                            <ProjectDesc
                                dangerouslySetInnerHTML={{ __html: entry.desc }}
                            ></ProjectDesc>
                            <TechUsed>
                                {entry.tech.map((item, j) => {
                                    return (
                                        <StyledTooltip
                                            arrow
                                            placement="top"
                                            title={item.name}
                                        >
                                            {item.icon.startsWith('/icons') ? (
                                                <StyledImg
                                                    key={j}
                                                    src={
                                                        process.env.PUBLIC_URL +
                                                        item.icon
                                                    }
                                                />
                                            ) : (
                                                <StyledIcon
                                                    key={j}
                                                    className={item.icon}
                                                ></StyledIcon>
                                            )}
                                        </StyledTooltip>
                                    );
                                })}
                            </TechUsed>
                            <ButtonBox>
                                {entry.buttons.map((button, k) => {
                                    return (
                                        <Link
                                            key={k}
                                            target={'_blank'}
                                            href={button.link}
                                        >
                                            <ButtonWrapper>
                                                <StyledIcon
                                                    view={true}
                                                    className={button.icon}
                                                ></StyledIcon>
                                                <ButtonName>
                                                    {button.name}
                                                </ButtonName>
                                            </ButtonWrapper>
                                        </Link>
                                    );
                                })}
                            </ButtonBox>
                        </ProjectInfo>
                        <ImageWrapper>
                            {isMobile ? (
                                <SecondaryTitle>{entry.title}</SecondaryTitle>
                            ) : null}
                            <ProjectImage
                                src={process.env.PUBLIC_URL + entry?.image.src}
                            />
                        </ImageWrapper>
                    </ProjectBox>
                );
            })}
        </ProjectContainer>
    );
}
