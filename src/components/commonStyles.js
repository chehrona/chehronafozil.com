import styled from "styled-components";

export const IntroTitle = styled.div`
    font-size: var(--intro);
    font-weight: bold;

    @media (max-width: 480px) {
        font-size: 2.8rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 5rem;
    }

`;

export const PageTitle = styled.div`
    font-size: var(--page);
    line-height: var(--page);
    padding: var(--page-gap) 0rem;
    font-weight: bold;

    @media (max-width: 480px) {
        font-size: 2rem;
        line-height: 2.3rem;
        text-align: left;
        padding: 0rem 0.75rem 0rem 0.75rem ;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 1rem 2rem 6rem;
    }
`;

export const SecondaryTitle = styled.div`
    font-weight: 700;
    font-size: var(--section);
    line-height: var(--section);

    @media (max-width: 480px) {
        margin-top: 2rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.75rem;
    }
`;

export const BodyText = styled.div`
    font-weight: normal;
    color: ${({ color }) => color ? color : "var(--white)"};

    @media (max-width: 480px) {
        font-size: 1.25rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.55rem;
    }
`;