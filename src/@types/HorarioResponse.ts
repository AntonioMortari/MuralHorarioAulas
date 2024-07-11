

export interface IHorario {
    PTURMA: number, //semestre
    TPER: string,
    ANOTURMA: number,
    CDISC: string, // código da disciplina
    NOME_DISCI: string, //nome da disciplina
    CTURMA: string, // código da turma
    NMATR: number,
    NOME_DOCENTE: string, // nome do docente
    DSEM: number, // dia da semana, 2 (segunda) - 6 (sexta)
    HINIAULAI: number, // horario de início da aula
    HINIAULAF: number, // horário de término da aula
    CSALA: string, // código da sala, exemplo: EA25
    TNIVDIS: string,
    NVAGAORI: number,
    FACESTUESP: number,
    FACEPED: number
} // -> Tipagem para os dados dos horários retornados pelo endpoint: https://proxy-intra.feagri.unicamp.br:8082/oferecimento/timetable?ano=[Ano]&cdisc=[Cód Disciplina]&cturma&dsem=[Número do dia da semana]&nmatr=[Matrículoa do docente]&pturma=[Semestre]&csala=[Sigla da sala]