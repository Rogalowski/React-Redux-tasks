// Zadanie 2
// Na stronie znajdują się trzy elementy div. Napisz jeden wspólny event dla nich wszystkich, 
// który będzie zmieniał kolor tła tylko w klikniętym divie. Użyj do tego słowa kluczowego this.
// Hint: Żeby uzyskać losowy kolor, użyj poniższego kodu:

const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
const boxElements = document.querySelectorAll("div");


boxElements.forEach(function (button) {
    button.addEventListener("click", function (event) {
      this.style.backgroundColor = randomColor;
  
    });
  
  });