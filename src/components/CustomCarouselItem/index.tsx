import { useCallback, useEffect, useState } from "react";

import { IHorario } from "@/@types/HorarioResponse";
import { formatarHora } from "@/utils";
import { ContainerIcon } from "../ContainerIcon";
import { CarouselItem } from "../ui/carousel";

// icones
import { SiGoogleclassroom } from "react-icons/si";
import { FaRegClock } from "react-icons/fa6";
import { LuPencil } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";


interface ICustomCarouselItemProps {
    data: IHorario; //dados dos horários
    isNow: boolean; // booleano q indica se a aula está ocorrendo ou não
}

// componente customizado de CarouselItem do shadcn
const CustomCarouselItem = ({ data, isNow }: ICustomCarouselItemProps) => {


    const handleIconSize = useCallback(() => {
        // atualiza o tamanho dos ícones dinamicamente com base na largura da tela
        if (window.innerWidth >= 2500) return 40;

        if (window.innerWidth >= 3800) return 55;

        return 24;
    }, []);

    useEffect(() => {
        // adiciona um evento a tela, sempre que seu tamanho muda, chama a função handleIconSize, que atualiza o tamanho dos icones
        window.addEventListener('resize', () => {
            setIconsSize(handleIconSize())
        });
    }, [handleIconSize]);

    const [iconsSize, setIconsSize] = useState<number>(handleIconSize());

    return (
        <CarouselItem className='h-[100%] flex flex-col justify-center lg:basis-1/5 3xl:basis-1/4 4xl:basis-1/5 basis-1/2'>
            {/* container */}
            <div className="border-[1px] border-gray_light rounded-md shadow-md p-5 hover:bg-gray_extra_light duration-75 hover:shadow-lg w-[full] 3xl:h-[150px] 4xl:h-[200px] h-[100%] md:flex lg:flex-row justify-around flex flex-col relative">


                <ContainerIcon>
                    <FaRegClock size={iconsSize} className='text-primary' />
                    {formatarHora(data.HINIAULAI)} - {formatarHora(data.HINIAULAF)}
                </ContainerIcon>

                <ContainerIcon>
                    <SiGoogleclassroom size={iconsSize} className='text-primary' />
                    {data.CSALA}
                </ContainerIcon>

                <ContainerIcon>
                    <IoBookOutline size={iconsSize} className='text-primary' />
                    {data.CDISC} {data.CTURMA}
                </ContainerIcon>

                <ContainerIcon>
                    <abbr title={data.NOME_DISCI} className='w-[full] flex gap-2 items-center decoration-transparent'>
                        <LuPencil size={iconsSize} className='text-primary' />
                        <p className='sm:w-[100%] lg:w-[200px] w-[300px] truncate ...'>{data.NOME_DISCI}</p>
                    </abbr>
                </ContainerIcon>

                <ContainerIcon>
                    <PiStudent size={iconsSize} className='text-primary' />
                    {/* pega o primeiro e último nome do docente */}
                    {`${data.NOME_DOCENTE.split(' ')[0]} ${data.NOME_DOCENTE.split(' ')[data.NOME_DOCENTE.split(' ').length - 1]}`}
                </ContainerIcon>

                {isNow && (
                    // Ícone animado que indica se a aula está ocorrendo
                    <abbr title="Ocorrendo neste momento">
                        <div className="inline-block absolute top-[20px] right-[20px]">
                            <div className="rounded-full bg-secondary 3xl:h-6 3xl:w-6 4xl:h-8 4xl:w-8 h-3 w-3 animate-ping absolute bottom-0 right-0"></div>
                            <div className="rounded-full bg-secondary 3xl:h-6 3xl:w-6 4xl:h-8 4xl:w-8 h-3 w-3 border-2 border-white animate-pulse"></div>
                        </div>
                    </abbr>
                )}

            </div>
        </CarouselItem>
    );
}

export { CustomCarouselItem };