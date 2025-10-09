import styled from "styled-components";

export const MainContainer = styled.div`
    position: fixed;
    left: 0.7rem;
    bottom: 0rem;
    width: 2.5rem;
    text-align: center;
    z-index: 1000;

    @media (max-width: 480px) {
        position: relative;
        display: flex;
        left: 0rem;
        bottom: 0rem;
        text-align: unset;
        width: 100%;
        max-width: 100%;
        justify-content: center;
        gap: var(--page-gap);
        padding: var(--page-gap) 0rem;
    }
`;

export const SideLine = styled.div`
    width: 0.125rem;
    height: 3.625rem;
    background-color: var(--highlight);
    margin: 0 auto;

    @media (max-width: 480px) {
        display: none;
    }
`;

export const Link = styled.a`
    filter: brightness(60%);
    width: var(--section);
    height: var(--section);
    transition: filter 0.5s;

    &:hover {
        filter: brightness(100%);  
    }
`;