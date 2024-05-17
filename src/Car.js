export default class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getMake(){
        return this.make;
    }

    setMake(newMake){
        this.make = newMake;
    }
}