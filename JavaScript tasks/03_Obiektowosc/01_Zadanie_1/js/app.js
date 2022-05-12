// Zadanie 1
// Stwórz klasę Vehicle. Ma ona w swoim konstruktorze, zapisywać:

//     typ,
//     nazwę,
//     ilość koni mechanicznych.

// Klasa ta ma również posiadać metodę printInfo. Jej zadaniem będzie wypisanie informacji o konkretnym pojeździe.
// Następnie stwórz trzy obiekty boat, car i plane na podstawie klasy Vehicle.

class Vehicle{
    constructor(type, nameVehicle, horse) {
        this.type = type;
        this.nameVehicle = nameVehicle;
        this.horse = horse;
      }

      getName() {
        console.log( 'Typ pojazdu: ', this.type, ' Marka: ', this.nameVehicle, ' Konie mechaniczne: ', this.horse   );
      }

    }
    
    const car = new Vehicle("Osobowy", "Mazda", 120);
    const boat = new Vehicle("Wycieczkowy", "Ferry", 220);
    const plane = new Vehicle("Wojskowy", "SpeedFire", 702);
    
 

car.getName();
boat.getName();
plane.getName();