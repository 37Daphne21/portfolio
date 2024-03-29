// Document Reaction
$(document).ready(function(){
// section2
	var browserWidth = $(window).outerWidth(); // 브라우저의 width값을 가져오기
	console.log(browserWidth);
	// 안경 "드래그" 시 안경 낀 여자 이미지로 변환
	if( browserWidth > 1024 ) {
		$("#section2 .glasses img").draggable({
			containment:"#section2",
			stop:function(){
				var n = $(this).index();
				$("#section2 .only").hide();
				if(n==0){$(this).stop().animate({"left":"2%","top":"50%"},300); $("#section2 .glasses_on img").eq(0).show().siblings().hide();}
				if(n==1){$(this).stop().animate({"left":"2%","top":"70%"},300); $("#section2 .glasses_on img").eq(1).show().siblings().hide(); }
				if(n==2){$(this).stop().animate({"left":"74%","top":"20%"},300); $("#section2 .glasses_on img").eq(2).show().siblings().hide();}
				if(n==3){$(this).stop().animate({"left":"74%","top":"45%"},300); $("#section2 .glasses_on img").eq(3).show().siblings().hide();}
				if(n==4){$(this).stop().animate({"left":"74%","top":"70%"},300); $("#section2 .glasses_on img").eq(4).show().siblings().hide();}
			}
		});
	} else if( browserWidth <= 1024 ) {
		// 안경 "클릭" 시 안경 낀 여자 이미지로 전환
		$("#section2 .glasses img").click(function(){
			var n = $(this).index();
			$("#section2 .only").hide();
			$("#section2 .glasses_on img").eq(n).show();
			$("#section2 .glasses_on img").eq(n).siblings().hide();
		});
	}


// section3
	// 화살표 자동 움직임
	$("#section3 .arrow").animate({"bottom":"160px"},800,function loop2(){
		$(this).animate({"bottom":"180px"},900);
		$(this).animate({"bottom":"160px"},900,loop2);
	});

	// play 버튼 클릭 시 animtation
	$("#section3 .play_btn").click(function(){
		// play 버튼 클릭하면 화살표 애니메이션 멈추고 없어지도록
		$("#section3 .arrow").hide().animate(function(){
			preventDefault();
		});
		$("#section3 .play_btn, #section3 .revert_btn").animate({"bottom":"170px"},500);
		$("#section3 .img_wrap button").slideDown(500);
		$("#section3 .img_wrap").css({"background":"rgba(0,0,0,0.3)"})
		$("#section3 .img_wrap h2").slideDown(500).animate({"font-size":"5em"},500).animate({"opacity":"0.3"},2000);
		$("#section3 .img_wrap .img1").delay(1000).animate({"left":"90px"},500);
		$("#section3 .img_wrap .img2").delay(1600).animate({"top":"50px"},500);
		$("#section3 .img_wrap .img3").delay(2200).animate({"right":"90px"},500);
		$("#section3 .img_wrap .img4").delay(2800).animate({"bottom":"50px"},500,function(){
			$("#section3 .play_btn").slideUp(500);
			$("#section3 .revert_btn").slideDown(500);
		});
	});

	// revert 버튼 클릭 시 반대로 animtation
	$("#section3 .revert_btn").click(function(){
		// play 버튼 클릭하면 화살표 애니메이션 멈추고 없어지도록
		$("#section3 .arrow").show();
		$("#section3 .play_btn, #section3 .revert_btn").animate({"bottom":"70px"},500);
		$("#section3 .img_wrap button").slideUp(500);
		$("#section3 .img_wrap").css({"background":"transparent"})
		$("#section3 .img_wrap h2").slideUp(500).animate({"font-size":"2.4em"},500).animate({"opacity":"1"},500);
		$("#section3 .img_wrap .img1").delay(600).animate({"left":"-400px"},500);
		$("#section3 .img_wrap .img2").delay(1200).animate({"top":"-200px"},500);
		$("#section3 .img_wrap .img3").delay(1800).animate({"right":"-290px"},500);
		$("#section3 .img_wrap .img4").delay(2400).animate({"bottom":"-250px"},500,function(){
			$("#section3 .play_btn").slideDown(500);
			$("#section3 .revert_btn").slideUp(500);
		});
	});

	// play 버튼과 revert 버튼 mouseover, mouseout
	$("#section3 .play").mouseover(function(){
		$(this).animate({"opacity":"0"},300);
		$("#section3 .play_h").animate({"opacity":"1"},300);
	});
	$("#section3 .play").mouseout(function(){
		$(this).animate({"opacity":"1"},300);
		$("#section3 .play_h").animate({"opacity":"0"},300);
	});

	$("#section3 .revert").mouseover(function(){
		$(this).animate({"opacity":"0"},300);
		$("#section3 .revert_h").animate({"opacity":"1"},300);
	});
	$("#section3 .revert").mouseout(function(){
		$(this).animate({"opacity":"1"},300);
		$("#section3 .revert_h").animate({"opacity":"0"},300);
	});

// section4
	// 각 img 클릭 시 상세정보 팝업 생성, exit 버튼 클릭 시 팝업 나가기
	$("#section4 .box1").click(function(){
		$(".detail_box_wrap").slideDown();
		$(".detail_img img:eq(0)").addClass("active");
		$(".detail_img img:eq(0)").siblings().removeClass("active");
		$(".detail_text p:eq(0)").addClass("active");
		$(".detail_text p:eq(0)").siblings().removeClass("active");
	});
	$("#section4 .box2").click(function(){
		$(".detail_box_wrap").slideDown();
		$(".detail_img img:eq(1)").addClass("active");
		$(".detail_img img:eq(1)").siblings().removeClass("active");
		$(".detail_text p:eq(1)").addClass("active");
		$(".detail_text p:eq(1)").siblings().removeClass("active");
	});
	$("#section4 .box3").click(function(){
		$(".detail_box_wrap").slideDown();
		$(".detail_img img:eq(2)").addClass("active");
		$(".detail_img img:eq(2)").siblings().removeClass("active");
		$(".detail_text p:eq(2)").addClass("active");
		$(".detail_text p:eq(2)").siblings().removeClass("active");
	});
	$("#section4 .box4").click(function(){
		$(".detail_box_wrap").slideDown();
		$(".detail_img img:eq(3)").addClass("active");
		$(".detail_img img:eq(3)").siblings().removeClass("active");
		$(".detail_text p:eq(3)").addClass("active");
		$(".detail_text p:eq(3)").siblings().removeClass("active");
	});

	$("#section4 .exit_h").click(function(){
		$(".detail_box_wrap").slideUp();
	});

	// exit 버튼 mouseover, mousecout
	$("#section4 .exit_btn").mouseover(function(){
		$("#section4 .exit_h").show();
		$("#section4 .exit").hide();
	});
	$("#section4 .exit_btn").mouseout(function(){
		$("#section4 .exit").show();
		$("#section4 .exit_h").hide();
	});


// section5
	// btn 클릭 시 side menu 오픈,클로즈
	$("#section5 .open_close_btn .open").click(function(){
		$("#section5 .box_wrap").stop().animate({"left":"0"},600);
		$("#section5 .open_close_btn").stop().animate({"left":"286px"},600);
		$(this).hide().siblings(".open_close_btn .close").show();
	});

	$("#section5 .open_close_btn .close").click(function(){
		$("#section5 .box_wrap").stop().animate({"left":"-266px"},600);
		$("#section5 .open_close_btn").stop().animate({"left":"20px"},600);
		$(this).hide().siblings(".open_close_btn .open").show();
	});

	// side menu 클릭 시 section5 전환(service/event/collection)
	$("#section5 .service").click(function(){
		$("#section5 .service_wrap").show(500);
		$("#section5 .service_wrap").siblings().hide();

		$("#section5 .box_wrap").stop().animate({"left":"-266px"},600);
		$("#section5 .open_close_btn").stop().animate({"left":"20px"},600);
		$("#section5 .open_close_btn .close").hide();
		$("#section5 .open_close_btn .close").siblings(".open_close_btn .open").show();
	});

	$("#section5 .event").click(function(){
		$("#section5 .event_wrap").show(500);
		$("#section5 .event_wrap").siblings().hide();

		$("#section5 .box_wrap").stop().animate({"left":"-266px"},600);
		$("#section5 .open_close_btn").stop().animate({"left":"20px"},600);
		$("#section5 .open_close_btn .close").hide();
		$("#section5 .open_close_btn .close").siblings(".open_close_btn .open").show();
	});

	$("#section5 .collection").click(function(){
		$("#section5 .collection_wrap").show(500);
		$("#section5 .collection_wrap").siblings().hide();

		$("#section5 .box_wrap").stop().animate({"left":"-266px"},600);
		$("#section5 .open_close_btn").stop().animate({"left":"20px"},600);
		$("#section5 .open_close_btn .close").hide();
		$("#section5 .open_close_btn .close").siblings(".open_close_btn .open").show();
	});
});


