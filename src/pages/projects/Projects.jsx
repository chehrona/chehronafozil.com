import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { projectList } from '../../components/helper';

import { PageTitle, SecondaryTitle } from '../../components/commonStyles';

import {
    ProjectBox,
    ProjectDesc,
    ProjectInfo,
    TechUsed,
    StyledIcon,
    Link,
    ButtonWrapper,
    ButtonBox,
    ImageWrapper,
    ProjectImage,
    StyledTooltip,
    ProjectContainer,
    ButtonName
} from './projectStyles';
import { PageContainer } from '../landing/pageStyles';
import CustomIcon from '../../components/customIcon/CustomIcon';

export default function Projects() {
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    return (
        <PageContainer>
            <PageTitle>Things I've built</PageTitle>
            <ProjectContainer>
                {projectList.map((entry, i) => {
                    return (
                        <ProjectBox right={entry.image.side} key={`project_${i}`}>
                            <ProjectInfo key={i}>
                                {!isMobile ? (
                                    <SecondaryTitle>{entry.title}</SecondaryTitle>
                                ) : null}
                                <ProjectDesc
                                    dangerouslySetInnerHTML={{ __html: entry.desc }}
                                />
                                <TechUsed>
                                    {entry.tech.map((item, j) => {
                                        return (
                                            <StyledTooltip
                                                arrow
                                                placement="top"
                                                title={item.name}
                                            >
                                                {!item.icon.startsWith('devicon') ? (
                                                    <CustomIcon
                                                        key={j}
                                                        icon={item.icon}
                                                    />
                                                ) : (
                                                    <StyledIcon
                                                        key={j}
                                                        className={item.icon}
                                                    />
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
                                                    <CustomIcon
                                                        icon={button.icon}
                                                        color={"var(--blue)"}
                                                        size={'1.55rem'}
                                                    />
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
                                    src={`${process.env.PUBLIC_URL}projects/${entry?.image.src}`}
                                />
                            </ImageWrapper>
                        </ProjectBox>
                    );
                })}
            </ProjectContainer>
        </PageContainer>
    );
}
