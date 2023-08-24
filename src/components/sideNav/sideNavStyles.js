import styled from "styled-components";
import { GitHub, LinkedIn, MailOutline } from "@mui/icons-material";

export const MainContainer = styled.div`
    position: fixed;
    left: 1.25rem;
    bottom: 0rem;
    width: 2.5rem;
    text-align: center;
`;

export const SideLine = styled.div`
    width: 0.125rem;
    height: 5.625rem;
    background-color: white;
    margin: 0 auto;
`;

export const StyledMail = styled(MailOutline)`
    font-size: 1.375rem;
    margin-bottom: 1rem;
    color: #cfcdcd;
    filter: brightness(60%);

    &:hover {
        filter: brightness(100%);  
    }
`;

export const StyledGitHub = styled(GitHub)`
    font-size: 1.375rem;
    margin-bottom: 1rem;
    color: #cfcdcd;
    filter: brightness(60%);

    &:hover {
        filter: brightness(100%);  
    }
`;

export const StyledLinkedIn = styled(LinkedIn)`
    font-size: 1.375rem;
    margin-bottom: 1rem;
    color: #cfcdcd;
    filter: brightness(60%);

    &:hover {
        filter: brightness(100%);  
    }
`;