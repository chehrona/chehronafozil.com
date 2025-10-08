import styled from "styled-components";
import { BodyText } from "../commonStyles";

export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(2 * var(--page-gap));
    padding-top: var(--page-gap);

    @media (max-width: 480px) {
        margin-bottom: 3rem;
    }
`;

export const WorkBox = styled.div`
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
    font-size: var(--section);
    line-height: var(--section);
    width: 15%;

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const WorkWrapper = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const WorkDesc = styled(BodyText)`
    @media (max-width: 480px) {
        margin: 2rem 0rem 1rem 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        background-color: red;
        margin: 0rem 1rem 0rem 6rem;
    }
`;

export const DescUnit = styled.div`
    line-height: calc(var(--body) * 1.25);

    &::before {
        content: '▹ ';
        color: var(--highlight);
    }

    @media (max-width: 480px) {
        margin-top: 1rem;
        line-height: 1.75rem;
    }
`;