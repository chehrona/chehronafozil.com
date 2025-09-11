import styled from "styled-components";

export const StyledFooter = styled.div`
    color: #838282;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    position: relative;

    @media (max-width: 480px) {
        display: block;
        font-size: 1.05rem;
        margin: 0rem 0.75rem 1rem 0.75rem;
    }
`;