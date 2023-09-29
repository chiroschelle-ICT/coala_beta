export class users
{
    id: null;
    naam: string;
    email: string;
    wachtwoord: string;
    inschrijvingInSchecked: boolean;
    constructor(id:null, naam:string, email:string, wachtwoord:string, inschrijvingInSchecked:boolean)
    {
        this.id = id;
        this.naam = naam;
        this.email = email;
        this.wachtwoord = wachtwoord;
        this.inschrijvingInSchecked = inschrijvingInSchecked;
    }
}