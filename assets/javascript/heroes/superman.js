var oSuperman = {
    id: "Superman",
    health: 100,
    attack: 6,
    counter: 100,
    image: "../assets/images/superman.jpg",
    themeSong: "../assets/musics/superman_theme.mp3",
    setHealth: function (damage) {
        this.health -= damage;
    },
    setAttack: function () {
        this.attack += 6;
    },
    reset: function () {
        this.health = 100;
        this.attack = 6;
    }
}