export class Usuario {
    id !: number;
    nome !: string; 
    senha !: string; 
    cpf !: string; 
    email !: string; 
    dataAniversario : Date = new Date();
}