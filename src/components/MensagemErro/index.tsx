
interface IMensagemErroProps {
    mensagem: string; // mensagem
    className?: string; // classe adicional
}

// componente responsável por exibir uma mensagem de erro ou alerta
const MensagemErro = ({ mensagem, className }: IMensagemErroProps) => {
    return (
        <h3 className={`text-xl text-dark text-center ${className}`}>{mensagem}</h3>
    );
}

export { MensagemErro };