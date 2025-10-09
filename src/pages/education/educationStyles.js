import styled from "styled-components";

export const EducationBox = styled.div`
    display: flex;
    gap: 0.5rem;
    padding: var(--page-gap) 0rem;
`;

export const DegreeWrapper = styled.div`
    font-size: var(--section);
    line-height: var(--section);
`;

export const Degree = styled.div`

    &::before {
        content: '▹';
        color: var(--highlight);
        position: relative;
        top: -0.72rem;
    }
`;

export const DegreeSubtitle = styled.div`
    font-weight: normal;
    font-size: var(--body);
`;

export const School = styled.div`
    font-size: var(--body);
    font-weight: normal;
    color: var(--white);
`;

export const Link = styled.a`

    &:link, &:visited {
        color: var(--blue);
        text-decoration: none;
    }
`;