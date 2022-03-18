$(function (){
    $('input').on('focus', function (){$('span').eq(0).css('display', 'inline').fadeOut(4500);});
    $('input').on('blur', function (){$('span').eq(1).css('display', 'inline').fadeOut(4500);});
    $('input').on('change', function (){$('span').eq(2).css('display', 'inline').fadeOut(4500);});
});//zdarzenia pola
$(function(){
    let i=0;
    let n=0;
    $('#wew').mouseover(function(){
        i+=1;
        $('#komunikat').text('najechano na prostokat ' + i + ' razy');
    }).mouseout(function(){
        $('#komunikat').text('opuszczono obszar prostokata');
    });
    $('#wew').click(function(){
        n+=1;
        $('#komunikat').text('kliknieto na prostokat '+n+' razy');
    });
});//zdarzenia myszy
$(function(){
    $('input').on('keydown', function(){
        $('input').css({
            'background-color':'black',
            'color':'white'
        });
    });

    $('input').on('keyup', function(){
        $('input').css({
            'background-color':'white',
            'color':'black'
        });
    });

    let i=0;
    $('input').keypress(function(){
        $('span').eq(3).text(i+=1);
    });
});//zdarzenia klawiatury
$(function(){
    $('input').on('change', function() {
        console.log($('input').val())
    });
        });
$(function(){
    let i=0;
    let n=0;
    $('#tekst').on('scroll', function(){
        $('span').eq(5).text(i+=1);
    });

    $(window).on('resize', function(){
        $('span').eq(6).text(n+=1);
    });
});
$(function (){
    $('input').on('keydown keyup keypress',function (){
        $('span').eq(7).text(''+ event.type);
    });
    $('input').on('keydown  keypress',function (){
        $('span').eq(8).text(''+ event.which);
    });

    $('h2').on('click dbclick mouseover mouseout',function (){
        $('span').eq(7).text(''+event.type)
        const target = $(event.target);
        if (target.is('h2')) $('span').eq(8).text('Nie dotyczy');
    });

    $('input , h2').on('click', function (){
       alert(event.target.nodeName);
    });
});
$(function (){
       $('h2').on('click',function (){
        $('span').eq(7).text(''+event.type)
        const target = $(event.target);
        if (target.is('h2')) $('span').eq(8).text('Nie dotyczy');
    });

    $('input , h2').on('click', function (){
        $('span').eq(9).text(event.target.nodeName);
    });
});
$(function (){
        $('h1 , h2, p, span ').on('click', function (){
        alert(event.target.nodeName);
    });
    $('h1 , h2, p, span ').on('click', function (){
        $('p').last().text(event.target.nodeName);
    });

});
function () {
    $('img').show();
};
function hide() {
    $('img').hide();
};
function toggle() {
    $('img').toggle();
};