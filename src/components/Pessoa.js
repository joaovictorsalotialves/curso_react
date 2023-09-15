function Pessoa({ name, idade, profissao, foto }) {
    return (
        <div>
            <img src={foto} alt={name} />
            <h2>Nome: {name}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}

export default Pessoa