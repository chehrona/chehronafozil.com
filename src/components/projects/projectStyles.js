import styled from "styled-components";

export const ProjectContainer = styled.div`
    margin-bottom: 5rem;
    margin-top: -2rem;
`;

export const PageTitle = styled.h1`
    text-align: left;

    @media (max-width: 480px) {
        margin-left: 1rem;
        max-width: fit-content;
    }
`;

export const ProjectBox = styled.div`
    display: flex;
    margin-top: 1.25rem;
    padding: 2rem;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: ${({ right }) => !right && "row-reverse"};

    &:hover {
        box-shadow: 0rem 0rem 0.625rem black;
    }

    @media (max-width: 480px) {
        margin-top: 0rem;
        padding: 1rem;
        flex-direction: column-reverse;

        &:hover {
            box-shadow: none;
        }
    }
`;

export const ProjectName = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.625rem;

    @media (max-width: 480px) {
        margin-top: 1rem;
    }
`;

export const ProjectDesc = styled.div`
    color: #cfcdcd;
`;

export const TechUsed = styled.div`
    margin-top: 3.125rem;

    @media (max-width: 480px) {
        margin-top: 2rem;
    }
`;

export const ProjectInfo = styled.div`
    width: 50%;
    text-align: left;

    @media (max-width: 480px) {
        width: 100%;
        margin-top: 1rem;
        font-size: 1.25rem;
    }
`;

export const StyledIcon = styled.i`
    font-size: ${({ view }) => view ? "1.875rem" : "1.375rem"};
    color: ${({ view }) => view ? "#212020" : "#cfcdcd"};
    margin-bottom: ${({ view }) => view ? "0rem" : "1.25rem"};
    margin-right: ${({ view }) => view ? "0rem" : "0.5rem"};

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const StyledImg = styled.img`
    height: 1.3rem;

    @media (max-width: 480px) {
        height: 1.8rem;
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    width: 12.5rem;
    justify-content: space-between;
    margin-top: 1.25rem;
`;

export const Link = styled.a`
    &:link, &:visited {
        color: #212020;
        text-decoration: none;
    }
`;

export const ButtonName = styled.div`
    margin-left: 0.3125rem;
`;

export const ButtonWrapper = styled.div`
    background-color: white;
    padding: 0.3125rem;
    width: fit-content;
    height: 1.875rem;
    border-radius: 0.5rem;
    display: flex;
    color: #212020;
    margin-right: 1.25rem;
    align-items: center;
    box-shadow: 0rem 0rem 0.625rem black;

    @media (max-width: 480px) {
        height: 3rem;
    }
`;

export const ImageWrapper = styled.div`
    width: 45%;
    display: flex;

    @media (max-width: 480px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const ProjectImage = styled.img`
    height: auto;
    width: 100%;
    filter: drop-shadow(0rem 0rem 0.13rem #8b8c8f);
`;