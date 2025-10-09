import styled from "styled-components";

export const IntroTitle = styled.div`
    font-size: var(--intro);
    font-weight: bold;
`;

export const PageTitle = styled.div`
    font-size: var(--page);
    line-height: var(--page);
    padding: var(--page-gap) 0rem;
    font-weight: bold;
`;

export const SecondaryTitle = styled.div`
    font-weight: 700;
    font-size: var(--section);
    line-height: var(--section);

    @media (max-width: 480px) {
        margin-top: var(--page-gap);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.75rem;
    }
`;

export const BodyText = styled.div`
    font-weight: normal;
    color: ${({ color }) => color ? color : "var(--white)"};

    @media (max-width: 480px) {
        line-height: var(--section);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.55rem;
    }
`;