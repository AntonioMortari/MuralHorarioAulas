import { useRef } from "react";

import { IMuralComponentProps } from "@/@types/Mural";
import { CustomCarouselItem } from "@/components/CustomCarouselItem";
import { Loading } from "@/components/Loading";
import { MensagemErro } from "@/components/MensagemErro";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { formatarData, getNomeDiaSemana, getSemestre } from "@/utils";

import Autoplay from 'embla-carousel-autoplay';

// componente responsável por renderizar a página de Mural
const MuralComponent = ({
    diaSemana,
    mensagemErro,
    horaAtual,
    horarios,
    isLoading
}: IMuralComponentProps) => {
    const pluginAutoplay = useRef(
        Autoplay({ delay: 10000, playOnInit: true, stopOnMouseEnter: true }) // configura o autoplay do carrossel
    );

    return (
        <>
            {/* container */}
            <div className='w-full h-[100vh] flex flex-col items-center md:px-10 py-[40px]'>

                {/* container texto */}
                <h1 className='text-center md:text-2xl lg:text-3xl 3xl:text-5xl 4xl:text-6xl text-2xl text-dark font-medium'>{getNomeDiaSemana(diaSemana)} - {formatarData(new Date())}</h1>
                <h2 className='text-center md:text-xl lg:text-2xl 3xl:text-4xl 4xl:text-5xl my-5 text-gray_dark'>{getSemestre()}° Semestre</h2>

                {isLoading ? (
                    <Loading color='primary' />
                ) : (
                    <>
                        {mensagemErro ? (
                            // exibe uma mensagem de erro caso algo dê errado na busca por horários
                            <div className='w-full h-[100vh] flex items-center justify-center px-4'>
                                <h3 className='text-xl text-dark text-center'>{mensagemErro}</h3>
                            </div>
                        ) : (
                            <>
                                {horarios.length > 0 ? (
                                    // verifica se há horários de aula para o dia
                                    <>
                                        {horaAtual > horarios[horarios.length - 1].HINIAULAF ? (
                                            // caso a hora atual seja maior do que o horário final da última aula do dia, exibe uma mensagem

                                            <MensagemErro mensagem='Todos os horários para este dia já passaram!' className='py-10' />

                                        ) : (
                                            // caso contrário, exibe o carrossel
                                            <div className="w-[90%] h-[80%] md:mt-10 flex justify-center">

                                                <Carousel
                                                    orientation="vertical" //orientação do carrossel
                                                    className="w-[100%] h-[100%]"
                                                    opts={{
                                                        align: "start",
                                                        slidesToScroll: 2

                                                    }}
                                                    plugins={[pluginAutoplay.current]} // adiciona o autoplay
                                                    onMouseEnter={pluginAutoplay.current.stop} // se o ponteiro do mouse entrar no carrossel, para o autoplay
                                                    onMouseLeave={() => pluginAutoplay.current.play(false)} // se o ponteiro do mouse sai do carrossel, inicia o autoplay
                                                >
                                                    <CarouselContent className=" w-[full] lg:h-[500px] 3xl:h-[800px] 4xl:h-[1200px] h-[500px]">
                                                        {horarios.map((horario, index) => {
                                                            if (horaAtual < horario.HINIAULAF) // renderiza o horário apenas se a hora atual for menor do que a hora final da aula
                                                                return (
                                                                    <CustomCarouselItem
                                                                        key={index}
                                                                        data={horario}
                                                                        isNow={horaAtual >= horario.HINIAULAI && horaAtual <= horario.HINIAULAF} // caso a hora atual esteja entre o inicio e o fim da aula, ou seja, está acontecendo mostra um ícone verde no canto superior esquerdo do item
                                                                    />
                                                                )
                                                        })}
                                                    </CarouselContent>

                                                </Carousel>

                                            </div>
                                        )}

                                    </>
                                ) : (
                                    // se nenhum horário for encontrado, exibe uma mensagem
                                    <MensagemErro mensagem='Nenhum horário encontrado para este dia!' className='py-10' />
                                )}
                            </>
                        )}
                    </>
                )}
            </div >
        </>
    );
}

export { MuralComponent };