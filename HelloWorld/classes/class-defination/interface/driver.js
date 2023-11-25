"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cricketCoach_1 = require("./cricketCoach");
const goalfCoach_1 = require("./goalfCoach");
let theCricketCoach = new cricketCoach_1.cricketCoach();
let theGoalfCoach = new goalfCoach_1.goalfCoach();
let theCoach = [];
theCoach.push(theCricketCoach);
theCoach.push(theGoalfCoach);
for (let tempCoach of theCoach) {
    console.log("coach implement is " + tempCoach.getDailyWork());
}
