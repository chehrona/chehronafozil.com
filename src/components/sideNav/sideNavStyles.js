import styled from "styled-components";
import { GitHub, LinkedIn, MailOutline } from "@mui/icons-material";

export const MainContainer = styled.div`
    position: fixed;
    left: 0.7rem;
    bottom: 0rem;
    width: 2.5rem;
    text-align: center;

    @media (max-width: 480px) {
        display: none;
    }
`;

export const SideLine = styled.div`
    width: 0.125rem;
    height: 3.625rem;
    background-color: white;
    margin: 0 auto;
`;

export const StyledMail = styled(MailOutline)`
    margin-bottom: 0.5rem;
    color: #cfcdcd;
    filter: brightness(60%);

    &.MuiSvgIcon-root {
        font-size: 1.7rem;
    }

    &:hover {
        filter: brightness(100%);  
    }
`;

export const StyledGitHub = styled(GitHub)`
    margin-bottom: 0.5rem;
    color: #cfcdcd;
    filter: brightness(60%);

    &.MuiSvgIcon-root {
        font-size: 1.7rem;
    }

    &:hover {
        filter: brightness(100%);  
    }
`;

export const StyledLinkedIn = styled(LinkedIn)`
    margin-bottom: 0.5rem;
    color: #cfcdcd;
    filter: brightness(60%);

    &.MuiSvgIcon-root {
        font-size: 1.7rem;
    }

    &:hover {
        filter: brightness(100%);  
    }
`;