import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 480px) {
        flex-direction: column;
    }
`;

export const TextBox = styled.div`
    width: 50%;

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const ToolBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    justify-content: flex-start;

    @media (max-width: 480px) {
        width: 100%;
        gap: var(--page-gap);
    }
`;

export const TextBody = styled.div`
    margin-top: var(--page-gap);
    line-height: calc(1.25 * var(--body));
    color: var(--white);
`;

export const LangWrapper = styled.div`
    width: 25%;
    height: 7rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: var(--body);

    @media (max-width: 480px) {
        width: 30%;
        height: auto;
    }
`;


export const Circle = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 0.25rem solid var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledIcon = styled.i`
    font-size: var(--section);
    color: #fff;
`;