var numer = Math.floor(Math.random() * 5) + 1;

function zmienslajd()
{
    numer++;
    if (numer > 3) numer = 1;
    var plik = "<img src='img/s" + numer + ".jpg'/>";
    $(".slider").hide().html(plik).fadeIn(1000);
    timer1 = setTimeout(zmienslajd, 5000);
}