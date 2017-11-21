var oSuperman = {
    id: "superman",
    health: 100,
    attack: 6,
    counter: 100,
    image: "../assets/images/superman.jpg",
    getHealth: function () {
        return health
    },
    setHealth: function (damage) {
        health -= damage;
    },
    getAttack: function () {
        return attack;
    },
    setAttack: function () {
        attack += 6;
    },
    getCounter: function () {
        return counter;
    }
}