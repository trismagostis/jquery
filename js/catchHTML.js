$(function() {
    /*const $lista_ul = $('ul').html();
    console.log($lista_ul);

    const $lista_li = $('li').html();//wypisuje tylko pierwszy
    console.log($lista_li);*/

    const $lista_ul = $('ul').text();
    console.log($lista_ul);

    const $lista_li = $('li').text('pierwszy');//wypisuje wszystkie
    console.log($lista_li);
})
