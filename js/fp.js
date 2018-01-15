function move(){
	$(".animd").each(function(i){
		$(this).css({
			left: Math.floor(Math.random() * ($(".stararea").width() - $(this).width() + 1)),
			top: $(".stararea").position().top + Math.floor(Math.random() * ($(".stararea").height() - $(this).height() - $(".stararea").position().top + 1))
		});
	});
}
move();
setInterval(move, 4000);

var frame = 0;
setInterval(function(){
	$(".animd-img").each(function(i){
		$(this).attr('src', "./res/star" + frame.toString() + ".png");
		frame++;
		if(frame > 5)
			frame = 0;
	});
}, 800);

$(window).resize(function(){
    $('.stararea').height( $(window).height() 
    				- $("#verytop").height() 
                    - parseInt($("#verytop").css("margin-top")) 
                    - parseInt($('#verytop').css("margin-bottom"))
    				- $(".navbar").height() 
                    - parseInt($(".navbar").css("margin-bottom"))
                    - parseInt($(".navbar").css("margin-top")) 
                    - parseInt($('.stararea').css("margin-bottom"))
                    - 25);  
})
$(window).resize();