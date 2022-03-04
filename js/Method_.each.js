$('div').each(function (bot) {
    console.log(`numer diva, ${this.id}, to , ${bot}`)//bot zawsze zawiera numer kolejnego wywołania funkcji
})
$('button').click(function(){
    $('a').each(function(){
        alert($(this).text());
    });
})