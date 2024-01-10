import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

// Styled components
import { Dot, Letter, MainContainer } from "./logoStyles";

export default function Logo() {
    const [portViewHeight, setPortViewHeight] = useState(window.innerHeight);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const [customStyle, setCustomStyle] = useState({
        two: {},
        dot: {}
    });
  
    let moveRatio = 0;

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
    
            if (scrollPosition <= portViewHeight) {
                moveRatio = 28 / portViewHeight;
                setCustomStyle(prevState => ({
                        ...prevState,
                        two: {
                        transform: isMobile ? 'none' : `translateX(${scrollPosition * moveRatio}px)`
                    }
                }));
            } else if (scrollPosition <= 2 * portViewHeight) {
                if (scrollPosition <= 1.5 * portViewHeight) {
                    moveRatio = 14 / (portViewHeight / 2);
                    setCustomStyle(prevState => ({
                    ...prevState,
                    dot: {
                        transform: isMobile ? 'none' : `translateX(${(scrollPosition - portViewHeight) * moveRatio}px)`
                    }
                }));
            } else if (scrollPosition <= 2 * portViewHeight) {
                moveRatio = 24.8 / (portViewHeight / 2);
                setCustomStyle(prevState => ({
                ...prevState,
                dot: {
                    transform: isMobile ? 'none' : `translate(14px, ${(scrollPosition - (1.5 * portViewHeight)) * moveRatio}px)`
                }
                }));
            }
            } else if (scrollPosition <= 3 * portViewHeight) {
            moveRatio = 180 / portViewHeight;
            setCustomStyle(prevState => ({
                    ...prevState,
                    two: {
                    transform: isMobile ? 'none' : `translateX(28px) rotateY(${(scrollPosition - 2 * portViewHeight) * moveRatio}deg)`
                }
            }));
            }
        };
    
        const handleResize = () => {
            setPortViewHeight(window.innerHeight);
        };
    
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [moveRatio, portViewHeight]);
  
    return (
        <MainContainer>
            <Letter src={process.env.PUBLIC_URL + '/letterC.svg'} />
            <Dot src={process.env.PUBLIC_URL + '/dot.svg'} style={customStyle?.dot} />
            <Letter src={process.env.PUBLIC_URL + '/letterF.svg'} top={"0.0125rem"} left={"0.1875rem"} style={customStyle?.two} />
        </MainContainer>
    );
  }