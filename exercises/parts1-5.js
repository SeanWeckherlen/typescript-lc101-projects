"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
// let spacecraftName: string = "Determination";
//let speedMph: number = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
//let milesPerKilometer: number = 0.621;
// Part 2: Print Days to Mars
// let milesToMars: number = kilometersToMars * milesPerKilometer;
// let hourToMars: number = milesToMars / speedMph;
// let daysToMars: number = hourToMars / 24;
// let outputString: string = `${spacecraftName} will take ${daysToMars} days to get to Mars.`;
// Code an output statement here (use a template literal):
//console.log(outputString);
// Part 3: Create a Function ("getDaysToLocation")
// function getDaysToLocation(kilometersAway: number): number {
//     let milesAway: number = kilometersAway * milesPerKilometer;
//     let hoursToLocation: number = milesAway / speedMph;
//     let daysToLocation: number = hoursToLocation / 24;
//     return daysToLocation;
//     // }
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// let outputStringMars: string = `${spacecraftName} will take ${getDaysToLocation(kilometersToMars)} days to get to Mars.`;
//console.log(outputStringMars);
// let outputStringMoon: string = `${spacecraftName} will take ${getDaysToLocation(kilometersToTheMoon)} days to get to the moon.`;
//console.log(outputStringMoon)
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToLocation = milesAway / this.speedMph;
        var daysToLocation = hoursToLocation / 24;
        return daysToLocation;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// making a new location with the imported SpaceLocation. 
var mars = new SpaceLocation_1.SpaceLocation("mars", kilometersToMars);
var moon = new SpaceLocation_1.SpaceLocation("The moon", 384400);
spaceShuttle.printDaysToLocation(mars);
spaceShuttle.printDaysToLocation(moon);
//let outputStringMars: string = `${spaceShuttle.name} will take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.`;
//console.log(outputStringMars);
//let outputStringMoon: string = `${spaceShuttle.name} will take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to the moon.`;
//console.log(outputStringMoon)
// let spaceShuttle: Spacecraft = new Spacecraft("Determination", 17500);
// let saturn = new SpaceLocation("saturn", 12000000000);
// console.log(spaceShuttle.getDaysToLocation(saturn));
// spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
//console.log(`it takes ${spaceShuttle.getDaysToLocation(kilometersToMars)} for ${spaceShuttle.name} to reach mars`);
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
