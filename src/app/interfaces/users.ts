export class users
{
    id: null;
    naam: string;
    email: string;
    wachtwoord: string;
    constructor(id:null, naam:string, email:string, wachtwoord:string)
    {
        this.id = id;
        this.naam = naam;
        this.email = email;
        this.wachtwoord = wachtwoord;
    }
}