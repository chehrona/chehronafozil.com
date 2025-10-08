import styled from "styled-components"

export const MainContainer = styled.div`
    position: fixed;
    top: 1.25rem;
    left: 1.25rem;
    cursor: pointer;

    @media (max-width: 480px) {
        top: 0.65rem;
        left: 0.65rem;
        position: relative;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        
    }
`;

export const Img = styled.img`
    width: 2.5rem;
    height: 2.5rem;
`;