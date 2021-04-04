$(document).ready(function () {
  $('.nav a[href^="#"]').clik(function () {
    //выбрать ссылки из меню
    var offset = $(".nav").innerHeiht(); // высота меню, получаем динамически
    var target = $(this).attr("href"); //сохраняем значение атрибута в href
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - offset, //вычесть высоту меню
      },
      500 //время анимации
    );
    $('.nav a[href^="#"').removeClass("active"); // удалять класс acnive у всех пунктов меню
    $(this).addClass("active"); //добавлять класс active активной ссылки
    return false;
  });
});
