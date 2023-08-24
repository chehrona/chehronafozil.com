import React from "react";
import { educationList } from "../helper";

import { 
    PageTitle,
    ProjectBox,
    ProjectDesc,
    ProjectInfo,
    ProjectName,
    TechUsed,
    StyledIcon,
    Link,
    ButtonName,
    ButtonWrapper,
    ButtonBox,
    ImageWrapper,
    ProjectImage,
} from "./educationStyles";

export default function Education() {
    return (
        <div>
            <PageTitle>Education</PageTitle>
            {educationList.map((entry, i) => {
                return (
                    <div>Hello</div>
                );
            })}
        </div>
    )
}