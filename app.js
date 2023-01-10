class car{
    constructor(doors,engine,color){
        this.doors=doors;
        this.engine=engine;
        this.color=color;
    }
    carStats(){
        
        return `this car has ${this.door} doors, a ${this.engine} and a beautiful ${this.color} color!`;
    }
}
const cx5 = new car( 4,'v6','Grey');
console.log(cx5);
console.log(cx5.carStats());