import React from "react";
import { GrandchildComponent } from "./GrandchildComponent";

export const ChildComponent = (props) => {
    return <GrandchildComponent>{props.children}</GrandchildComponent>;
};
