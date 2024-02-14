import styled from "styled-components";
import { BodyText } from "../commonStyles";

export const ExperienceContainer = styled.div`
    margin-bottom: 5rem;

    @media (max-width: 480px) {
        margin-bottom: 3rem;
    }
`;

export const WorkBox = styled.div`
    margin-top: 2rem;
    display: flex;

    @media (max-width: 480px) {
        margin: 0rem;
        padding: 0rem 0.75rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        margin: 0rem;
        padding: 0rem 1rem 0rem 6rem;
    }
`;

export const Date = styled.div`
    font-size: 1.5rem;
    margin-right: 2.9rem;
    width: 15%;

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const WorkWrapper = styled.div`
    align-items: center;
    width: 85%;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const WorkDesc = styled(BodyText)`
    margin-top: 1rem;

    @media (max-width: 480px) {
        margin: 2rem 0rem 1rem 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        background-color: red;
        margin: 0rem 1rem 0rem 6rem;
    }
`;

export const DescUnit = styled.div`
    @media (max-width: 480px) {
        margin-top: 1rem;
        line-height: 1.75rem;
    }
`;