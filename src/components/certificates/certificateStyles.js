import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MainContainer = styled.div`
    margin-bottom: 10rem;
`;

export const PageTitle = styled.h1`
    text-align: right;
    margin-bottom: 1.25rem;
`;

export const CertWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-left: 2rem;
    margin-top: 0.5rem;
`;

export const Company = styled.span`
    color: #cfcdcd;
`;

export const Link = styled.a`
    &:link, &:visited {
        color: #212020;
        text-decoration: none;
    }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    color: rgb(255, 40, 66);
    margin-left: 1rem;
`;