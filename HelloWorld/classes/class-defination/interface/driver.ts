import { coach } from "./coach";
import { cricketCoach } from "./cricketCoach";
import { goalfCoach } from "./goalfCoach";

let theCricketCoach=new cricketCoach();
let theGoalfCoach=new goalfCoach();

let theCoach :coach[]=[];
theCoach.push(theCricketCoach);
theCoach.push(theGoalfCoach);
for(let tempCoach of theCoach){
    
    console.log("coach implement is "+tempCoach.getDailyWork());

}
