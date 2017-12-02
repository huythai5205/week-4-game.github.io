$(document).ready(function () {

    var aHeroes = [];
    var hero;
    var opponent;
    var opponentSelected = false;
    var themeSong = undefined;

    function startGame() {
        playThemeSong('../assets/musics/justice_league.mp3');
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
    startGame();

    function renderHero() {
        $('.select-hero').empty();
        $('.select-hero').html(`<h5>${hero.id}</h5><img class="img-fluid" src=${hero.image} id=${hero.id}> <h5>${hero.health}</h5><h3>Your character</h3>`).css('padding-bottom', '0px');
    }


    function renderSelections() {
        var str = '<div class="row">';
        $(aHeroes).each(function (i) {
            str +=
                `<div class="col col-md-3"><h5>${aHeroes[i].id}</h5>
                <img class="enemy-img img-fluid" href="javascript:imgClicked()" src=${aHeroes[i].image} id=${aHeroes[i].id}> <h5>${aHeroes[i].health}</h5> </div>`;
        });
        str += "</div>";
        $('.select-opponent').empty();
        $('.select-opponent').prepend(str);
    };

    function renderOpponent() {
        $('.defender-area').empty();
        $('.defender-area').html(`<h5>${opponent.id}</h5><img class="img-fluid" src=${opponent.image} id=${opponent.id}> <h5>${opponent.health}</h5>`);
    };

    function playThemeSong(theme) {
        if (themeSong !== undefined) {
            themeSong.pause();
        }
        themeSong = new Audio(theme);
        themeSong.loop = true;
        themeSong.play();
    }

    $(document).on('click', '.hero-img', function () {
        hero = aHeroes[aHeroes.findIndex(i => i.id === $(this).attr("id"))];
        aHeroes.splice(aHeroes.findIndex(i => i.id === hero.id), 1);
        playThemeSong(hero.themeSong);
        renderHero();
        renderSelections();
    });

    $(document).on('click', '.enemy-img', function () {
        if (!opponentSelected) {
            opponent = aHeroes[aHeroes.findIndex(i => i.id === $(this).attr("id"))];
            aHeroes.splice(aHeroes.findIndex(i => i.id === opponent.id), 1);
            opponentSelected = true;
            renderHero();
            renderSelections();
            renderOpponent();
        }
    });

    $(document).on("click", '#restart-button', function () {
        oSuperman.reset();
        oAquaman.reset();
        oBatman.reset();
        oWonderWoman.reset();
        opponentSelected = false;
        $('.select-opponent').empty();
        $('.defender-area').empty();
        startGame();
    });

    $('#attack-button').click(function () {

        if (!opponentSelected) {
            $('.defender-area').empty();
            var str = "Please select an opponent.";
            $('.defender-area').append(str);
        } else {
            var heroAttack = hero.attack;
            var opponentAttack = opponent.counter;
            opponent.setHealth(heroAttack);
            hero.setHealth(opponentAttack);
            hero.setAttack();

            if (hero.health < 1) {
                renderHero();
                renderOpponent();
                var str = "You been defeated...GAME OVER!!!<br/>";
                var button = `<button id = "restart-button"> Restart </button>`;
                $('.defender-area').append(str).append(button);
            } else if (opponent.health < 1) {
                if (aHeroes.length === 0) {
                    var button = '<button id="restart-button">New Game</button>';
                    str = 'You have won! ';
                    $('.defender-area').empty().append(str).append(button);
                } else {
                    var str = `You have defeated ${opponent.id}, you can choose to fight another opponent.`;
                    opponentSelected = false;
                    $('.defender-area').empty().append(str);
                }
                renderHero();
            } else {
                renderHero();
                renderOpponent();
                var str = `You attacked ${opponent.id} for ${heroAttack} damage. <br/> ${opponent.id} attacked you back for ${opponentAttack} damage.`;
                $('.defender-area').append(str);
            }
        }
    });
});