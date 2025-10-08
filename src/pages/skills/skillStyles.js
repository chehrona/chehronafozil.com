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
        margin-top: -1.75rem;
        width: 100%;
    }
`;

export const ToolBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    justify-content: flex-end;

    @media (max-width: 480px) {
        width: 100%;
        padding: 0.5rem;
        justify-content: center;
    }
`;

export const TextBody = styled.div`
    margin-top: var(--page-gap);
    line-height: calc(1.25 * var(--body));
    color: var(--white);

    @media (max-width: 480px) {
        font-size: 1.25rem;
        line-height: 1.75rem;
        margin: 2rem 0.75rem 1rem 0.75rem;
    }
`;

export const LangWrapper = styled.div`
    width: 7.25rem;
    height: 7rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: var(--body);

    @media (max-width: 480px) {
        font-size: 1.25rem;
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

    @media (max-width: 480px) {
        width: 5rem;
        height: 5rem;
    }
`;

export const StyledIcon = styled.i`
    font-size: var(--section);
    color: #fff;
`;