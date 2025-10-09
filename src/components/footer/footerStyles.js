import styled from "styled-components";

export const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    position: relative;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const Text = styled.div`
    filter: brightness(60%);
`;