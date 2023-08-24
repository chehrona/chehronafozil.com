import React, { useState } from "react";
import ReactTyped from "react-typed";

import { CursorOverlay, DescLine, LineOne, LineTwo } from "./typewriterStyles";

export default function Typewriter() {
    const [showOverlay, setShowOverlay] = useState(true);

    return (
        <div>
            <LineOne>
                <ReactTyped
                    strings={["Hi!"]}
                    typeSpeed={100}
                    cursorChar="|"
                    showCursor={true}
                    onComplete={(instance) => {
                        instance.cursor.remove();
                    }}
                />
            </LineOne>
            <LineTwo>
                <ReactTyped
                    strings={["I am Chehrona"]}
                    typeSpeed={80}
                    startDelay={420}
                    cursorChar="|"
                    showCursor={true}
                    onComplete={(instance) => {
                        setShowOverlay(false);
                        instance.cursor.remove();
                    }}
                />
            </LineTwo>
            {showOverlay && <CursorOverlay />}
            <DescLine>
                <ReactTyped
                    strings={["A molecular biologist turned software engineer."]}
                    typeSpeed={25}
                    startDelay={2000}
                    cursorChar="|"
                    showCursor={true}
                    onComplete={(instance) => {
                        instance.cursor.remove();
                    }}
                />
            </DescLine>
        </div>
    )
}