import { useCallback, useEffect, useState } from 'react';

import { IHorario } from '@/@types/HorarioResponse';
import { api } from '@/services/axiosConfig';
import { getSemestre } from '@/utils';

import { MuralComponent } from '@/components/pagesComponents/MuralComponent';

const Mural = () => {
    const [horarios, setHorarios] = useState<IHorario[]>([]); //estado que armazena a os horários retornados pela api

    const [horaAtual, setHoraAtual] = useState<number>(new Date().getHours()); //estado que armazena a hora atual
    const [diaSemana, setDiaSemana] = useState<number>(new Date().getDay() + 1); // estado que armazena o número do dia da semana
    const [ano, setAno] = useState<number>(new Date().getFullYear()); // estado que armazena o ano atual

    const [mensagemErro, setMensagemErro] = useState<string>(''); // armazena possíveis mensagens de erro
    const [isLoading, setIsLoading] = useState<boolean>(true); // indica se os dados estão sendo carregados

    
    const atualizarHora = useCallback(() => {

        setInterval(() => {
            const novaHora = new Date().getHours();
            if (novaHora === horaAtual) return; // caso a nova hora capturada seja igual a hora atual, não faz nada

            if(new Date().getDay() + 1 != diaSemana){
                // se dia mudar, atualiza o estado de diaSemana
                setDiaSemana(new Date().getDay() + 1);
            }
            if(new Date().getFullYear() != ano){
                // se o ano mudar, atualiza o estado de ano
                setAno(new Date().getFullYear());
            }
            setHoraAtual(novaHora); //se a hora mudar, atualiza o estado com a nova hora

        }, (1000 * 60));

    }, []); // função que inicia um setInterval que vai verificar, a cada minuto, a hora e atualiza-la

    const getHorarios = useCallback(async () => {
        setIsLoading(true);
        const url = `/oferecimento/timetable?ano=${ano}&cdisc=&cturma&dsem=${diaSemana}&nmatr=&pturma=${getSemestre()}&csala=&fdoceres=1`;

        await api.get(url)
            .then(response => {
                setHorarios(response.data.horarios);
            })
            .catch(err => {
                console.log(err);
                setMensagemErro('Ocorreu um erro ao buscar pelos horários. Tente novamente mais tarde!');
            })
            .finally(() => setIsLoading(false));

    }, [ano, diaSemana]); // função responsável por buscar os horários com base no ano, dia da semana e semestre atual

    useEffect(() => {

        getHorarios(); // busca os horários

        atualizarHora(); // inicia o setInterval

    }, []); // efeito executado uma vez após o carregamento da página

    return (
       
        <MuralComponent
            diaSemana={diaSemana}
            horaAtual={horaAtual}
            horarios={horarios}
            mensagemErro={mensagemErro}
            isLoading={isLoading}
        />
    );
}

export { Mural };
