$(function(){
    let i=0;
    let n=0;
    $('#wew').mouseover(function(){
        i+=1;
        $('#komunikat').text('najechano na prostokat '+i+' razy');
    }).mouseout(function(){
        $('#komunikat').text('opuszczono obszar prostokata');
    });
    $('#wew').click(function(){
        n+=1;
        $('#komunikat').text('kliknieto na prostokat '+n+' razy');
    });
});