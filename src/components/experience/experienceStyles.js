import styled from "styled-components";

export const ExperienceContainer = styled.div`
    margin-bottom: 5rem;
`;

export const PageTitle = styled.h1`
    text-align: right;
    padding-bottom: 1.25rem;

    @media (max-width: 480px) {
        text-align: left;
        padding: 0rem 0rem 0rem 1rem ;
    }
`;

export const WorkBox = styled.div`
    margin-top: 2rem;
    padding-left: 2rem;
    display: flex;

    @media (max-width: 480px) {
        margin: 0rem;
        padding-left: 1rem;
    }
`;

export const WorkTitle = styled.div`
    font-weight: 700;
    font-size: 1.5rem;

    @media (max-width: 480px) {
        margin-top: 1rem;
    }
`;

export const Date = styled.div`
    font-size: 1.5rem;
    margin-right: 2.9rem;
    width: 15%;

    @media (max-width: 480px) {
        display: none;
    }
`;

export const WorkWrapper = styled.div`
    align-items: center;
    width: 85%;

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const WorkDesc = styled.div`
    color: #cfcdcd;
    font-weight: normal;
    margin-top: 1rem;

    @media (max-width: 480px) {
        font-size: 1.25rem;
    }
`;

export const Location = styled.div`
    font-size: 1.25rem;
    font-weight: normal;
`;

export const DescUnit = styled.div`
    @media (max-width: 480px) {
        margin-bottom: 1rem;
        line-height: 1.35rem;
    }
`;