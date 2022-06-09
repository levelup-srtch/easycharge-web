export interface Divida {
    id: number;
    valor: number;
    dataDeAbertura: Date;
    dataDeQuitacao: Date;
    status: string;
    descricaoDeQuitacao: string;
    cpf: string;
}