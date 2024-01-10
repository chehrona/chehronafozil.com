import styled from "styled-components";

export const LineOne = styled.div`
    overflow: hidden;
    margin: 0 auto;
    font-size: 5.875rem;
    font-weight: bold;
    left: 0.35rem;
    position: absolute;
    max-height: 7.2rem;
    bottom: ${({ bottom }) => bottom && `${bottom}rem`};

    @media (max-width: 480px) {
        font-size: 2.8rem;
        left: 1rem;
        max-height: 3.3rem;
    }
`;

export const DescLine = styled.div`
    font-size: 1.5rem;
    left: 0.35rem;
    white-space: pre-wrap;
    display: flex;
    justify-content: start;
    position: absolute;
    bottom: ${({ bottom }) => bottom && `${bottom}rem`};

    @media (max-width: 480px) {
        font-size: 1.45rem;
        white-space: pre-wrap;
        left: 1rem;
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
        height: 1.5rem;
        width: 1rem;
    }
`;