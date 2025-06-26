export interface Cliente {
  id: number;
  nome: string;
  cpf: string;
  dataCadastro: string;
}

export interface Raca {
  id: number;
  descricao: string;
}

export interface Pets {
  id: number;
  nome: string;
  dataNascimento: string;
  cliente: Cliente;
  raca: Raca;
}
