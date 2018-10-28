var anonymus = {
    get colors() {
        return [
            "Red",
            "Green",
            "Blue",
            "Black",
            "White",
            "Orange",
            "Lime",
            "Pink",
            "Violet",
            "Yellow",
            "Teal",
            "Sapphire",
            "Ruby"
        ]
    },
    get animals() {
        return [
            "albatross",
            "ant",
            "ape",
            "bat",
            "bear",
            "beaver",
            "bee",
            "bird",
            "bison",
            "boar",
            "buffalo",
            "butterfly",
            "cat",
            "chameleon",
            "cheetah",
            "chicken",
            "cobra",
            "coyote",
            "crab",
            "crocodile",
            "crow",
            "deer",
            "dog",
            "dolphin",
            "donkey",
            "dragonfly",
            "duck",
            "eagle",
            "elephant",
            "falcon",
            "fox",
            "frog",
            "giraffe",
            "goat",
            "gorilla",
            "grasshopper",
            "hamster",
            "hawk",
            "hedgehog",
            "hornet",
            "horse",
            "hummingbird",
            "jaguar",
            "jellyfish",
            "kangaroo",
            "koala",
            "lemur",
            "leopard",
            "lion",
            "llama",
            "lobster",
            "mammoth",
            "mole",
            "mongoose",
            "monkey",
            "moose",
            "mouse",
            "octopus",
            "otter",
            "owl",
            "panther",
            "parrot",
            "panda",
            "pelican",
            "penguin",
            "rabbit",
            "raccoon",
            "ram",
            "raven",
            "salamander",
            "seal",
            "shark",
            "sheep",
            "snake",
            "spider",
            "squid",
            "squirrel",
            "swan",
            "tiger",
            "turtle",
            "wasp",
            "wolf",
            "yak",
            "zebra"
        ]
    },
    get sizeColors() {
        return this.colors.length;
    },
    get sizeAnimals() {
        return this.animals.length;
    },
    get randomColor() {
        return this.colors[Math.floor(Math.random() * this.sizeColors)];
    },
    get randomAnimal() {
        return this.animals[Math.floor(Math.random() * this.sizeAnimals)];
    },
    create: function () {
        return this.randomColor + " " + this.randomAnimal;
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = anonymus;
}