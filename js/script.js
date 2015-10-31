$(document).ready(function() {
	cursec=1;
	animating=false;
	$.scrollTo('.herosec', 1000);

$.changeText = function(updn)
{
	if(updn==1)
	{
		setTimeout(
		  function() 
		  {
			$('.about1').css("margin-top","50px");
			$('.about1').css("opacity","1");
		  }, 500);
		$('.about2').css("margin-top","100px");
		$('.about2').css("opacity","0");
	}
	else
	{
		$('.about1').css("margin-top","0px");
		$('.about1').css("opacity","0");
		setTimeout(
		  function() 
		  {
			$('.about2').css("margin-top","50px");
			$('.about2').css("opacity","1");
		  }, 500);
	}
	return true;
}

$.scrollDn = function() {
	if(cursec<5)
	{   
		cursec++;
		switch(cursec)
		{
			case 1: $.scrollTo('.herosec', 1000);
					break;
			case 2: $.scrollTo('.secondsec', 1000);
					$.changeText(1);
					break;
			case 3: $.changeText(2);
					break;
			case 4: $.scrollTo('.videosec', 1000);
					break;
			case 5: $.scrollTo('.thirdsec', 1000);
					break;
		}
	}
	return true;
}

$.scrollUp = function() {
	if(cursec>1)
	{
		cursec--;
		switch(cursec)
		{
			case 1: $.scrollTo('.herosec', 1000);
					break;
			case 2: $.changeText(1);
					break;
			case 3: $.scrollTo('.secondsec', 1000);
					$.changeText(2);
					break;
			case 4: $.scrollTo('.videosec', 1000);
					break;
			case 5: $.scrollTo('.thirdsec', 1000);
					break;
		}
	}
	return true;
}

$(document).on('mousewheel', function(event) {
	console.log('yes');
	if(animating==true)
	{
		return false;
	}
	animating=true;
	if(event.deltaY<0)
	{
		$.scrollDn();
	}
	else if(event.deltaY>0)
	{
		$.scrollUp();
	}
	setTimeout(
	  function() 
	  {
		animating=false;
	  }, 1000);
	return true;
});

$(document).keydown(function(event) {
	switch(event.which) {
		case 33:
		case 38:
		case 34:
		case 40:
		break;
		default: return true;
	}
	if(animating==true)
	{
		return false;
	}
	animating=true;
	switch(event.which) {
		case 33:
		case 38: $.scrollUp();
		break;
		case 34:
		case 40: $.scrollDn();
		break;
	}
	event.preventDefault();
	setTimeout(
	  function() 
	  {
		animating=false;
	  }, 1000);
	return true;
});

imgnum=6;
imgpos="left top";
heroshow=1;
herohide=2;
$.changeImg=function ()
{
	imgnum=(imgnum%6)+1;
	switch(imgnum)
	{
		case 1: imgpos="right top";
				break;
		case 2: imgpos="left top";
				break;
		case 3: imgpos="left bottom";
				break;
		case 4: imgpos="right bottom";
				break;
		case 5: imgpos="right top";
				break;
		case 6: imgpos="left bottom";
				break;
	}
	heroshow=(heroshow%2)+1;
	herohide=(herohide%2)+1;
	divheight=parseInt($(".hero"+heroshow).css("height"));
	divwidth=parseInt($(".hero"+heroshow).css("width"));
	divpercent=0;
	if((divwidth/divheight)>(2048/1152))
	{
		divpercent=100;
	}
	else
	{
		divpercent=(2048*100*divheight)/(1152*divwidth);
	}
	$(".hero"+heroshow).css("background-position",imgpos);
	$(".hero"+heroshow).css("transition","background-size 7s linear, opacity 0s");
	$(".hero"+heroshow).css("background-size",divpercent*1.05+"%");
	$(".hero"+heroshow).css("z-index","0");
	$(".hero"+herohide).css("z-index","1");
	$(".hero"+heroshow).css("background-image","url('./images/main/main ("+imgnum+").jpg')");
	$(".hero"+heroshow).css("opacity","1");
	$(".hero"+herohide).css("transition","background-size 0s, opacity 1s linear");
	$(".hero"+herohide).css("opacity","0");
	setTimeout(function () {
		$(".hero"+herohide).css("background-size",divpercent+"%");
	},1000);
	
	
};

$.preloadImages = function() {
  for (var i = 1; i <= 6; i++) {
	$("<img />").attr("src", "./images/main/main ("+imgnum+").jpg");
  }
}

$.preloadImages();
});
$(window).load(function(){
	$('.loader').css('display','none');
	$('.onload').css('display','inline');
	$.changeImg();
	setInterval($.changeImg, 5000);
});