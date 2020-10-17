console.log("module-export");

// export function bet(race, pony) {
//     console.log(race + " : " + pony);
// }

// // a function to start the race
// export function start(race) {
//     console.log(race);
// }

let race = "";
let pony = "";
let bet = "";

module.exports = race;
module.exports = pony;

module.exports.bet = function bet(race, pony) {
    console.log(race + " : " + pony);
}

// a function to start the race
module.exports.start = function start(race) {
    console.log(race);
}

// eof