// Scroll Reaction
$(window).scroll(function(){
	var sc = $(this).scrollTop() + $(this).height();
	var section1Height = $("#section1").offset().top + ($("#section1").outerHeight()/3);
	var section1Height2 = $("#section1").offset().top + ($("#section1").outerHeight()/10);
	var section2Height = $("#section2").offset().top + ($("#section2").outerHeight()/3);
	var section2Height2 = $("#section2").offset().top + ($("#section2").outerHeight()/2);
	var section4Height = $("#section4").offset().top + ($("#section4").outerHeight()/3);
	var section5Height = $("#section5").offset().top + ($("#section5").outerHeight()/3);
	var section5Height2 = $("#section5").offset().top + ($("#section5").outerHeight()/2);

	// #section1
	if( sc >= section1Height ){
		$("#section1 .polaroid").slideDown(1000)
		$("#section1 .img_box h2").animate({"color":"#fff"},2000);
		$("#section1 .polaroid p").delay(500).animate({"bottom":"20px"},1000);
	}

	if( $(document).width() < 1297 ) {
		if( sc >= section1Height2 ){
			$("#section1 .polaroid").slideDown(1000)
			$("#section1 .img_box h2").animate({"color":"#fff"},2000);
			$("#section1 .polaroid p").delay(500).animate({"bottom":"20px"},1000);
		}
	}

	// #section2
	if( sc >= section2Height ){
		$("#section2 p").animate({"left":"175px"});
		$("#section2 .drag").animate({"opacity":"1"},1000);
	}
	if( sc >= section2Height2 ){
		$("#section2 .glasses img").eq(0).animate({"opacity":"1"},300,function(){
			$("#section2 .glasses img").eq(1).animate({"opacity":"1"},300,function(){
				$("#section2 .glasses img").eq(2).animate({"opacity":"1"},300,function(){
					$("#section2 .glasses img").eq(3).animate({"opacity":"1"},300,function(){
						$("#section2 .glasses img").eq(4).animate({"opacity":"1"},300);
					});
				});
			});
		});
	}

	// #section4
	if (sc >= section4Height ){
		$("#section4 h2").animate({"top":"0"},500);
		$("#section4 .box1").delay(300).slideDown();
		$("#section4 .box3").delay(600).slideDown();
		$("#section4 .box4").delay(900).slideDown();
		$("#section4 .box2").delay(1200).slideDown();
	}

	// #section5
	if( sc >= section5Height ){
		$("#section5 .service_wrap h2").animate({"right":"40px"},500);
	}

	if( sc >= section5Height ){
		$("#section5 .service_wrap .img2").animate({"top":"210px","opacity":"1"},500);
		$("img[class ^= img1_]").delay(500).animate({"left":"90px","opacity":"1"},500);
	}
	if( sc >= section5Height2 ){
		$("#section5 .service_wrap .img3").animate({"bottom":"0","opacity":"1"},500);
	}
});
