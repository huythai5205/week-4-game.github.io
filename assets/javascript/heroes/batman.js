var oBatman = {
    id: "Batman",
    health: 100,
    attack: 6,
    counter: 100,
    type: "hero",
    image: "../assets/images/batman.jpg",
    getHealth: function () {
        return health
    },
    setHealth: function (damage) {
        this.health -= damage;
    },
    getAttack: function () {
        return attack;
    },
    setAttack: function () {
        this.attack += 6;
    },
    getCounter: function () {
        return counter;
    },
    getType: function () {
        return type;
    },
    setType: function (type) {
        this.type = type;
    }
}