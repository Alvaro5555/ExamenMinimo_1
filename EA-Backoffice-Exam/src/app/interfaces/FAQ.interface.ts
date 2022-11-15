import { User } from "src/app/interfaces/user.interface";
export class FAQ{
    _id?: string;
    Question: string;
    Ansewr: string;
    points: number;
    date: Date;
    user?: User;
    
    constructor( Question: string, Ansewr: string, points: number, date: Date, user?: User) {
    this.Question = Question;
    this.Ansewr = Ansewr;
    this.points = points;
    this.date = date;
    this.user = user;
}
}

