import React, { useState, useEffect } from "react";

// Styled components
import { Dot, Letter, MainContainer } from "./logoStyles";

export default function Logo() {
    const [moveRatio, setMoveRatio] = useState(0);
    const [portViewHeight, setPortViewHeight] = useState(window.innerHeight);
    const [customStyle, setCustomStyle] = useState({
        two: {},
        dot: {}
    });
  
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
    
            if (scrollPosition <= portViewHeight) {
                setMoveRatio(28 / portViewHeight);
                setCustomStyle(prevState => ({
                        ...prevState,
                        two: {
                        transform: `translateX(${scrollPosition * moveRatio}px)`
                    }
                }));
            } else if (scrollPosition <= 2 * portViewHeight) {
                if (scrollPosition <= 1.5 * portViewHeight) {
                    setMoveRatio(14 / (portViewHeight / 2));
                    setCustomStyle(prevState => ({
                    ...prevState,
                    dot: {
                        transform: `translateX(${(scrollPosition - portViewHeight) * moveRatio}px)`
                    }
                }));
            } else if (scrollPosition <= 2 * portViewHeight) {
                setMoveRatio(24.8 / (portViewHeight / 2));
                setCustomStyle(prevState => ({
                ...prevState,
                dot: {
                    transform: `translate(14px, ${(scrollPosition - (1.5 * portViewHeight)) * moveRatio}px)`
                }
                }));
            }
            } else if (scrollPosition <= 3 * portViewHeight) {
            setMoveRatio(180 / portViewHeight);
            setCustomStyle(prevState => ({
                ...prevState,
                two: {
                transform: `translateX(28px) rotateY(${(scrollPosition - 2 * portViewHeight) * moveRatio}deg)`
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
            <Letter src="/letterC.svg" />
            <Dot src="/dot.svg" style={customStyle?.dot} />
            <Letter src="/letterF.svg" top={"0.0125rem"} left={"0.1875rem"} style={customStyle?.two} />
        </MainContainer>
    );
  }