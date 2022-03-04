$(function (){
    $('input').on('focus', function (){$('span').eq(0).css('display', 'inline').fadeOut(4500);});
    $('input').on('blur', function (){$('span').eq(1).css('display', 'inline').fadeOut(4500);});
    $('input').on('change', function (){$('span').eq(2).css('display', 'inline').fadeOut(4500);});
});
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
});