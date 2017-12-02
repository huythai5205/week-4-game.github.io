var oAquaman = {
    id: "Aquaman",
    health: 100,
    attack: 14,
    counter: 5,
    image: "../assets/images/aquaman.jpg",
    themeSong: "../assets/musics/aquaman_theme.mp3",
    setHealth: function (damage) {
        this.health -= damage;
    },
    setAttack: function () {
        this.attack += 14;
    },
    reset: function () {
        this.health = 100;
        this.attack = 14;
    }
}