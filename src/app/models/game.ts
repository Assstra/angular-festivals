import { Optional } from "@angular/core";

export class Game {
    public id?: string;
    public name: string;
    public type: string;
    public minAge: number;
    public maxAge: number;
 
    public constructor(
       name: string,
       type: string,
       @Optional() minAge: number = 0,
       @Optional() maxAge: number = 99,
       @Optional() id?: string,
    ){
       this.name = name;
       this.id = id;
       this.type = type;
       this.minAge = minAge;
       this.maxAge = maxAge;
    } 
}
