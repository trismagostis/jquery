$(function(){
    //najpierw co zmienić, potem jak zmienić
    $('#page').css('background-color','white');
    //jak wskazać obiekt przez id

    $('h2').css('letter-spacing','5px');
    //jak wskazać obiekt przez znacznik

    $('.link').css({'color': 'black','text-decoration': 'none'});
    //jak wskazać obiekt przez klase

    $('[href="#"]').attr('href','https://pl.wikipedia.org/wiki/J%C4%99zyk_programowania');
    //jak wskazać obiekt przez wartość własności (attribute)

});