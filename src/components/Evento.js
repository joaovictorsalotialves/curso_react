import Button from './event/Button'

function Evento() {
    function meuEvento() {
        console.log(`Opa, fui acionado!`)
    }

    function segundoEvento() {
        console.log(`Ativando o segundo evento!`)
    }

    return (
        <div>
            <p>Clique para disparar um evento: </p>
            <Button event={meuEvento} text='Primeiro Evento' />
            <Button event={segundoEvento} text='Segundo Evento' />
        </div>
    )
}

export default Evento
