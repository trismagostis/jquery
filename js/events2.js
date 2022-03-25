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
$(function () {
    $('#show').on('click',function(){
        $('img').show(100);
    });
    $('#hide').on('click',function(){
        $('img').hide(100);
    });
    $('#toggle').on('click',function(){
        $('img').toggle();
    });
});
$(function (){
    $('#wysun').on('click', function (){
        $('#pierwszy').toggle().slideDown(1000);
    });
    $('#wysun2').on('click', function (){
        $('#drugi').toggle().slideUp(2000);
    });
    $('#wysun3').on('click', function (){
        $('#trzeci').slideToggle('slow');
    });
});
$(function (){
    $('#start1').on('click', function (){
        $('#pierwszy2').animate({'left': '+=300px'}, 'slow');
        $('#pierwszy2').animate({'top': '+=50px'}, 'slow');
        $('#pierwszy2').animate({'left': '+=700px'}, 600,'swing',function(){$('#log').text('pierwszy')});
    });
    $('#start2').on('click', function (){
        $('#drugi2').animate({'left': '+=300px'}, 'slow');
        $('#drugi2').animate({'top': '+=50px'}, 'slow');
        $('#drugi2').animate({'left': '+=700px'}, 800);
    });
    $('#start3').on('click', function (){
        $('#start1 , #start2').click();
    });
    $('#reset').on('click', function (){
        $('#log').text('');
        $('#pierwszy2 , #drugi2').css({left: '' , top: ''});
    });
    $('#stop').on('click', function () {
        $('.kulka').clearQueue();
        $('.kulka').stop();
    });
});
$(function (){
    $('input').on('focus',function (){$('#span').css('display','inline').fadeOut(4500);});
    $('input').on('blur',function (){$('#span1').css('display','inline').fadeOut(4500);});
    $('input').on('change   ',function (){$('#span2').css('display','inline').fadeOut(4500);});
});
$(function (){
    let i =0;
    let n=0;
    $('#wew').mouseover(function (){
        i +=1;
        $('#komm').text('Najechano na prostokat '+i+' razy');
    }).mouseout(function () {
        $('#komm').text('Opuszczono obszar prostokata');
    });
    $('#wew').click(function () {
        n += 1;
        $('#komm').text('Kliknieto prostokat '+n+' Razy');
    });
});
$(function (){
    $('input').on('keydown keyup keypress',function (){
        $('span').eq(4).text(''+ event.type);
    });
    $('input').on('keydown  keypress',function (){
        $('span').eq(5).text(''+ event.which);
    });

    $('h2').on('click dbclick mouseover mouseout',function (){
        $('span').eq(4).text(''+event.type)
        const target = $(event.target);
        if (target.is('h2')) $('span').eq(1).text('Nie dotyczy');
    });

    $('input , h2').on('click', function (){
        $('span').eq(6).text(event.target.nodeName);
    });
});
$(function (){
    $('h1,h2,p,span,button').on('mouseover',function() {
        $('p').last().text(' '+event.target.nodeName);
    });
});

$(function (){
    $('#wysun').on('click', function (){
        $('#pierwszy').toggle().slideDown(1000);
    });
    $('#wysun2').on('click', function (){
        $('#drugi').toggle().slideUp(2000);
    });
    $('#wysun3').on('click', function (){
        $('#trzeci').slideToggle('slow');
    });
});

$(function (){
    $('#start1').on('click', function (){
        $('#pierwszy2').animate({'left': '+=300px'}, 'slow');
        $('#pierwszy2').animate({'top': '+=50px'}, 'slow');
        $('#pierwszy2').animate({'left': '+=700px'}, 600, 'linear', function (){$('#log').text('Wygrał niebieski')});
    });
    $('#start2').on('click', function (){
        $('#drugi2').animate({'left': '+=300px'}, 'slow');
        $('#drugi2').animate({'top': '+=50px'}, 'slow');
        $('#drugi2').animate({'left': '+=700px'}, 800,'swing', function (){$('#log').text('Wygrał red')});
    });
    $('#start3').on('click', function (){
        $('#start1 , #start2').click();
        $('#log').text('Wygrał niebieski');


    });
    $('#reset').on('click', function (){
        $('#log').text('');
        $('#pierwszy2 , #drugi2').css({left: '' , top: ''});
    });
    $('#stop').on('click', function () {
        $('.kulka').clearQueue();
        $('.kulka').stop();
    });
});

$(function () {
    $('input').on('keyup', function () {
        const wartosc = $(this).val();
        $('p').eq(4).text(wartosc);
    }).keyup();

    function wyswietlPojedynczyWybor() {
        const pojedynczyWybor = $('#tylkoJeden').val();
        $('p').eq(5).text('Twoj wybor to: ' + pojedynczyWybor);
    }
    $('select').change(wyswietlPojedynczyWybor);
    wyswietlPojedynczyWybor();
    function wyborJezyka() {
        const jakiJezyk = $('#tylkoJeden').val();
        if (jakiJezyk == 'Stron internetowych'){
            $('#log').text('');
            $('#ulubionyJezyk').html('PHP <input type="radio" name="www" value="PHP"> Java Script <input type="radio" name="www" value="JavaScript">');
            $('input').on('click', function (){
                $('#log').html('wybrano' + $('input:checked').val());
            });
        }
        else if (jakiJezyk=='Aplikacji desktopowych'){
            $('#log').text('');
            $('#ulubionyJezyk').html('C++ <input type="checkbox" name ="desktop"  value="C++"> Java <input type="checkbox" name="desktop" value="Java"> <button type="button"> Sprawdz zaznaczenie</button>');
            $('button').on('click', function (){
                const favorite = [];
                $.each($('input[name="desktop"]:checked'), function (){
                    favorite.push($(this).val());
                });
                const ilosc = function (){
                    const n = $('input:checked').length;
                    const x = (n === 1 ? 'Moim ulubionym jezykiem jest:' : 'Moimi ulubionymi jezykami są: ');
                    alert(x + favorite.join(', '));
                };
                ilosc();
            });
        }
        else {
            $('#log').text('');
            $('#ulubionyJezyk').html('<img src="best5.png">');
        }
    }
    $('select').change(wyborJezyka());
    wyborJezyka();
    function wyswietlWyborWielokrotny () {
        const wielokrotnyWybor = $('#wiele').val();
        $('p').eq(6).text('Twoj wybor to : '+ wielokrotnyWybor.join(', '));
    }
    $('select').change(wyswietlWyborWielokrotny);
    wyswietlWyborWielokrotny();
});

