$(document).on(function () {
  //when the button is clicked
  $("#showMenu").click(function () {
    //apply toggleable classes
    $("nav").toggleClass("show");
    $("#showMenu").toggleClass("moveButton");
  });

  $("#wrap").click(function () {
    $("nav").removeClass("show");
    $("#showMenu").removeClass("moveButton");
  });
});