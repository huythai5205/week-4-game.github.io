var oAquaman = {
    id: "Aquaman",
    health: 100,
    attack: 6,
    counter: 99,
    type: "hero",
    image: "../assets/images/aquaman.jpg",
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