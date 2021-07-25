$(document).ready(function(){
// 링크없는 a태그 마우스커서 차단
	$("a[href='#']").css({"cursor":"default"});

// a href="#" 클릭시에 맨 위로 올라가지 않고 제자리
	$("a[href='#']").click(function(e){
		e.preventDefault();
	});


// header와 .header_scroll의 menubar 움직임 및 배경색

	$(window).resize(function (){
		var browserWidth = $(window).outerWidth(); // 브라우저의 width값을 가져오기
		console.log(browserWidth)

		if( browserWidth <= 1024 ) {
			// 반응형 .toogle메뉴
			$(".menu_wrap").css({"display":"none","height":"250px"});
			$(".toggle_btn").on("click",function(){
				$(".menu_wrap").stop().slideToggle();
				$("header").css({"background-color":"rgba(185,173,159,0.7)"});
				$("header .menu_wrap").css({"background-color":"rgba(185,173,159,0.7)"});
				$(".header_scroll").css({"background-color":"rgba(185,173,159,0.7)"});
				$(".header_scroll .menu_wrap").css({"background-color":"rgba(185,173,159,0.7)"});
			});
		}

		if( browserWidth > 1024 ) {
			$(".menu_wrap").css({"height":"53px","display":"block"});
			$(".menu_wrap").on("mouseenter",function(){
				$(this).stop().animate({"height":"310px"},500);
			});

			$(".menu_wrap").on("mouseleave",function(){
				$(this).stop().animate({"height":"53px"},500);
			});
		}
	});

	// 메뉴바 기본움직임(1024 이상)
	$(".menu_wrap").on("mouseenter",function(){
		$(this).stop().animate({"height":"310px"},500);
		$(this).css({"background-color":"rgba(185,173,159,0.7)"});
		$("header").css({"background-color":"rgba(185,173,159,0.7)"});
		$(".header_scroll").css({"background-color":"rgba(185,173,159,1)"});
		$(".header_scroll .menu_wrap").css({"background-color":"rgba(185,173,159,1)"});
	});
	$(".menu_wrap").on("mouseleave",function(){
		$(this).stop().animate({"height":"53px"},500);
		$(this).css({"background-color":"rgba(185,173,159,0.1)"});
		$("header").css({"background-color":"rgba(185,173,159,0.1)"});
		$(".header_scroll").css({"background-color":"rgba(185,173,159,0.7)"});
		$(".header_scroll .menu_wrap").css({"background-color":"rgba(185,173,159,0.7)"});
	});

	// 반응형 기본움직임 (.toogle_btn)
	$(".toggle_btn").on("click",function(){
		$(".menu_wrap").stop().slideToggle();
		$("header").css({"background-color":"rgba(185,173,159,0.7)"});
		$("header .menu_wrap").css({"background-color":"rgba(185,173,159,0.7)"});
		$(".header_scroll").css({"background-color":"rgba(185,173,159,0.7)"});
		$(".header_scroll .menu_wrap").css({"background-color":"rgba(185,173,159,0.7)"});
	});


// 각 menu hover 시
	$(".sub_menu li").mouseover(function(){
		$(this).parents("li").css({"background-color":"rgba(255,255,255,0.1)"});
		$(this).children("a").css({"color":"#fff"});
	});

	$(".sub_menu li").mouseout(function(){
		$(this).parents("li").css({"background-color":"transparent"});
		$(this).children("a").css({"color":"#000"});
	});

// icon_search 클릭 시 search_bar 생성
	$(".menu_icon .icon_search").click(function(){
		$(".menu_icon .search").animate({"width":"200px"},500).css({"background":"#000"})
		$(".menu_icon .search .search_bar").show(500);
		$(".menu_icon .icon_search").hide();
		$(".menu_icon .icon_search_cancel").show();
	});
	$(".menu_icon .icon_search_cancel").click(function(){
		$(".menu_icon .search").animate({"width":"36px"},500).css({"background":"transparent"});
		$(".menu_icon .search .search_bar").hide(500);
		$(".menu_icon .icon_search").show(300);
	});

// ^top버튼 클릭 시 맨 위로 이동
	$(".top_scroll").click(function(){
		$("body,html").animate({"scrollTop":"0"},1000);
	});
});


// header의 scroll반응(.header_scroll 등장)
$(window).scroll(function(){
	var sc = $(this).scrollTop()
// header 변형
	if(sc >= 200){
		$("header").removeClass("on");
		$(".header_scroll").addClass("on");
	} else if(sc < 200){
		$("header").addClass("on");
		$(".header_scroll").removeClass("on");
	}

// top 버튼 생성
	if(sc >= 300){
		$(".top_scroll").show();
	} else if(sc < 300){
		$(".top_scroll").hide();
	}
});
