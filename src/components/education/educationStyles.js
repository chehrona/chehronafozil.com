import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const EducationContainer = styled.div`
    margin-bottom: 3rem;
`;

export const EducationBox = styled.div`
    margin-top: 2rem;

    @media (max-width: 480px) {
        padding: 0rem 0.75rem;
    }
`;

export const DegreeWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
`;

export const Cap = styled(FontAwesomeIcon)`
    margin-right: 1rem;

    @media (max-width: 480px) {
        display: none;
    }
`;

export const DegreeSubtitle = styled.div`
    color: #cfcdcd;
    font-weight: normal;
    font-size: 1.125rem;
    margin-left: 2.9rem;

    @media (max-width: 480px) {
        margin-left: 0rem;
        font-size: 1.2rem;
    }
`;

export const School = styled.div`
    font-size: 1.25rem;
    font-weight: normal;
    margin-left: 2.9rem;

    @media (max-width: 480px) {
        margin-left: 0rem;
    }
`;

export const Link = styled.a`
    &:link, &:visited {
        color: #212020;
        text-decoration: none;
    }
`;

export const ButtonWrapper = styled.div`
    background-color: white;
    padding: 0.3125rem;
    width: fit-content;
    height: 2.75rem;
    border-radius: 0.5rem;
    display: flex;
    color: #212020;
    margin-left: 2.9rem;
    margin-top: 0.5rem;
    align-items: center;
    box-shadow: 0rem 0rem 0.625rem black;

    @media (max-width: 480px) {
        margin-left: 0rem;
        height: 3rem;
        font-size: 1.25rem;
    }
`;