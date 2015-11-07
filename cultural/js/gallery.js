$(document).ready(function() {
	$(".galimage").click(function() {
        var bg = $(this).css('background-image');
        $(".imagesec").css("background-image",bg);
        a=bg.match(/gallery%20\((\d+)\)/)[1];
        switch(a)
        {
            case '1': $('.fillleft').css('background-color','rgba(60,55,50,0.7)');
                    $('.fillright').css('background-color','rgba(60,55,50,0.7)');
                    break;
            case '2': $('.fillleft').css('background-color','rgba(40,20,10,0.7)');
                    $('.fillright').css('background-color','rgba(40,20,10,0.7)');
                    break;
            case '3': $('.fillleft').css('background-color','rgba(20,40,50,0.7)');
                    $('.fillright').css('background-color','rgba(20,40,50,0.7)');
                    break;
            case '4': $('.fillleft').css('background-color','rgba(80,60,10,0.7)');
                    $('.fillright').css('background-color','rgba(80,60,10,0.7)');
                    break;
            case '5': $('.fillleft').css('background-color','rgba(50,50,50,0.7)');
                    $('.fillright').css('background-color','rgba(50,50,50,0.7)');
                    break;
            case '6': $('.fillleft').css('background-color','rgba(84,17,12,0.8)');
                    $('.fillright').css('background-color','rgba(84,17,12,0.8)');
                    break;
            case '7': $('.fillleft').css('background-color','rgba(50,50,50,0.7)');
                    $('.fillright').css('background-color','rgba(50,50,50,0.7)');
                    break;
            case '8': $('.fillleft').css('background-color','rgba(50,50,50,0.7)');
                    $('.fillright').css('background-color','rgba(50,50,50,0.7)');
                    break;
            case '9': $('.fillleft').css('background-color','rgba(50,50,50,0.7)');
                    $('.fillright').css('background-color','rgba(50,50,50,0.7)');
                    break;
            case '10': $('.fillleft').css('background-color','rgba(50,50,50,0.7)');
                    $('.fillright').css('background-color','rgba(50,50,50,0.7)');
                    break;
            case '11': $('.fillleft').css('background-color','rgba(50,50,50,0.7)');
                    $('.fillright').css('background-color','rgba(50,50,50,0.7)');
                    break;
            case '12': $('.fillleft').css('background-color','rgba(50,50,50,0.7)');
                    $('.fillright').css('background-color','rgba(50,50,50,0.7)');
                    break;
            case '13': $('.fillleft').css('background-color','rgba(50,50,50,0.7)');
                    $('.fillright').css('background-color','rgba(50,50,50,0.7)');
                    break;
            case '14': $('.fillleft').css('background-color','rgba(50,50,50,0.7)');
                    $('.fillright').css('background-color','rgba(50,50,50,0.7)');
                    break;
        }
    });
});