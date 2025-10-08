import styled from 'styled-components';
import { Tooltip, tooltipClasses } from '@mui/material';

export const ProjectBox = styled.div`
    display: flex;
    gap: calc(4 * var(--page-gap));
    padding: var(--page-gap) 0rem;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: ${({ right }) => !right && 'row-reverse'};

    @media (max-width: 480px) {
        margin: 0rem;
        padding: 0rem 0.75rem 2rem 0.75rem;
        flex-direction: column-reverse;
    }
`;

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(2 * var(--page-gap));
`;

export const ProjectDesc = styled.div`
    color: var(--white);
    padding-top: var(--page-gap);
`;

export const TechUsed = styled.div`
    padding: var(--page-gap) 0rem;
    display: flex;
    gap: 0.75rem;
    align-items: center;

    @media (max-width: 480px) {
        margin-top: 2rem;
    }
`;

export const ProjectInfo = styled.div`
    width: 100%;
    line-height: calc(var(--body) * 1.25);

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
        color: 'var(--blue)',
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
    color: ${({ view }) => (view ? 'var(--blue)' : 'var(--white)')};
    width: 1.5rem;
    height: 1.5rem;
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
    gap: var(--page-gap);

`;

export const ButtonName = styled.div`
    font-size: var(--body);
    display: flex;
    margin-top: 0.15rem;
`;

export const Link = styled.a`
    &:link,
    &:visited {
        color: var(--blue);
        text-decoration: none;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--highlight);
    font-size: var(--body);
    padding: 0.5rem 0.75rem;
    width: fit-content;
    border-radius: 0.5rem;

    color: var(--blue);
    gap: 0.25rem;
    box-shadow: 0rem 0rem 0.625rem black;

    @media (max-width: 480px) {
        height: 3rem;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
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
