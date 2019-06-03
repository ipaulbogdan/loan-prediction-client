export class User{

    gender: string;
    married: string;
    dependends:  number;
    education: string;
    self_employed: string;
    income: number;
    coIncome: number;
    loanAmount: number;
    loanTerm: number;
    creditHistory: number;
    area: string;
    
}


export interface predictionResponse{
    response: string;
    accurracy: string;
}

export class RequestResponse{
    response : string;
    acc : number;
}