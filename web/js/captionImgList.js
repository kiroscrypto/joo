$(function(){
	$('.captionImgList li').on('mouseenter',function(){
		$(this).find('.imgCaption').stop().animate({height:150},300);
		$(this).find('.imgBox').stop().animate({height:200},500);
	});
	$('.captionImgList li').on('mouseleave',function(){
		$(this).find('.imgCaption').stop().animate({height:0});
		$(this).find('.imgBox').stop().animate({height:250});
	});
})