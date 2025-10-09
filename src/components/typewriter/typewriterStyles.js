import styled from "styled-components";
import { IntroTitle } from "../commonStyles";

export const TypewriterContainer = styled.div`
    position: relative;
    height: 100svh;
    width: 100%;
`;

export const LineOne = styled(IntroTitle)`
    margin: 0 auto;
    left: 0.35rem;
    position: absolute;
    max-height: 8rem;
    bottom: ${({ bottom }) => bottom && `${bottom}rem`};

    @media (max-width: 480px) {
        left: 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        left: 6rem;
        max-height: 7rem;
    }
`;

export const DescLine = styled.h2`
    left: 0.35rem;
    white-space: pre-wrap;
    display: flex;
    justify-content: start;
    position: absolute;
    bottom: ${({ bottom }) => bottom && `${bottom}rem`};

    @media (max-width: 480px) {
        white-space: pre-wrap;
        left: 0rem;
        font-size: var(--section);
    }
`;

export const CursorOverlay = styled.div`
    width: 2rem;
    height: 3rem;
    position: absolute;
    bottom: 1rem;
    left: -0.5rem;
    background-color: var(--blue);
    z-index: 10;

    @media (max-width: 480px) {
        height: 3rem;
        width: 1rem;
        bottom: 0.5rem;
    }
`;