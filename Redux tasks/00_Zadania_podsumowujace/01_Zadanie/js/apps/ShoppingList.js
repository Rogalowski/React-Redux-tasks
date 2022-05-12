import { store } from "../redux/store";
import { addProduct, changeOrder } from "../redux/actions/shoppingAction";
export class ShoppingList {
    constructor(rootElement) {
        this.createUI(rootElement);
        this.collectRefs();
        this.reduxConnect();
        this.applyHandlers();
    }

    createUI(rootElement) {
        this.rootElement = rootElement;
        this.rootElement.innerHTML = `
      <div class="card-header">Lista zakupów</div>
      <div class="card-body">
        <form>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Produkt..." id="input-product"/>
            <div class="input-group-append">
              <button class="btn btn-outline-primary" type="submit" id="shop-add">Dodaj</button>
            </div>
          </div>
        </form>

        <ul class="list-group mt-3" id="shop-list">
        </ul>
      </div>
    `;
    }

    collectRefs() {
        this.form = this.rootElement.querySelector("form");
        this.shopList = this.rootElement.querySelector("#shop-list");
        this.input = this.rootElement.querySelector("#input-product");
    }

    reduxConnect() {
        store.subscribe(() => {
            this.shopList.innerText = "";

            store.getState().products.forEach((product, index) => {
                const li = document.createElement("li");
                const upButton = document.createElement("button");
                const downButton = document.createElement("button");

                li.innerText = product;
                li.setAttribute("id", index);

                upButton.innerText = "UP";
                downButton.innerText = "DOWN";

                li.appendChild(upButton);
                li.appendChild(downButton);

                this.shopList.appendChild(li);

                const buttons = li.getElementsByTagName("button");
                for (let btn of buttons) {
                    btn.addEventListener("click", (e) => {
                        store.dispatch(changeOrder(btn.innerText, product));
                    });
                }
            });
        });
    }

    applyHandlers() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (store.getState().products.includes(this.input.value)) {
                window.alert("Ten produkt jest juz na liście");
            } else if (this.input.value.length === 0) {
                window.alert("Musisz podać nazwę.");
            } else {
                store.dispatch(addProduct(this.input.value));
                this.input.value = "";
            }
        });
    }
}
