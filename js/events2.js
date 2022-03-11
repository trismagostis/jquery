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