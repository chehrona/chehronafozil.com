import styled from "styled-components";
import { IntroTitle } from "../commonStyles";

export const LineOne = styled(IntroTitle)`
    overflow: hidden;
    margin: 0 auto;
    left: 0.35rem;
    position: absolute;
    max-height: 7.2rem;
    bottom: ${({ bottom }) => bottom && `${bottom}rem`};

    @media (max-width: 480px) {
        left: 0.75rem;
        max-height: 3.3rem;
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
        left: 0.75rem;
    }
`;

export const CursorOverlay = styled.div`
    width: 2rem;
    height: 3rem;
    position: absolute;
    bottom: 0rem;
    background-color: #212020;
    z-index: 10;

    @media (max-width: 480px) {
        height: 2rem;
        width: 1rem;
    }
`;