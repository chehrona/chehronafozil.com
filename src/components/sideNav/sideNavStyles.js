import styled from "styled-components";

export const MainContainer = styled.div`
    position: fixed;
    left: 0.7rem;
    bottom: 0rem;
    width: 2.5rem;
    text-align: center;

    @media (max-width: 480px) {
        position: relative;
        display: flex;
        justify-content: center;
        gap: 1rem;
        width: 100%;
        left: 0rem;
        padding: 0rem 0.75rem 0.5rem 0rem;
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

    @media (max-width: 480px) {
        margin-left: 1rem;;
    }
`;