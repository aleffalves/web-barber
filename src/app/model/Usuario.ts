export class Usuario {
    id !: number;
    nome !: string; 
    senha !: string; 
    cpf !: string; 
    email !: string;
    telefone !: string; 
    dataAniversario : Date = new Date();
    roles !: string []
}