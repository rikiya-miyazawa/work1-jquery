$(function(){
  //ボタンクリックされたら
  $('.btn-area').click(function(){
      //1秒かけて青いバーの横幅を300pxに変更
      $('#submit1').animate({width: '330px'}, 1000);
  });
});

$(function(){
  $('.btn-area').click(function(){
      $('#submit1').css('background-color', 'green');
  });
});

// $("#button1").click(function() {
$(".btn-area").click(function() {
  $("#submit1").animate({
    marginLeft:'200px'//margin-leftをキャメルケースで書く
  });
});

// $("#button2").click(function() {
$(".btn-area").click(function() {
  $("#submit1").animate({
    marginLeft:'0px'//margin-leftをキャメルケースで書く
  });
});

$( ".button_su_inner" ).mouseenter(function(e) {
  var parentOffset = $(this).offset(); 
 
  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
  $(this).prev(".su_button_circle").removeClass("desplode-circle");
  $(this).prev(".su_button_circle").addClass("explode-circle");

});

$( ".button_su_inner" ).mouseleave(function(e) {

    var parentOffset = $(this).offset(); 

    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("explode-circle");
    $(this).prev(".su_button_circle").addClass("desplode-circle");

});