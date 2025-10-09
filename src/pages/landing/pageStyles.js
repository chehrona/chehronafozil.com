import styled from "styled-components";

export const PageContainer = styled.div`
    position: relative;
    padding: calc(2 * var(--page-gap)) 7rem;

    @media (max-width: 480px) {
        padding: var(--page-gap);
    }
`;