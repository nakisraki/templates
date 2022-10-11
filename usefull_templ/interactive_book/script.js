// получаем доступ к разделу с картинками
const section = document.querySelector("section");
// на старте клика ещё не было
let clicked = false;
// обработчик клика по картинке
section.addEventListener("click", (e) => {
  // запускаем анимацию переворачивания, добавляя или удаляя у элемента класс flip
  section.classList.toggle("flip");
  // устанавливаем флаг клика, если хотя бы раз кликнули
  if (!clicked) {
    clicked = true;
    // скрываем пояснительную надпись внизу после первого клика
    document.getElementById("title").style.opacity = 0;
  }
});