import styled from "styled-components"

export const MainContainer = styled.div`
    position: fixed;
    top: 1.25rem;
    left: 1.25rem;
    cursor: pointer;

    @media (max-width: 480px) {
        top: 0.65rem;
        left: 0.65rem;
        position: relative;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        
    }
`;

export const Letter = styled.img`
    position: absolute;
    width: 1.25rem;
    height: 2.3125rem;
    top: ${({ top }) => top && top};
    left: ${({ left }) => left && left};
`;

export const Dot = styled.img`
    width: 0.3125rem;
    position: absolute;
    top: 0.5rem;
    left: 0.5625rem;
`;