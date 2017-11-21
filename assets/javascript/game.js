$(document).ready(function () {
    function startGame() {
        $('.select-heroes').html(`
        <div class="row">
            <div class="col col-md-3">
                <img class="hero-img img-fluid" src=${oSuperman.image} id=${oSuperman.id}> superman
            </div>
            <div class="col col-md-3">
                <img class="hero-img img-fluid" src="./assets/images/batman.jpg" id="batman"> batman
            </div>
            <div class="col col-md-3">
                <img class="hero-img img-fluid" src="./assets/images/wonder-woman.jpg" id="wonder woman"> wonder woman
            </div>
            <div class="col col-md-3">
                <img class="hero-img img-fluid" src="./assets/images/aquaman.jpg" id="aquaman"> aquaman
            </div>
            <h3>Your character</h3>`);
    }

    function startFight(id) {
        $('.select-heroes').empty();
        $('.select-heroes').html(`<h3>Your Character</h3>
        <img class="hero-img img-fluid" src=${id.image} id=${id}>
        <h3>Enemies Available To Attack</h3>
        `);
    }

    startGame();
    $('.hero-img').click(function () {
        var id = $(this).attr("id");
        console.log(id);
        if (id === "superman") {
            console.log(oSuperman.health);
        }
    });
});

// $(document).on('change', "[id*=hero-img]", function () {

// });