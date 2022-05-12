import React, { Component } from "react";

export const SumF = ({ numbers }) => {
    return numbers.reduce((prev, curr) => {
        return prev + curr;
    });
};

export class SumC extends Component {
    render() {
        const { numbers } = this.props;
        return numbers.reduce((prev, curr) => {
            return prev + curr;
        });
    }
}
