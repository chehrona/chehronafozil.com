import styled from "styled-components";

export const MainContainer = styled.div`
    margin-bottom: 10rem;

    @media (max-width: 480px) {
        margin-bottom: 5rem;
    }
`;

export const CertWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    line-height: calc(1.25 * var(--body));

    &::before {
        content: '▹';
        color: var(--highlight);
        position: relative;
        top: -0.75rem;
    }
`;

export const Company = styled.span`
    color: var(--white);
    position: relative;
`;

export const Link = styled.a`
    position: absolute;
    bottom: 0rem;

    &:link, &:visited {
        color: var(--blue);
        text-decoration: none;
    }
`;

export const StyledIcon = styled.div`
    margin:  0rem 0.5rem 0.5rem 0.5rem;
`;

export const ListContainer = styled.div`
    padding-top: var(--page-gap);
`;