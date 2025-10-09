import styled from "styled-components"

export const MainContainer = styled.div`
    position: fixed;
    top: 1.25rem;
    left: 1.25rem;
    cursor: pointer;

    @media (max-width: 480px) {
        top: 0rem;
        left: 0rem;
        position: relative;
    }
`;

export const Img = styled.img`
    width: 2.5rem;
    height: 2.5rem;

    @media (max-width: 480px) {
        width: 3rem;
        height: 3rem;
    }
`;