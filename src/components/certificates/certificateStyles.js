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
    margin-top: 0.5rem;

    @media (max-width: 480px) {
        padding: 0rem 0.75rem;
        font-size: 1.25rem;
    }
`;

export const Company = styled.span`
    color: #cfcdcd;
    position: relative;
`;

export const Link = styled.a`
    position: absolute;
    bottom: 0rem;

    &:link, &:visited {
        color: #212020;
        text-decoration: none;
    }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    color: rgb(255, 40, 66);
    margin-left: 1rem;
`;

export const ListContainer = styled.div`
    padding-top: 2rem;
`;