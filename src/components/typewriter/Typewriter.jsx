import React, { useState } from "react";
import ReactTyped from "react-typed";
import { useMediaQuery } from "react-responsive";

import { CursorOverlay, DescLine, LineOne, TypewriterContainer } from "./typewriterStyles";

export default function Typewriter() {
    const [showOverlay, setShowOverlay] = useState(true);
    const [mobileOverlay, setMobileOverlay] = useState(true);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    return (
        <TypewriterContainer>
            <LineOne bottom={20}>
                <ReactTyped
                    strings={["Hi!"]}
                    typeSpeed={70}
                    cursorChar="|"
                    showCursor={true}
                    onComplete={(instance) => {
                        instance.cursor.remove();
                    }}
                />
            </LineOne>
            <LineOne bottom={isMobile ? 17 : 15}>
                <ReactTyped
                    strings={["I am Chehrona"]}
                    typeSpeed={60}
                    startDelay={300}
                    cursorChar="|"
                    showCursor={true}
                    onComplete={(instance) => {
                        setShowOverlay(false);
                        instance.cursor.remove();
                    }}
                />
            </LineOne>
            <DescLine bottom={isMobile ? 12 : 3.5}>
                {showOverlay && <CursorOverlay />}
                <ReactTyped
                    strings={[isMobile ? "full-stack developer by title," : "full-stack developer by title, problem-solver by nature"]}
                    typeSpeed={25}
                    startDelay={1800}
                    cursorChar="|"
                    showCursor={true}
                    onComplete={(instance) => {
                        isMobile && setMobileOverlay(false);
                        instance.cursor.remove();
                    }}
                />
            </DescLine>
            {isMobile && !mobileOverlay && (
                <DescLine bottom={isMobile ? 10 : 4}>
                    {mobileOverlay && <CursorOverlay />}
                    <ReactTyped
                        strings={["problem-solver by nature"]}
                        typeSpeed={25}
                        cursorChar="|"
                        showCursor={true}
                        onComplete={(instance) => {
                            instance.cursor.remove();
                        }}
                    />
                </DescLine>
            )}
        </TypewriterContainer>
    )
}