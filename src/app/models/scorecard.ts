export class Scorecard{

    name:String;
    name1:String;
    runs:any;
    balls:any;
    overs:any;

    constructor(name:String,name1:String,runs:any,balls:any,overs:any){
        this.name=name;
        this.name1=name1;
        this.overs=overs;
        this.balls=balls;
        this.runs =runs;
    }
}