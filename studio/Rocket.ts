
import { Astronaunt } from "./Astronaunt";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronats: Astronaunt[] = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    // input is an array of payload objects
    // specefically, an array of objects whose classes implement Payload 
    //output: the sum of all the items masses in Kg
    sumMass(items: Payload[]): number {
        let sum: number = 0;
        for (let i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    }
    currentMassKg(): number {
        let astronauntTotalMass: number = this.sumMass(this.astronats);
        let cargoTotalMass: number = this.sumMass(this.cargoItems);

        return astronauntTotalMass + cargoTotalMass;

    }
    // input is a payload object 
    // output is going to be true or false wether or not there is less than or equal to total capacity KG
    canAdd(item: Payload): boolean {

        if ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }
    // 
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaunt): boolean {
        if(this.canAdd(astronaut)){
            this.astronats.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}