
import { Payload } from "./Payload";

export class Astronaunt implements Payload {
    massKg: number;
    name: string; 
    constructor(massKg: number, name: string){
        this.massKg = massKg;
        this.name = name;
    } 
}