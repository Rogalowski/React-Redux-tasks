// Tu powinny się znaleźć odpowiednie importy

import { withdrawMoney, depositMoney } from "./redux/actions/bankActions";
import { bankReducer } from "./redux/reducers/bank";
import { createStore } from "redux"; //store z reduxa
import allReducers from "./redux/reducers";

const bankApp = {
    start(rootElement) {
        this.createUI(rootElement);
        this.createStore();
        this.collectRefs();
        this.applyHandlers();
    },

    // Tej metody nie powinniśmy ruszać :)
    // Tworzymy tu szablon UI
    createUI(rootElement) {
        this.rootElement = rootElement;
        this.rootElement.innerHTML = `
      <div>
        <h1>Saldo:<span>0</span></h1>

        <div>
          $: <input type="number" id="money" />
          <button id="withdraw">Wypłać</button>
          <button id="deposit">Wpłać</button>
        </div>
      </div>
    `;
    },

    // Tutaj zbieramy referencje do odpowiednich elementów
    // Tej metody też nie trzeba zmieniać ;)
    collectRefs() {
        this.depositEl = this.rootElement.querySelector("#deposit");
        this.withdrawEl = this.rootElement.querySelector("#withdraw");
        this.saldoEl = this.rootElement.querySelector("h1 span");
        this.inputEl = this.rootElement.querySelector("input");
    },

    // W tej metodzie należy utworzyć nowy store
    // Następnie zapisać się na zmiany i na każdą z nich
    // zamienić wartość tekstu w elemencie `saldoEl` na wartość ze store + PLN
    // np. this.saldoEl.innerText = `wartosc-ze-store PLN`
    //

    createStore() {
        this.store = createStore(allReducers);
        this.store.subscribe(() => {
            this.saldoEl.innerText = this.store.getState().balance + " PLN";
        });
    },

    // createStore() {
    //     // const { dispatch, subscribe, getState } = createStore(bankReducer);
    //     const store = createStore(reducer);
    //     function ownListner() {
    //         // this.saldoEl.innerText = "sfdds";
    //         // this.saldoEl.innerText = "fsdf";
    //         console.log(`from subscribe bank ${store.getState().bankReducer}`);
    //     }
    //     // const unsubscribe = store.subscribe(ownListner);

    //     store.dispatch(depositMoney(100));
    //     return store.dispatch(withdrawMoney(25));
    //     // this.depositEl.addEventListener("click",(e)=>{
    //     //     store.dispatch(e.inputEl.value)
    //     //     this.saldoEl.innerText = e.inputEl.value
    //     // }
    //     // this.saldoEl.innerText = "sfdds";
    // },

    // W tej metodzie należy podpiąć pod odpowiednie przyciski event handlery,
    // które odpalą nam odpowiednie akcje
    // Skorzystaj z elementów:
    // this.withdrawEl
    // this.depositEl
    applyHandlers() {
        this.depositEl.addEventListener("click", () => {
            if (this.inputEl.value <= 0) return;
            this.store.dispatch(depositMoney(parseInt(this.inputEl.value)));
        });
        this.withdrawEl.addEventListener("click", () => {
            if (this.inputEl.value <= 0) return;
            this.store.dispatch(withdrawMoney(parseInt(this.inputEl.value)));
        });
    },

    // function ownListener() {
    //   const { dispatch, subscribe, getState } = createStore(bankReducer);

    //   const unsubscribe = subscribe(() => {
    //       console.log(`from bank  ${getState()}`);
    //       // this.saldoEl.innerText = ` PLN`;
    //   });

    //   dispatch(depositMoney(5));
    //   dispatch(withdrawMoney(2));

    //   unsubscribe();
    //   console.log("dispatch(withdrawMoney(2)) after unsubscribe: ");
    //   dispatch(withdrawMoney(2));
    //   console.log("Your Deposit: ", getState());
    // }
};

export default bankApp;
