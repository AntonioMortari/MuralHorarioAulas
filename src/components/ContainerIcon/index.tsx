import { ReactNode } from 'react';

interface IContainerIconProps {
    children: ReactNode; // componentes filhos
    className?: string; // classe adicional
}

// componente container dos ícones na página de Mural
const ContainerIcon = ({ children, className }: IContainerIconProps) => {
    return (
        <span className={`flex w-[250px] items-center gap-2 md:text-lg lg:text-xl 4xl:text-4xl text-md text-dark ${className}`}>
            {children}
        </span>
    );
}

export { ContainerIcon };