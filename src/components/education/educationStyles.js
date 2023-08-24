import styled from "styled-components";

export const PageTitle = styled.div`
    text-align: left;
    margin-left: 3%;
    font-size: 2.75rem;
    font-weight: bold;
`;

export const ProjectBox = styled.div`
    display: flex;
    margin-left: 5rem;
    margin-right: 3%;
    margin-top: 1.25rem;
    padding: 1.875rem;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: ${({ right }) => !right && "row-reverse"}

    &:hover {
        box-shadow: 0rem 0rem 0.625rem black;
    }
`;

export const ProjectName = styled.div`
    margin-bottom: 1.875rem;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.625rem;
`;

export const ProjectDesc = styled.div`
    font-size: 1.125rem;
    color: #cfcdcd;
`;

export const TechUsed = styled.div`
    margin-top: 3.125rem;
`;

export const ProjectInfo = styled.div`
    width: 50%;
    text-align: left;
`;

export const StyledIcon = styled.i`
    font-size: ${({ view }) => view ? "1.875rem" : "1.375rem"};
    color: ${({ view }) => view ? "#212020" : "#cfcdcd"};
    margin-bottom: ${({ view }) => view ? "0rem" : "1.25rem"};
    margin-right: ${({ view }) => view ? "0rem" : "0.5rem"}
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
`;

export const ImageWrapper = styled.div`
    width: 45%;
    display: flex;
    position: relative;
    margin-right: ${({ right }) => right ? "0rem" : "3.125rem"};
    margin-left: ${({ right }) => right ? "3.125rem" : "0rem"};
`;

export const ProjectImage = styled.img`
    height: auto;
    width: 100%;
    margin: 0rem;
`;