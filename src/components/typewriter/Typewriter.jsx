import React, { useState } from "react";
import ReactTyped from "react-typed";
import { useMediaQuery } from "react-responsive";

import { CursorOverlay, DescLine, LineOne } from "./typewriterStyles";

export default function Typewriter() {
    const [showOverlay, setShowOverlay] = useState(true);
    const [mobileOverlay, setMobileOverlay] = useState(true);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    return (
        <div>
            <LineOne bottom={isMobile ? 15 : 21}>
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
            <LineOne bottom={isMobile ? 12 : 15}>
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
            <DescLine bottom={6}>
                {showOverlay && <CursorOverlay />}
                <ReactTyped
                    strings={[isMobile ? "A molecular biologist" : "full-stack developer by title, problem-solver by nature"]}
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
            {isMobile && (
                <DescLine bottom={4}>
                    {mobileOverlay && <CursorOverlay />}
                    <ReactTyped
                        strings={["turned software engineer"]}
                        typeSpeed={25}
                        startDelay={2550}
                        cursorChar="|"
                        showCursor={true}
                        onComplete={(instance) => {
                            instance.cursor.remove();
                        }}
                    />
                </DescLine>
            )}
        </div>
    )
}