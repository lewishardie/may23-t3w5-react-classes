const {VideoGame} = require("./VideoGames.js");
const Store = require("./Store.js")
const {Media} = require("./Media.js")

//-- Make a store

let store = new Store();

//-- Make two videogames
let videoGame1 = new VideoGame("Runescape", "PC", 4)
let videoGame2 = new VideoGame("Hunt Showdown", "PC", 3)

//-- Make one media
let someMedia = new Media("A random music album");

//-- Add videogames to store
store.videoGames.push(videoGame1, videoGame2)

//-- Print all the stuff
// console.log(store.videoGames);
// console.log(store.otherMedia);

//-- option 1 to manually show each video game
// console.log(videoGame1.getVideoGame())
// console.log(videoGame2.getVideoGame())

//-- option 2, better and cleaner way to show all videogames
store.videoGames.forEach(videoGame => {
console.log(videoGame.getVideoGame());
})

//-- get the count for all media
console.log(Media.count);