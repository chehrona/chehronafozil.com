import styled from "styled-components";

export const Typewriter = styled.div`
    position: absolute;
    height: 40vh;
    text-align: left;
    bottom: 4.05rem;
    left: -0.5rem;
`;

export const LineOne = styled.div`
    overflow: hidden;
    line-height: 6rem;
    margin: 0 auto;
    font-size: 5.875rem;
    font-weight: bold;
    display: flex;
    justify-content: start;
    bottom: 21rem;
    left: -0.5rem;
    position: absolute;
`;

export const LineTwo = styled.div`
    overflow: hidden;
    line-height: 6rem;
    margin: 0 auto;
    font-size: 5.875rem;
    font-weight: bold;
    white-space: nowrap;
    display: flex;
    justify-content: start;
    bottom: 15rem;
    left: -0.5rem;
    position: absolute;
`;

export const DescLine = styled.div`
    font-size: 1.5rem;
    margin-top: 7rem;
    margin-left: 0.35rem;
    white-space: nowrap;
    display: flex;
    justify-content: start;
    bottom: 6rem;
    position: absolute;
`;

export const CursorOverlay = styled.div`
    width: 2rem;
    height: 3rem;
    position: absolute;
    bottom: 7.7rem;
    background-color: #212020;
    z-index: 10;
`;