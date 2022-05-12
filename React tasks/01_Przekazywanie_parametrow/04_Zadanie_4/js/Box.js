import React, { useEffect, useState } from "react";

export const Box = () => {
    const [style, setStyle] = useState({
        background: "green",
        width: 500,
        height: 200,
    });

    const handleClickNewStyle = ({ e, background, width, height }) => {
        console.log(e);
        setStyle({
            background: background,
            width: width,
            height: height,
        });
    };

    return (
        <>
            <div style={style}></div>
            <button
                onClick={() =>
                    handleClickNewStyle({
                        background: "orange",
                        width: 200,
                        height: 300,
                    })
                }
            >
                Change style orange
            </button>
            <button
                onClick={(e) =>
                    handleClickNewStyle({
                        e,
                        background: "blue",
                        width: 100,
                        height: 700,
                    })
                }
            >
                Change style blue
            </button>
            <button
                onClick={(e) =>
                    handleClickNewStyle({
                        e,
                        background: "green",
                        width: 500,
                        height: 200,
                    })
                }
            >
                Change style green
            </button>
        </>
    );
};
