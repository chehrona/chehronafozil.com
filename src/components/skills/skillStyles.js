import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    align-items: flex-start;
    position: relative;
    margin-top: 5rem;
    margin-bottom: 5rem;
`;

export const TextBox = styled.div`
    width: 38%;
    margin-right: 5.625rem;
    text-align: left;
`;

export const ToolBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    justify-content: space-between; 
`;

export const Title = styled.div`
    font-size: 2.75rem;
    font-weight: bold;
`;

export const TextBody = styled.div`
    margin-top: 2.5rem;
    font-size: 1.125rem;
    color: #cfcdcd;
`;

export const LangWrapper = styled.div`
    width: 7.5rem;
    height: 8.75rem;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 1.875rem;
`;

export const CircleWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 10rem);
    grid-gap: 5rem;
    width: 6.25rem;
    height: 6.25rem;
    background: #cfcdcd;
    border-radius: 50%;
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
    color: white;
    position: absolute;
    z-index: 100;
    font-weight: 700;
    font-size: 2em;
`;

export const StyledIcon = styled.i`
    font-size: 3.125rem;
    position: absolute;
    color: #f3f3f3;
    background-color: #212020;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;