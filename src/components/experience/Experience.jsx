import React from "react";
import { experienceList } from "../helper";

import { useMediaQuery } from "react-responsive";

import { BodyText, PageTitle, SecondaryTitle } from "../commonStyles";

import { 
    WorkBox,
    Date,
    WorkWrapper,
    DescUnit,
	ExperienceContainer,
} from "./experienceStyles";
import { PageContainer } from "../../pages/pageStyles";

export default function Experience() {
    const isMobile = useMediaQuery({ query: `(max-width: 1024px)` });

    return (
        <PageContainer>
            <PageTitle>Professional background</PageTitle>
			<ExperienceContainer>
				{experienceList.map((entry, i) => {
					return (
						<WorkBox key={i + 2}>
							<Date>{entry?.dates}</Date>
							<WorkWrapper>
								<SecondaryTitle>{entry?.title}</SecondaryTitle>
								{isMobile ?(
									<BodyText color={'var(--highlight)'}>{entry?.place}</BodyText>
								) : 
									<BodyText style={{display: 'flex', gap: '0.25rem'}}>
										<BodyText color={'var(--highlight)'}>{entry?.place}</BodyText>
										<BodyText>{`- ${entry?.city}`}</BodyText>
									</BodyText>
								}
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
        </PageContainer>
    )
}