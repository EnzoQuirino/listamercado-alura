function gerarDiaDaSemana() {
    const diaDaSemana = new Date().toLocaleDateString("pt-BR",{weekday: "long"})
    const data = new Date().toLocaleDateString("pt-BR")
    const horarioAtual = new Date();
    const horasMinutos = `${horarioAtual.getHours()}:${horarioAtual.getMinutes()}`;
    
    
    const dataCompleta = `${diaDaSemana} (${data}) às ${horasMinutos}` 

    return dataCompleta
}

export default gerarDiaDaSemana