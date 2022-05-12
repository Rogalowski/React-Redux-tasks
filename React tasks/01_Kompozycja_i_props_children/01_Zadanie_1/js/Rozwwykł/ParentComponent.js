import React from "react";
import { ChildComponent } from "./ChildComponent";

export const ParentComponent = (props) => {
    return <ChildComponent>{props.children}</ChildComponent>;
};
