import { IHorario } from './HorarioResponse';

export interface IMuralComponentProps {
    mensagemErro: string; // mensagem de erro
    diaSemana: number; // numero do dia da semana (2 - 6)
    horarios: IHorario[]; // horarios retornados com base no dia da semana, semestre e ano
    horaAtual: number; // hora atual
    isLoading: boolean; // indica se os dados estão sendo carregados
}