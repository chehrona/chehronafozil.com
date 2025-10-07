import styled from 'styled-components';
import { Tooltip, tooltipClasses } from '@mui/material';

export const ProjectContainer = styled.div`
    margin: 1rem 0rem 5rem 0rem;
`;

export const ProjectBox = styled.div`
    display: flex;
    margin-top: 1.25rem;
    padding: 2rem 0rem;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: ${({ right }) => !right && 'row-reverse'};

    @media (max-width: 480px) {
        margin: 0rem;
        padding: 0rem 0.75rem 2rem 0.75rem;
        flex-direction: column-reverse;
    }
`;

export const ProjectName = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.625rem;

    @media (max-width: 480px) {
        margin-top: 1rem;
    }
`;

export const ProjectDesc = styled.div`
    color: #cfcdcd;
    margin-top: 1rem;
`;

export const TechUsed = styled.div`
    margin-top: 2rem;
    display: flex;
    height: 2rem;
    gap: 0.75rem;
    align-items: center;

    @media (max-width: 480px) {
        margin-top: 2rem;
    }
`;

export const ProjectInfo = styled.div`
    width: 50%;
    text-align: left;
    padding: 0rem 2rem;

    @media (max-width: 480px) {
        width: 100%;
        margin-top: 1rem;
        font-size: 1.25rem;
    }
`;

export const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        fontSize: '1rem',
        color: '#212020',
        fontFamily: 'inherit',
        fontWeight: 'normal',
        padding: '0.25rem 0.5rem',
    },
    [`& .${tooltipClasses.tooltipArrow}`]: {
        backgroundColor: 'white',
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: 'white',
    },
    '@media (max-width: 1024px)': {
        [`& .${tooltipClasses.tooltip}`]: {
            display: 'none',
        },
    },
}));

export const StyledIcon = styled.i`
    font-size: 1.5rem;
    color: ${({ view }) => (view ? '#212020' : '#cfcdcd')};
    width: 1.5rem;
    cursor: pointer;

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const StyledImg = styled.img`
    height: 1.5rem;
    width: 1.5rem;
    max-width: 1.5rem;
    cursor: pointer;

    @media (max-width: 480px) {
        height: 1.8rem;
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    width: 12.5rem;
    margin-top: 1.25rem;
`;

export const Link = styled.a`
    &:link,
    &:visited {
        color: #212020;
        text-decoration: none;
    }
`;

export const ButtonWrapper = styled.div`
    background-color: white;
    padding: 0.3125rem;
    width: fit-content;
    height: 2.75rem;
    border-radius: 0.5rem;
    display: flex;
    color: #212020;
    margin-right: 1.25rem;
    align-items: center;
    gap: 0.25rem;
    box-shadow: 0rem 0rem 0.625rem black;

    @media (max-width: 480px) {
        height: 3rem;
    }
`;

export const ImageWrapper = styled.div`
    width: 45%;
    display: flex;

    @media (max-width: 480px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const ProjectImage = styled.img`
    height: auto;
    width: 100%;

    @media (max-width: 480px) {
        margin-top: 1.25rem;
    }
`;
