$(document).ready(function(){
// 링크없는 a태그 마우스커서 차단
	$("a[href='#']").css({"cursor":"default"});

// a href="#" 클릭시에 맨 위로 올라가지 않고 제자리
	$("a[href='#']").click(function(e){
		e.preventDefault();
	});

// header의 scroll반응
	$(window).scroll(function(){
		var sc = $(this).scrollTop()

		if(sc >= 150){
			$("header").css({"top":"-80px","background-color":"#000"});
			$(".menubar>li a").css({"color":"#fff"});
		}else if(sc < 50){
			$("header").css({"top":"0px", "background-color":"transparent"});
			$(".menubar>li a").css({"color":"#000"});
		}
	});

// header의 mouseover,out
	$("header").mouseenter(function(){
		$(this).css({"background-color":"rgba(0,0,0,1)"});
		$(".logo_black").css({"display":"none"});
		$(".logo_white").css({"display":"block"});
		$(".menubar>li a").css({"color":"#fff"});
	});

	$("header").mouseleave(function(){
		$(this).css({"background-color":"rgba(0,0,0,0)"});
		$(".logo_black").css({"display":"block"});
		$(".logo_white").css({"display":"none"});
		$(".menubar>li a").css({"color":"#000"});
	});

	$(".menubar .menu li").mouseover(function(){
		$(this).children().css({"color":"#fc9"});
	});

	$(".menubar .menu li").mouseout(function(){
		$(this).children().css({"color":"#fff"});
	});


// footer의 top버튼 클릭 시 맨 위로 이동
	$(".top_scroll").click(function(){
		$("body,html").animate({"scrollTop":"0"},1000);
	});
});

