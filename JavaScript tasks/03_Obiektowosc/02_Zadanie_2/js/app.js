// Zadanie 2
// Część 1
// Utwórz konstruktor obiektu Client przyjmujący argument name.

// Obiekt ma mieć atrybuty:

//     name
//     orders - tablica do przechowywania jego zamówień

// i metodę:

//     addOrder(order) - metoda służąca do dodawania zamówień do tablicy

// Część 2
// Utwórz konstruktor dla obiektu Order przyjmujący argumenty client i number

// Obiekt ma mieć atrybuty:

//     client - powiązany obiekt z klientem
//     number - numer zamówienia

// Część 3
// Po stworzeniu tych dwóch klas wklej kod znajdujący się poniżej w celu przetestowania rozwiązania.


class Client{
    constructor(name){
        this.name = name;
        this.orders = [];
    }
    // getName() {
    //     return this.name;
    //   }
    addOrder(order){
        return this.orders.push(order) 
    }
}

class Order{
    constructor(client, number){
        this.client = client;
        this.number = number;
        
    }

}


const client1 = new Client("John");
const order1 = new Order(client1, "1");
const order2 = new Order(client1, "2");



client1.addOrder(order1);
client1.addOrder(order2);
console.table(client1.orders);
