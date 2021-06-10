// Personality 섹션 Progress Bar
$(document).ready(function() {
  // doughnut .chart plug-in
  $('.chart__percent').percentageLoader({
    valElement: 'span',
    strokeWidth: 40,
    bgColor: '#c0d8e9',
    ringColor: '#73aace',
    textColor: '#4d4d4d',
    fontSize: '24px',
    fontWeight: 'bold'
  });

  // scroll 시 .chart, .bar 의 opacity
  $(window).scroll(function() {
    var itemScrollTop = $(window).scrollTop() + $(window).height();
    var chartHeight = $('.personality__chart').offset().top + ($('.personality__chart').outerHeight()/5);
    if ( itemScrollTop >= chartHeight ) {
      $('.personality__chart').animate({'opacity':'1'},1000);
    }

    var barHeight = $('.bar__description').offset().top + $('.bar__description').outerHeight();
    if ( itemScrollTop >= barHeight ) {
      $('.progress__fill').animate({'width':'100%'},1000);
    }
  });
});