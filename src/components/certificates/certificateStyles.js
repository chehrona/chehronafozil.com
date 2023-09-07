import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MainContainer = styled.div`
    margin-bottom: 10rem;
`;

export const PageTitle = styled.div`
    text-align: right;
    font-size: 2.75rem;
    font-weight: bold;
    margin-bottom: 1.25rem;
`;

export const CertWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-left: 2rem;
`;

export const CertName = styled.div`
    font-size: 1.5rem;
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
    font-size: 1.25rem;
`;