import React from "react";

const LaunchButton = ({ deploy, pending }) => (
    <button disabled={pending} onClick={() => deploy()}>
        Launch the rocket!
    </button>
);

export default LaunchButton;
