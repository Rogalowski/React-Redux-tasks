![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie podsumowujące

Zaimplementuj aplikację do odpalania rakiety. Rakieta znajduje się na platformie.

Po kliknięciu przycisku "Launch the rocket!" licznik powinien odliczać od `5` do `0`.

Kiedy licznik osiągnie wartość `0` rakieta powinna wystartować.

Przeanalizuj gotowe komponenty:

- `Counter`
- `Rocket`
- `LaunchButton`

Następnie zaimplementuj odpowiedni reducer oraz akcje w plikach `redux/reducer` oraz `redux/actions`.

Przykładowy stan początkowy aplikacji:

```js
{
  launched: false,
  counter: 5
}
```

![Rocket](images/app.gif)