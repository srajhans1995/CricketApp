export class Admin {
    team1: string;
    team2: string;
    toss: string;
    decision:string;
    overs:number;
    
    constructor(name: string, category: string, toss: string, decision:string,
        overs:number) {
      this.team1 = name;
      this.team2 = category;
      this.toss = toss;
      this.decision=decision;
      this.overs=overs;
    }
  }