
$(function(){
	$(".trans").hover(function(){
		$(this).fadeTo(150, 0.6); 
	},function(){
		$(this).fadeTo(150, 1.0); 
	});
});

$(function(){
    // #で始まるアンカーをクリックした場合に処理
    $('.anchorlink').click(function() {
       // スクロールの速度
       var speed = 400; // ミリ秒
       // アンカーの値取得
       var href= $(this).attr("href");
       // 移動先を取得
       var target = $(href == "#" || href == "" ? 'html' : href);
       // 移動先を数値で取得
       var position = target.offset().top;
       // スムーススクロール
       $('body,html').animate({scrollTop:position}, speed, 'swing');
       return false;
    });
 });
 $(document).ready(function() {
     var pagetop = $('.pagetop');
     $(window).scroll(function () {
         if ($(this).scrollTop() > 700) {
             pagetop.fadeIn();
         } else {
             pagetop.fadeOut();
         }
     });
     pagetop.click(function () {
         $('body, html').animate({ scrollTop: 0 }, 1000);
         return false;
     });
 });



 $(window).load(function(){
    
    $('.para1').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    var div = $(this); {
    setTimeout(function(){
      $(div).stop().animate({
        "top":" 28%",
        "opacity":" 1"
        },1000);
      },500);
      }
    });

    $('.para2').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    var div = $(this);{
    setTimeout(function(){
      $(div).stop().animate({
        "opacity":" 1"
        },500);
      },150);
      }
    });
  
  $('.para3').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    var div = $(this);{
    setTimeout(function(){
      $(div).stop().animate({
        "opacity":" 1"
        },1200);
      },600);
      }
    });

});

$(function(){
	var flg = "close"; 
	$('.menu-trigger').on('click', function(){
		$(this).toggleClass('active');
		
		$('.sp-menu').toggleClass('open');
	});
	$('.sp-menulink').on('click', function(){
		$('.menu-trigger').removeClass('active');
		
		$('.sp-menu').removeClass('open');
	});
});
$(document).on('click touchend',   function(e) {
  if (!$(e.target).closest('.menu-btn').length) {
    $('.menu-btn').removeClass('on');
	$('.menu-trigger').removeClass('active');
		
	$('.sp-menu').removeClass('open');
  }
});