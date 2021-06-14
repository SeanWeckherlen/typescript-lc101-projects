"use strict";
exports.__esModule = true;
exports.SpaceLocation = void 0;
// Paste in the provided code here:
var SpaceLocation = /** @class */ (function () {
    function SpaceLocation(name, kilometersAway) {
        this.name = name;
        this.kilometersAway = kilometersAway;
    }
    return SpaceLocation;
}());
exports.SpaceLocation = SpaceLocation;
var saturn = new SpaceLocation("Saturn", 12000000000);
console.log(saturn);
