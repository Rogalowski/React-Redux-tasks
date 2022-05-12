import React, { useState } from "react";
import FakeApi from "./data/fakeAPI";

export const AccountData = () => {
    const [data, setData] = useState(null);

    FakeApi.then((data) => {
        setData(data);
    });

    if (data) {
        return (
            <table>
                {data.map((element, index) => {
                    console.log("el: ", element);
                    return <AccountQuery key={index} {...element} />;
                })}
            </table>
        );
    }

    return null;
};

const AccountQuery = ({ day, balance, change }) => {
    return (
        <tbody>
            <tr>
                <td>Day: {day} </td>
                <td>Balance: {balance} </td>
                <td>Change: {change} </td>
            </tr>
        </tbody>
    );
};
