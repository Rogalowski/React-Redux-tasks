import React, { Fragment } from "react";
import Rocket from "./Rocket";
import Counter from "./Counter";
import LaunchButton from "./LaunchButton";
// import { deploy } from "../redux/actions";

const Platform = ({ launched, counter, deploy, pending }) => (
    <Fragment>
        <Rocket isLaunched={launched} />
        <Counter seconds={counter} />
        <LaunchButton deploy={deploy} pending={pending} />
    </Fragment>
);

export default Platform;
