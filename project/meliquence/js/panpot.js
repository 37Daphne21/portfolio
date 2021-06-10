$(document).ready(function(){

// mainbanner 색상변경
		function colorize(){
			var showImg = $(".mainbanner img:eq(0)");
			var nextImg = $(".mainbanner img:eq(1)");

			nextImg.addClass("color")
			nextImg.css({"opacity":"0"}).stop().animate({"opacity":"1"},500,function(){
				showImg.appendTo(".mainbanner").removeClass("color");
			});
		}

		var colorrepeat = setInterval(colorize,1000,function(){
			colorrepeat=setInterval(colorize,1000);
		});

// section2구역 / 숫자 버튼 누르면 후라이팬 + 요리 + 텍스트 변화
	$("#section2 #section2_left h3 .f_bt").click(function(){
		$("#section2_left .imgbox img:first-child").stop().animate({"left":"0"},500);
		$("#section2_left .imgbox img:last-child").stop().animate({"left":"400px"},500);
		$("#section2_left .textbox p:first-child").stop().animate({"left":"0"},500);
		$("#section2_left .textbox p:last-child").stop().animate({"left":"400px"},500);

		$("#section2 .pan3").stop().animate({"opacity":"1"},300);
		$("#section2 .pan3_1").stop().animate({"opacity":"0"},300);
	});

	$("#section2 #section2_left h3 .s_bt").click(function(){
		$("#section2_left .imgbox img:first-child").stop().animate({"left":"-400px"},500);
		$("#section2_left .imgbox img:last-child").stop().animate({"left":"0"},500);
		$("#section2_left .textbox p:first-child").stop().animate({"left":"-400px"},500);
		$("#section2_left .textbox p:last-child").stop().animate({"left":"0"},500);

		$("#section2 .pan3").stop().animate({"opacity":"0"},300);
		$("#section2 .pan3_1").stop().animate({"opacity":"1"},300);
	});


// section2구역 / pan2 둥둥 떠있는 효과
	$("#section2 .pan2").animate({"top":"20px"},1500,function float(){
		$(this).animate({"top":"0px"},1500);
		$(this).animate({"top":"20px"},1500,float);
	});

// section3구역 / O 버튼 클릭 시 후라이팬 + 요리 변화
	$("#section3 .button_box div:nth-child(1)").click(function(){
		$("#section3 .pan_change_box img:nth-child(1)").animate({"left":"0"});
		$("#section3 .pan_change_box img:nth-child(2)").animate({"left":"750px"});
		$("#section3 .pan_change_box img:nth-child(3)").animate({"left":"1500px"});

		$("#section3 .button_box div:nth-child(1)").addClass("clicked_button");
		$("#section3 .button_box div:nth-child(2)").removeClass("clicked_button");
		$("#section3 .button_box div:nth-child(3)").removeClass("clicked_button");

		$("#section3 .imgbox:nth-child(1)").addClass("on");
		$("#section3 .imgbox:nth-child(2)").removeClass("on");
		$("#section3 .imgbox:nth-child(3)").removeClass("on");
	});

	$("#section3 .button_box div:nth-child(2)").click(function(){
		$("#section3 .pan_change_box img:nth-child(2)").animate({"left":"0"});
		$("#section3 .pan_change_box img:nth-child(1)").animate({"left":"-750px"});
		$("#section3 .pan_change_box img:nth-child(3)").animate({"left":"750px"});

		$("#section3 .button_box div:nth-child(1)").removeClass("clicked_button");
		$("#section3 .button_box div:nth-child(2)").addClass("clicked_button");
		$("#section3 .button_box div:nth-child(3)").removeClass("clicked_button");

		$("#section3 .imgbox:nth-child(1)").removeClass("on");
		$("#section3 .imgbox:nth-child(2)").addClass("on");
		$("#section3 .imgbox:nth-child(3)").removeClass("on");
	});

	$("#section3 .button_box div:nth-child(3)").click(function(){
		$("#section3 .pan_change_box img:nth-child(3)").animate({"left":"0"});
		$("#section3 .pan_change_box img:nth-child(1)").animate({"left":"-1500px"});
		$("#section3 .pan_change_box img:nth-child(2)").animate({"left":"-750px"});

		$("#section3 .button_box div:nth-child(1)").removeClass("clicked_button");
		$("#section3 .button_box div:nth-child(2)").removeClass("clicked_button");
		$("#section3 .button_box div:nth-child(3)").addClass("clicked_button");

		$("#section3 .imgbox:nth-child(1)").removeClass("on");
		$("#section3 .imgbox:nth-child(2)").removeClass("on");
		$("#section3 .imgbox:nth-child(3)").addClass("on");
	});


// section5구역 / food 이미지 누르면 위치,투명도 변경
	$("#section5 .imgbox1 img:first-child").click(function(){
		$("#section5 .imgbox1 img:first-child")
		.stop().animate({"left":"0","top":"20px","opacity":"0.2","z-index":"1"});
		$("#section5 .imgbox1 img:last-child")
		.stop().animate({"left":"20px","top":"0","opacity":"1","z-index":"9"});
	});

	$("#section5 .imgbox1 img:last-child").click(function(){
		$("#section5 .imgbox1 img:first-child")
		.stop().animate({"left":"20px","top":"0","opacity":"1","z-index":"9"});
		$("#section5 .imgbox1 img:last-child")
		.stop().animate({"left":"0","top":"20px","opacity":"0.2","z-index":"1"});
	});


	$("#section5 .imgbox2 img:first-child").click(function(){
		$("#section5 .imgbox2 img:first-child")
		.stop().animate({"left":"20px","top":"20px","opacity":"0.2","z-index":"1"});
		$("#section5 .imgbox2 img:last-child")
		.stop().animate({"left":"0","top":"0","opacity":"1","z-index":"9"});
	});

	$("#section5 .imgbox2 img:last-child").click(function(){
		$("#section5 .imgbox2 img:first-child")
		.stop().animate({"left":"0","top":"0","opacity":"1","z-index":"9"});
		$("#section5 .imgbox2 img:last-child")
		.stop().animate({"left":"20px","top":"20px","opacity":"0.2","z-index":"1"});
	});


	$("#section5 .imgbox3 img:first-child").click(function(){
		$("#section5 .imgbox3 img:first-child")
		.stop().animate({"left":"20px","top":"20px","opacity":"0.2","z-index":"1"});
		$("#section5 .imgbox3 img:last-child")
		.stop().animate({"left":"0","top":"0","opacity":"1","z-index":"9"});
	});

	$("#section5 .imgbox3 img:last-child").click(function(){
		$("#section5 .imgbox3 img:first-child")
		.stop().animate({"left":"0","top":"0","opacity":"1","z-index":"9"});
		$("#section5 .imgbox3 img:last-child")
		.stop().animate({"left":"20px","top":"20px","opacity":"0.2","z-index":"1"});
	});
});



