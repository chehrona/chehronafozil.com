import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    align-items: flex-start;
    position: relative;
    justify-content: space-between;
    margin-bottom: 1rem;

    @media (max-width: 480px) {
        flex-direction: column;
    }
`;

export const TextBox = styled.div`
    width: 45%;
    text-align: left;

    @media (max-width: 480px) {
        margin-top: -1.75rem;
        width: 100%;
    }
`;

export const ToolBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    justify-content: start;

    @media (max-width: 480px) {
        width: 100%;
        padding: 0.5rem;
        justify-content: center;
    }
`;

export const TextBody = styled.div`
    margin-top: 2rem;
    color: #cfcdcd;

    @media (max-width: 480px) {
        font-size: 1.25rem;
        line-height: 1.75rem;
        margin: 2rem 0.75rem 1rem 0.75rem;
    }
`;

export const LangWrapper = styled.div`
    width: 7.5rem;
    height: 8.75rem;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 1.875rem;

    @media (max-width: 480px) {
        font-size: 1.25rem;
    }
`;

export const CircleWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 10rem);
    grid-gap: 5rem;
    width: 6.25rem;
    height: 6.25rem;
    background: #cfcdcd;
    border-radius: 50%;

    @media (max-width: 480px) {
        width: 6rem;
        height: 6rem;
    }
`;

export const Circle = styled.div`
    width: 5.25rem;
    height: 5.25rem;
    border-radius: 50%;
    background: #212020;
    line-height: 7.5rem;
    text-align: center;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    position: absolute;
    z-index: 100;
    font-weight: 700;
    font-size: 2em;

    @media (max-width: 480px) {
        width: 5rem;
        height: 5rem;
    }
`;

export const StyledIcon = styled.i`
    font-size: 3.125rem;
    position: absolute;
    color: white;
    background-color: #212020;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;