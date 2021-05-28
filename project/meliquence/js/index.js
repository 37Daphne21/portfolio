$(document).ready(function(){
// mainbanner 애니메이션
	$(".mainbanner img").animate({"top":"-200%"},5000,function shuttle(){
		$(this).delay(1000).animate({"top":"0"},5000);
		$(this).delay(1000).animate({"top":"-200%"},5000,shuttle);
	});

// section4 imglist 클릭시 imgbanner 효과(인덱스값을 반환, 인덱스값과 일치하면 실행)
	$("#section4 .imglist li").click(function(){
		$(this).stop().animate({"opacity":"0.7"},300);
		$(this).siblings().stop().animate({"opacity":"1"},300);
		$(this).siblings().children("p").css({"color":"#000"},300);
		$(this).children("em").css({"color":"#fff","opacity":"1","letter-spacing":"3px"});
		$(this).siblings().children("em").animate({"opacity":"0"},100);
		var list = $(this).index();
		if(list == 0){
			$("#section4 .imgbanner img:eq(0)").siblings().stop().animate({"opacity":"0"},100);
			$("#section4 .imgbanner img:eq(0)").stop().animate({"opacity":"1"},300);
		}
		if(list == 1){
			$("#section4 .imgbanner img:eq(1)").siblings().stop().animate({"opacity":"0"},100);
			$("#section4 .imgbanner img:eq(1)").stop().animate({"opacity":"1"},300);
		}
		if(list == 2){
			$("#section4 .imgbanner img:eq(2)").siblings().stop().animate({"opacity":"0"},100);
			$("#section4 .imgbanner img:eq(2)").stop().animate({"opacity":"1"},300);
		}
		if(list == 3){
			$("#section4 .imgbanner img:eq(3)").siblings().stop().animate({"opacity":"0"},100);
			$("#section4 .imgbanner img:eq(3)").stop().animate({"opacity":"1"},300);
		}
	});

// section5 clickme 애니
	$("#section5 img.clickme").animate({"right":"435px"},1000,function float(){
		$(this).animate({"right":"425px"},1000);
		$(this).animate({"right":"435px"},1000,float);
	});

	$("#section5 .imgclick").animate({"top":"190px"},1000,function float(){
		$(this).animate({"top":"180px"},1000);
		$(this).animate({"top":"190px"},1000,float);
	});


// section5 img05 클릭 시 사진 변화
	$("#section5 .imgclick img:eq(2)").click(function(){
		$("#section5 .imgclick img:eq(2)").stop().animate({"opacity":"0"},500);
		$("#section5 .imgclick img:eq(1)").stop().animate({"opacity":"1"},500);
		$("#section5 .imgclick img:eq(2)").css({"z-index":"0"},500);
		$("#section5 .imgclick img:eq(1)").css({"z-index":"1"},500);

		$("#section5 .imgbox1 img:eq(2)").stop().animate({"opacity":"0"},500);
		$("#section5 .imgbox2 img:eq(2)").stop().animate({"opacity":"0"},500);
		$("#section5 .imgbox3 img:eq(2)").stop().animate({"opacity":"0"},500);
	});

	$("#section5 .imgclick img:eq(1)").click(function(){
		$("#section5 .imgclick img:eq(1)").stop().animate({"opacity":"0"},500);
		$("#section5 .imgclick img:eq(0)").stop().animate({"opacity":"1"},500);
		$("#section5 .imgclick img:eq(1)").css({"z-index":"0"},500);
		$("#section5 .imgclick img:eq(0)").css({"z-index":"1"},500);

		$("#section5 .imgbox1 img:eq(1)").stop().animate({"opacity":"0"},500);
		$("#section5 .imgbox2 img:eq(1)").stop().animate({"opacity":"0"},500);
		$("#section5 .imgbox3 img:eq(1)").stop().animate({"opacity":"0"},500);
	});

	$("#section5 .imgclick img:eq(0)").click(function(){
		$("#section5 .imgclick img:eq(0)").stop().animate({"opacity":"0"},500);
		$("#section5 .imgclick img:eq(2)").stop().animate({"opacity":"1"},500);
		$("#section5 .imgclick img:eq(0)").css({"z-index":"0"},500);
		$("#section5 .imgclick img:eq(2)").css({"z-index":"1"},500);

		$("#section5 .imgbox1 img:eq(0)").stop().animate({"opacity":"0"},500);
		$("#section5 .imgbox2 img:eq(0)").stop().animate({"opacity":"0"},500);
		$("#section5 .imgbox3 img:eq(0)").stop().animate({"opacity":"0"},500);

		$("#section5 .imgbox1 img").animate({"opacity":"1"},500);
		$("#section5 .imgbox2 img").animate({"opacity":"1"},500);
		$("#section5 .imgbox3 img").animate({"opacity":"1"},500);
	});


//////////////////////////// 스크롤반응 ////////////////////////////

	$(window).scroll(function(){
		var sc = $(this).scrollTop()
		// 메인배너 애니메이션 멈춤
		if(sc >= 700){
			$(".mainbanner img").stop().animate(function(){
				preventDefault();
			});
		}

		// section3 이미지들 자리잡기
		if(sc >= 2600){
			var img1 = $("#section3 .inner > img:nth-child(2)")
			var img2 = $("#section3 .inner > img:nth-child(3)")
			var img3 = $("#section3 .inner > img:nth-child(4)")
			var img4 = $("#section3 .inner > img:nth-child(5)")

			img1.animate({"top":"90px","left":"0","opacity":"1"},1000);
			img2.animate({"top":"400px","left":"0","opacity":"1"},1000);
			img3.animate({"top":"450px","left":"620px","opacity":"1"},1000);
			img4.animate({"top":"370px","right":"0","opacity":"1"},1000);
		}
	});

});
