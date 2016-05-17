(function(){

// $(window).scroll(function(){
//    $('.header-image').css('transform', 'translate3d(0,' + -$(this).scrollTop()*2 + 'px, 0)'); 
// }).scroll();

function resizeDiv() {
	vpw = $(window).width();
	vph = $(window).height();
	$('.header-image').css({'height': vph + 'px'});
}

resizeDiv();

$("div.headline div.container h1").animate({ opacity: 1.0 }, 3000);
$("div.headline div.container h3").animate({ opacity: 1.0 }, 3000);
$("#down-arrow").animate({ opacity: 1.0 }, 3000);

window.onresize = function(event) {
	resizeDiv();
}

$("#down-arrow").click(function(){
	$("html, body").animate({ scrollTop: $('#about').offset().top }, 1000);
});

$("#down-arrow").hover(function(){
	$("#down-arrow").attr("src", "img/down_inverse.png");
}, function(){
	$("#down-arrow").attr("src", "img/down.png");
});

})();