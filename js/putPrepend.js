$(function(){
    let $zmiana = $('li').eg(2).html();
    $('li').eg(2).remove();
    $('ul').prepend('<li>' + $zmiana + '</li>');
});
//dokładanie elementów po znaczniku otwierającym