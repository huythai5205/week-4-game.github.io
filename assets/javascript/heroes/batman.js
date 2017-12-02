var oBatman = {
    id: "Batman",
    health: 150,
    attack: 8,
    counter: 5,
    image: "../assets/images/batman.jpg",
    themeSong: "../assets/musics/batman_theme.mp3",
    setHealth: function (damage) {
        this.health -= damage;
    },
    setAttack: function () {
        this.attack += 6;
    },
    reset: function () {
        this.health = 150;
        this.attack = 8;
    }
}