//////////////////////////// 스크롤반응 ////////////////////////////
$(window).scroll(function(){
	var sc = $(this).scrollTop() + $(this).height();
	var section1Height = $("#section1").offset().top + ($("#section1").outerHeight()/2);
	var section2Height = $("#section2").offset().top + ($("#section2").outerHeight()/2);
	var section3Height = $("#section3").offset().top + ($("#section3").outerHeight()/2);
	var section4Height = $("#section4").offset().top + ($("#section4").outerHeight()/2);
	var section5Height = $("#section5").offset().top + ($("#section5").outerHeight()/2);


// section1
	if( sc >= section1Height ){
		$("#section1 .imgbox").animate({"right":"0"},500);
		$("#section1 .textbox").animate({"left":"0"},500);
	}

// section2
	if( sc >= section2Height ){
		$("#section2 #section2_left").animate({"paddingTop":"100px"},500);
	}

// section3
	if( sc >= section3Height ){
		$("#section3 .imgbox:nth-child(1) img").animate({"marginTop":"200px"},500);
		$("#section3 .textbox").animate({"right":"0"},500);
	}

// section4
	if( sc >= section4Height ){
		$("#section4 .pot1").animate({"top":"42px"},700);
		$("#section4 .textbox").delay(200).animate({"right":"0"},700);
		$("#section4 .pot2").animate({"left":"0"},700,function(){
			$("#section4 .pot3").animate({"opacity":"1"},500);
		});
	}
// section5
	if( sc >= section5Height ){
		$("#section5 .imgbox_left h3").animate({"text-indent":"30px"},500);
		$("#section5 .imgbox_right").animate({"marginRight":"0"},500);
	}
});
