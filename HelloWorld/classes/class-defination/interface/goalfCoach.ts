import { coach } from "./coach";

export class goalfCoach implements coach{
    getDailyWork(): string {
        return "every day prictise in 100 minutes";
    }
}