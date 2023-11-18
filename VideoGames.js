const {Media} = require("./Media");

class VideoGame extends Media{
    constructor(newName, platform, players) {
        super(newName);
        // this.name = newName;
        this.players = players || 1;
        this.platform = platform;

    }
    //-- Can run all the console logs before into 1 line
    getVideoGame() {
        return `${this.name} is a video game for ${this.players} players and can be played on ${this.platform}`
    }
}

let someVideoGame = new VideoGame("Runescape", "PC", 4);
// console.log(someVideoGame.name);
// console.log(`platform: ${someVideoGame.platform}`);
// console.log(`# of players: ${someVideoGame.players}`);
// console.log(someVideoGame.getMediaName());
// console.log(someVideoGame.version());
console.log(someVideoGame.getVideoGame());
console.log(Media.count);