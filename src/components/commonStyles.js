import styled from "styled-components";

export const IntroTitle = styled.div`
    font-size: 5.875rem;
    font-weight: bold;

    @media (max-width: 480px) {
        font-size: 2.8rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 5rem;
    }

`;

export const PageTitle = styled.div`
    font-size: 2.75rem;
    font-weight: bold;
    padding-bottom: 1.25rem;
    text-align: ${({ align }) => align ? align : "left"};

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
    font-size: 1.52rem;

    @media (max-width: 480px) {
        margin-top: 2rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.75rem;
    }
`;

export const BodyText = styled.div`
    font-weight: normal;
    color: ${({ color }) => color ? "white" : "#cfcdcd"};

    @media (max-width: 480px) {
        font-size: 1.25rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.55rem;
    }
`;