var oSuperman = {
    id: "Superman",
    health: 120,
    attack: 8,
    counter: 15,
    image: "../assets/images/superman.jpg",
    themeSong: "../assets/musics/superman_theme.mp3",
    setHealth: function (damage) {
        this.health -= damage;
    },
    setAttack: function () {
        this.attack += 8;
    },
    reset: function () {
        this.health = 120;
        this.attack = 8;
    }
}