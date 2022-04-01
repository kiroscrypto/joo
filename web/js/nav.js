$(function(){
$(".nav span").on("mouseover", function () {
 var position = $(this).parent().position();
 var width = $(this).parent().width();
 $(".nav .slide").css({
     opacity: 1,
     left: +position.left,
     width: width
 });
});

$(".nav span").on("mouseout", function () {
 $(".nav .slide").css({ opacity: 0 });
});
});