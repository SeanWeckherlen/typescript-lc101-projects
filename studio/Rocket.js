"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronats = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    // input is an array of payload objects
    // specefically, an array of objects whose classes implement Payload 
    //output: the sum of all the items masses in Kg
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        var astronauntTotalMass = this.sumMass(this.astronats);
        var cargoTotalMass = this.sumMass(this.cargoItems);
        return astronauntTotalMass + cargoTotalMass;
    };
    // input is a payload object 
    // output is going to be true or false wether or not there is less than or equal to total capacity KG
    Rocket.prototype.canAdd = function (item) {
        if ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    // 
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronats.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
