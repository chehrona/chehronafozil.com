import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MainContainer = styled.div`
    margin-bottom: 10rem;

    @media (max-width: 480px) {
        margin-bottom: 5rem;
    }
`;

export const CertWrapper = styled.div`
    display: flex;
    align-items: center;

    &::before {
        content: '▹';
        padding-right: 0.5rem;
        color: var(--highlight);
        
    }

    @media (max-width: 480px) {
        padding: 0rem 0.75rem;
        font-size: 1.25rem;
    }
`;

export const Company = styled.span`
    color: var(--white);
    position: relative;
`;

export const Link = styled.a`
    position: absolute;
    bottom: 0rem;

    &:link, &:visited {
        color: var(--blue);
        text-decoration: none;
    }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    color: var(--highlight);
    margin-left: 0.5rem;
`;

export const ListContainer = styled.div`
    padding-top: 2rem;
`;