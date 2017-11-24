$(document).ready(function () {

    var aHeroes = [];

    function startGame() {
        aHeroes = [oSuperman, oBatman, oWonderWoman, oAquaman];
        $('.select-hero').html(`
        <div class="row">
            <div class="col col-md-3"><h5>${oSuperman.id}</h5>
                <img class="hero-img img-fluid" src=${oSuperman.image} id=${oSuperman.id}> <h5>${oSuperman.health}</h5>
            </div>
            <div class="col col-md-3"><h5>${oBatman.id}</h5>
                <img class="hero-img img-fluid" src=${oBatman.image} id=${oBatman.id}> <h5>${oBatman.health}</h5>
            </div>
            <div class="col col-md-3"><h5>${oWonderWoman.id}</h5>
                <img class="hero-img img-fluid" src=${oWonderWoman.image} id=${oWonderWoman.id}> <h5>${oWonderWoman.health}</h5>
            </div>
            <div class="col col-md-3"><h5>${oAquaman.id}</h5>
                <img class="hero-img img-fluid" src=${oAquaman.image} id=${oAquaman.id}> <h5>${oAquaman.health}</h5>
            </div>
        </div>
        <h3>Your character</h3>`).css('padding-bottom', '100px');
    };




    function startFight(hero) {
        var string = '<div class="row">';
        $('.select-hero').empty();
        $('.select-hero').html(`<h5>${hero.id}</h5><img class="img-fluid" src=${hero.image} id=${hero.id}> <h5>${hero.health}</h5><h3>Your character</h3>`).css('padding-bottom', '0px');
        $(aHeroes).each(function (i) {
            string +=
                `<div class="col col-md-3"><h5>${aHeroes[i].id}</h5>
                <img class="enemy-img img-fluid" onclick="imgClicked()" src=${aHeroes[i].image} id=${aHeroes[i].id}> <h5>${aHeroes[i].health}</h5>
            </div>`
        });
        string += "</div>";
        $('.fight-section').prepend(string);
    };



    startGame();




    $('.hero-img').click(function () {
        var hero = aHeroes[aHeroes.findIndex(i => i.id === $(this).attr("id"))];
        aHeroes.splice(aHeroes.findIndex(i => i.id === hero.id), 1);
        startFight(hero);
    });

    $('.enemy-img').click(function () {
        console.log($(this).attr("class"));
    });

    function imgClicked() {
        console.log("fdasf");
    };

    $('button').click(function () {
        console.log("attack");
    });


});


