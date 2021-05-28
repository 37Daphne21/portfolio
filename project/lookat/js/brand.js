$(document).ready(function(){
// 메뉴바 색상만 재정의
    $(".menu_wrap").mouseenter(function(){
		$(this).css({"background-color":"rgba(185,185,185,0.7)"});
		$("header").css({"background-color":"rgba(185,185,185,0.7)"});
		$(".header_scroll").css({"background-color":"rgba(185,185,185,1)"});
		$(".header_scroll .menu_wrap").css({"background-color":"rgba(185,185,185,1)"});
	});

	$(".menu_wrap").mouseleave(function(){
		$(this).css({"background-color":"rgba(185,185,185,0.1)"});
		$("header").css({"background-color":"rgba(185,185,185,0.1)"});
		$(".header_scroll").css({"background-color":"rgba(185,185,185,0.7)"});
		$(".header_scroll .menu_wrap").css({"background-color":"rgba(185,185,185,0.7)"});
	});


////////////////////////////////// banner //////////////////////////////////
// load 시
	$(".main_banner .img_box img:first").animate({"opacity":"1"},1200);
	$(".main_banner .right_section img:first").animate({"opacity":"1"},1200);
	$(".main_banner h1").animate({"marginTop":"230px"},500);

// 오른쪽 > 버튼 클릭 시
	var img_num = 1;
	$(".main_banner .right_btn").click(function(){
		img_num = img_num + 1;
		if(img_num == 4){img_num = 1};
		$(".main_banner .left_img").attr({"src":"images/brand/banner_left" + img_num + ".jpg"});
		$(".main_banner .right_img").attr({"src":"images/brand/banner_right" + img_num + ".jpg"});
		$(".main_banner .round_box div").eq(img_num - 1).addClass("active");
		$(".main_banner .round_box div").eq(img_num - 1).siblings().removeClass("active");
	});
// 왼쪽 < 버튼 클릭 시
	$(".main_banner .left_btn").click(function(){
		img_num = img_num - 1;
		if(img_num == 0){img_num = 3};
		$(".main_banner .left_img").attr({"src":"images/brand/banner_left" + img_num + ".jpg"});
		$(".main_banner .right_img").attr({"src":"images/brand/banner_right" + img_num + ".jpg"});
		$(".main_banner .round_box div").eq(img_num - 1).addClass("active");
		$(".main_banner .round_box div").eq(img_num - 1).siblings().removeClass("active");
	});

// dot 클릭 시
	$(".main_banner .round_box div").eq(0).click(function(){
		$(".main_banner .img_box img").attr("src","images/brand/banner_left1.jpg");
		$(".main_banner .right_section img").attr("src","images/brand/banner_right1.jpg");
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});
	$(".main_banner .round_box div").eq(1).click(function(){
		$(".main_banner .img_box img").attr("src","images/brand/banner_left2.jpg");
		$(".main_banner .right_section img").attr("src","images/brand/banner_right2.jpg");
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});
	$(".main_banner .round_box div").eq(2).click(function(){
		$(".main_banner .img_box img").attr("src","images/brand/banner_left3.jpg");
		$(".main_banner .right_section img").attr("src","images/brand/banner_right3.jpg");
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});
////////////////////////////////// section1_book //////////////////////////////////
// 화살표 자동 움직임
	$("#section1 .arrow1").animate({"top":"50px"},800,function loop1(){
		$(this).animate({"top":"70px"},900);
		$(this).animate({"top":"50px"},900,loop1);
	});

	$("#section1 .book").click(function(){
		$("#section1 .arrow1").hide().animate(function(){
			preventDefault();
		});
	});

// page1 → page2,3
	$("#section1 .page1").click(function(){
		$(".section1_bg").animate({"top":"-1350px"},3000);
		$(this).animate({"left":"640px"},600,function(){
			$(this).css({"transform":"rotateY(-180deg)"});
			$(this).delay(700).animate({"width":"0"},200);
		});
		$("#section1 .page6").animate({"left":"640px","width":"0"},600);
		$("#section1 .page5").animate({"left":"640px"},600);
		$("#section1 .page4").animate({"left":"640px"},600);
		$("#section1 .page3").animate({"left":"640px"},600);
		$("#section1 .page2").animate({"left":"640px"},600,function(){
			$("#section1 .page2").delay(700).animate({"left":"260px"},600);
		});
	});

// page2 → page1
	$("#section1 .page2").click(function(){
		$(this).css({"transform":"rotateY(180deg)"});
		$("#section1 .page1").css({"transform":"rotateY(0)"}); // page1 원상복귀
		$("#section1 .page1").delay(800).animate({"width":"380px"},200,function(){
			$("#section1 .page6").animate({"left":"450px"},600);
			$("#section1 .page5").animate({"left":"450px"},600);
			$("#section1 .page4").animate({"left":"450px"},600);
			$("#section1 .page3").animate({"left":"450px"},600);
			$("#section1 .page2").css({"transform":"rotateY(0deg)"}).animate({"left":"450px"},100);
			$("#section1 .page1").animate({"left":"450px"},600);
		});
	});

// page3 → page4,5
	$("#section1 .page3").click(function(){
		$(this).css({"transform":"rotateY(-180deg)"});
		$(this).delay(800).animate({"width":"0"},200);
		$("#section1 .page2").css({"z-index":"0"});
		$("#section1 .page4").delay(700).animate({"left":"260px"},600);
		$("#section1 .page5").show().animate({"left":"640px"},600);
	});

// page4 → page2,3
	$("#section1 .page4").click(function(){
		$(this).css({"transform":"rotateY(180deg)"});
		$("#section1 .page3").css({"transform":"rotateY(0)"}).delay(800).animate({"width":"380px"},200,function(){ // page3 원상복귀
			$("#section1 .page4").css({"transform":"rotateY(0deg)"}).animate({"left":"640px"},600); // page4 원상복귀
			$("#section1 .page2").css({"z-index":"1"}); // page2 원상복귀
		});
	});

// page5 → page6
	$("#section1 .page5").click(function(){
		$(this).css({"transform":"rotateY(-180deg)"});
		$("#section1 .page6").delay(700).animate({"left":"260px","width":"380px"},600,function(){
			$("#section1 .page5").css({"transform":"rotateY(0deg)"}).hide();
			$("#section1 .book > div").animate({"left":"450px"},600);
			$("#section1 .page1").css({"transform":"rotateY(0deg)"}); // page1 원상복귀
		});
	});

	$("#section1 .page6").click(function(){
		$("#section1 .page1").animate({"width":"380px"});

		$("#section1 .page3").css({"transform":"rotateY(0)"}).delay(800).animate({"width":"380px"},200,function(){ // page3 원상복귀
			$("#section1 .page4").css({"transform":"rotateY(0deg)"}) // page4 원상복귀
			$("#section1 .page2").css({"z-index":"1"}); // page2 원상복귀
		});
	});


////////////////////////////////// section2 //////////////////////////////////
// 화살표 자동 움직임
	$("#section2 .arrow2").animate({"top":"210px"},800,function loop2(){
		$(this).animate({"top":"200px"},900);
		$(this).animate({"top":"220px"},900,loop2);
	});

	$("#section2 .thumbnail_box").click(function(){
		$("#section2 .arrow2").animate(function(){
			preventDefault();
		});
	});

// 썸네일 이미지 클릭 시 큰 이미지 변동
	var image_num = 0; // 재지정
	$("#section2 .left_section .thumbnail_box").click(function(){
		image_num = image_num + 1;
		if(image_num == 3){image_num = 0};
		$("#section2 .left_section .thumbnail_box img").eq(image_num).addClass("active");
		$("#section2 .left_section .thumbnail_box img").eq(image_num).siblings().removeClass("active");
		$("#section2 .left_section .round_box div").eq(image_num).addClass("active");
		$("#section2 .left_section .round_box div").eq(image_num).siblings().removeClass("active");
		$("#section2 .right_section > div").eq(image_num).addClass("active");
		$("#section2 .right_section > div").eq(image_num).siblings().removeClass("active");
	});


////////////////////////////////// section3 //////////////////////////////////
	$("#section3 .img_box img").mouseover(function(){
		$(this).animate({"top":"0"},700);
	});
	$("#section3 .img_box img").mouseout(function(){
		$(this).animate({"top":"-200px"},700);
	});

////////////////////////////////// section4 //////////////////////////////////
// img_button 클릭 시 contents 전체 이동
	$("#section4 .img_button").click(function(){
		$("#section4 .img_button").animate({"width":"310px","height":"376px"},500);
		$("#section4 .first").animate({"left":"0","top":"0"},600);
		$("#section4 .second").animate({"left":"0","top":"400px"},600);
	});
	$("#section4 .first").click(function(){
		$(this).css({"cursor":"default"});
		$(this).children("img").css({"opacity":"0.5"});
		$(this).children("p").css({"opacity":"1","letter-spacing":"10px","font-size":"28px","bottom":"30px"});
		$("#section4 .second").css({"cursor":"pointer"});
		$("#section4 .second img").css({"opacity":"1"});
		$("#section4 .second p").css({"opacity":"0","letter-spacing":"0","font-size":"28px","bottom":"30px"});
		$("#section4 .second_wrap").hide(1000);
		$("#section4 .first_wrap").show(1000);
	})
	$("#section4 .second").click(function(){
		$(this).css({"cursor":"default"});
		$(this).children("img").css({"opacity":"0.5"});
		$(this).children("p").css({"opacity":"1","letter-spacing":"10px","font-size":"28px","bottom":"30px"});
		$("#section4 .first").css({"cursor":"pointer"});
		$("#section4 .first img").css({"opacity":"1"});
		$("#section4 .first p").css({"opacity":"0","letter-spacing":"0","font-size":"28px","bottom":"30px"});
		$("#section4 .second_wrap").show(1000);
		$("#section4 .first_wrap").hide(1000);
	});

////////////////////////////////// section5 //////////////////////////////////
// 이미지 확대
	$("#section5 .img_box img").click(function(){
		var n = $(this).index();
		$("#section5 .bigimg_box").slideDown(600);
		$("#section5 .bigimg_box img").eq(n).css({"display":"block"});
		$("#section5 .bigimg_box img").eq(n).siblings().css({"display":"none"});
		$("#section5 .img_box").animate({"opacity":"0.5"});
	});
	$("#section5 .bigimg_box").click(function(){
		$(this).slideUp(600);
		$("#section5 .img_box").animate({"opacity":"1"});
	});
});


//////////////////////////// 스크롤반응 ////////////////////////////
$(window).scroll(function(){
	var sc = $(this).scrollTop()
	$("#sc").html(sc);
// section1
	if(sc >= 600){
		$("#section1 .book").animate({"top":"140px"},800);
		$("#section1 .page1 h2").delay(700).animate({"top":"50px"},800);
	}

// section2
	if(sc >= 1500){
		$("#section2 .mouse").animate({"top":"100px"},1000);
		$("#section2 .contents h2").animate({"opacity":"1"},1000);
	}

// section3
	if(sc >= 2700){
		$("#section3 h2").animate({"left":"510px","top":"350px","font-size":"50px","opacity":"1"},1000)
		.css("color","#000");
	}
	if(sc >= 3000){
		$("#section3 div:has(h3)").slideDown();
	}

// section5
	if(sc >= 4700){
		$("#section5 .inner > img").animate({"opacity":"0.6"},500);
		$("#section5 .img_box .photo1").animate({"top":"130px"},1000);
		$("#section5 .img_box .photo2").delay(1000).animate({"top":"140px"},1000);
		$("#section5 .img_box .photo3").delay(500).animate({"top":"90px"},1000);
	}
});