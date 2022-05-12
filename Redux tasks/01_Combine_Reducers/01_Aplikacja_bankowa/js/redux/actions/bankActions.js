// Tutaj zaimplementuj akcje do aplikacji bankApp

// export { WITHDRAW, DEPOSIT, withdrawMoney, depositMoney };
export const WITHDRAW = "WITHDRAW";
export const DEPOSIT = "DEPOSIT";

export const withdrawMoney = (n) => ({
    type: WITHDRAW,
    payload: n,
});

export const depositMoney = (n) => ({
    type: DEPOSIT,
    payload: n,
});
