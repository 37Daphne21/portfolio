// Document Reaction
$(document).ready(function(){
	// 링크없는 a태그 마우스커서 차단
	$("a[href='#']").css({"cursor":"default"});

	// a href="#" 클릭시에 맨 위로 올라가지 않고 제자리
	$("a[href='#']").click(function(e){
		e.preventDefault();
	});

	// ^top버튼 클릭 시 맨 위로 이동
	$(".top_scroll").click(function(){
		$("body,html").animate({"scrollTop":"0"},1000);
	});

// header
	// login_bar의 icon_search 클릭 시 search_bar 생성
	$(".menu_icon .icon_search").click(function(){
		$(".menu_icon .search > a").animate({"width":"200px"},500).css({"background":"#000"})
		$(".menu_icon .search .search_bar").show(500);
		$(".menu_icon .icon_search").hide();
		$(".menu_icon .icon_search_cancel").show();
	});
	$(".menu_icon .icon_search_cancel").click(function(){
		$(".menu_icon .search > a").animate({"width":"48px"},500,function(){
			$(this).css({"background":"transparent"});
		});

		$(".menu_icon .search .search_bar").hide(500);
		$(".menu_icon .icon_search").show();
		$(".menu_icon .icon_search_cancel").hide();
	});

	// 메뉴바 기본움직임(browserWidth 1024 이상)
	var browserWidth = $(window).outerWidth(); // 브라우저의 width값을 가져오기
	// console.log(browserWidth);
	if( browserWidth > 1024 ) {
		$(".menu_wrap").on("mouseenter",function(){
			$(".sub_menu").stop().slideDown();

		});
		$(".menu_wrap").on("mouseleave",function(){
			$(".sub_menu").stop().slideUp();
		});
	}

	// 반응형 .toogle_btn 클릭 시 메뉴바 토글
	$(".toggle_btn").on("click",function(){
		$(".menu_wrap").stop().slideToggle();
	});
});


// Resize Reaction
$(window).resize(function (){
	var browserWidth = $(window).outerWidth(); // 브라우저의 width값을 가져오기
	console.log(browserWidth)

	if( browserWidth > 1024 ) {
		$("header").css({"background":"transparent","opacity":"0.7"});
		$(".login_bar, .sub_menu, .menu_wrap").css({"display":"block"})
		$(".logo").css({"text-align":"center","padding-bottom":"10px","text-indent":"0"});
		$(".menu_wrap").on("mouseenter",function(){
			$(".sub_menu").stop().slideDown();
			$("header").css({"background":"rgba(185,173,159,1)","opacity":"1"});
		});
		$(".menu_wrap").on("mouseleave",function(){
			$(".sub_menu").stop().slideUp();
			$("header").css({"background":"transparent","opacity":"0.7"});
		});
	}

	if( browserWidth <= 1024 ) {
		$("header").css({"background":"rgba(185,173,159,1)","opacity":"1"});
		$(".login_bar, .sub_menu, .menu_wrap").css({"display":"none"})
		$(".logo").css({"text-align":"left","padding-bottom":"0","text-indent":"10px"});
		$(".menu_wrap").on("mouseenter",function(){
			$(".sub_menu").css({"display":"none"})
			$("header").css({"background":"rgba(185,173,159,1)","opacity":"1"});
		});
		$(".menu_wrap").on("mouseleave",function(){
			$(".sub_menu").css({"display":"none"})
			$("header").css({"background":"rgba(185,173,159,1)","opacity":"1"});
		});
	}
});


// Scroll Reaction
$(window).scroll(function(){
	var sc = $(this).scrollTop()
	/* console.log(sc); */
	// 스크롤 시 header 변화(browserWidth 1024 이상)
	var browserWidth = $(window).outerWidth(); // 브라우저의 width값을 가져오기
	console.log(browserWidth);
		if( browserWidth > 1024 ) {
		if( sc >= 200 ) {
			$(".login_bar").slideUp();
			$(".logo").stop().animate({"padding-bottom":"0"});
			$("header").css({"background-color":"rgba(185,173,159,0.9)"});
			$(".menu_wrap").on("mouseenter",function(){
				$("header").css({"background-color":"rgba(185,173,159,1)"});
			});
			$(".menu_wrap").on("mouseleave",function(){
				$("header").css({"background-color":"rgba(185,173,159,0.7)"});
			});
		} else if( sc < 200 ) {
			$(".login_bar").slideDown();
			$(".logo").stop().animate({"padding-bottom":"10px"});
			$("header").css({"background-color":"transparent"});
			$(".menu_wrap").on("mouseenter",function(){
				$("header").css({"background-color":"rgba(185,173,159,0.7)"});
			});
			$(".menu_wrap").on("mouseleave",function(){
				$("header").css({"background-color":"transparent"});
			});
		}
	}

	// 스크롤 시 top 버튼 생성
	if( sc >= 300 ) {
		$(".top_scroll").show();
	} else if( sc < 300 ) {
		$(".top_scroll").hide();
	}
});
