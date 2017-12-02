var oWonderWoman = {
    id: "WonderWoman",
    health: 100,
    attack: 7,
    counter: 25,
    image: "../assets/images/wonder-woman.jpg",
    themeSong: "../assets/musics/wonder_woman_theme.mp3",
    setHealth: function (damage) {
        this.health -= damage;
    },
    setAttack: function () {
        this.attack += 25;
    },
    reset: function () {
        this.health = 100;
        this.attack = 7;
    }
}