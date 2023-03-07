import { Optional } from "@angular/core";

export class Editor {
    public id?: string;
    public name: string;
    public contacts: string[];
 
    public constructor(
       name: string,
       contacts: string[],
       @Optional() id?: string,
    ){
       this.name = name;
       this.contacts = contacts;
       this.id = id;
    } 
}
