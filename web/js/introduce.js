$(function(){
  var getslide = $('.introduce li').length - 1;
  var slidecal = 30/getslide+'%';
  $('.box').css({"width": slidecal});
  $('.box').click(function(){
  $('.box').removeClass('active');
  $(this).addClass('active');
    });
})
  