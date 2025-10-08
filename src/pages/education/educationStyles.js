import styled from "styled-components";

export const EducationBox = styled.div`
    display: flex;
    gap: 0.5rem;
    padding: 1rem 0rem;

    @media (max-width: 480px) {
        padding: 0rem 0.75rem;
    }
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

    @media (max-width: 480px) {
        display: none;
    }
`;

export const DegreeSubtitle = styled.div`
    font-weight: normal;
    font-size: var(--body);

    @media (max-width: 480px) {
        margin-left: 0rem;
        font-size: 1.2rem;
    }
`;

export const School = styled.div`
    font-size: var(--body);
    font-weight: normal;
    color: var(--white);

    @media (max-width: 480px) {
        margin-left: 0rem;
    }
`;

export const Link = styled.a`
    &:link, &:visited {
        color: var(--blue);
        text-decoration: none;
    }
`;