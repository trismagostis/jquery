$(function() {
    /*const $lista_ul = $('ul').html();
    console.log($lista_ul);
    const $lista_li=$('li').html();
    console.log($lista_li);*/
    const $lista_ul = $('ul').text();
    console.log($lista_ul);
    const $lista_li=$('li').eq(2).text();
    console.log($lista_li);
})