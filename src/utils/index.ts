

function getNomeDiaSemana(numero: number): string {
    // retorna o nome do dia da semana pelo número, exemplo: 2 === 'Segunda-feira'
    switch (numero) {
        case 1:
            return 'Domingo';
        case 2:
            return 'Segunda-feira';
        case 3:
            return 'Terça-feira';
        case 4:
            return 'Quarta-feira';
        case 5:
            return 'Quinta-feira';
        case 6:
            return 'Sexta-feira';
        case 7:
            return 'Sábado';
        default:
            return '';
    }
}

const formatarData = (data: Date): string => {
    // função para formatar data
    const meses = [
        'janeiro', 'fevereiro', 'março', 'abril',
        'maio', 'junho', 'julho', 'agosto',
        'setembro', 'outubro', 'novembro', 'dezembro'
    ];

    const dia = data.getDate(); // pega o numero do dia atual
    const mes = meses[data.getMonth()]; // pega o nome do mês atual
    const ano = data.getFullYear(); // pega o ano completo atual, exemplo: 2024

    return `${dia} de ${mes} de ${ano}`; // retorna a data formatada
}

const getSemestre = ():number => {
    // retorna o semestre de acordo com o mês atual, até julho: semeste 1, a partir de agosto: semestre 2
    const numeroMes = new Date().getMonth() + 1;

    if(numeroMes >= 8){
        return 2;
    }

    return 1;
}

const formatarHora = (hora: number): string =>{
    // formata a hora, removendo o . (que separa os números no banco de dados, por exemplo: 10.00) e substitui por :
    const horaStr = hora.toString();
    const elements = horaStr.split('.');

    return `${elements[0]}:${elements[1]}`
}

export { getNomeDiaSemana, formatarData, getSemestre, formatarHora };
