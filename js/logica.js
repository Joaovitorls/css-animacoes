//seleciona a div que contem a contagem regressiva
const divContagemRegressiva = document.querySelector('.contagem-regressiva');

//define a data de lançamento
const lancamento = new Date('Jul 12, 2019 19:00:00').getTime();

//calcula o tempo entre a data de lançamento e agora, a cada segundo
const intervalo = setInterval(() => {
    //presente
    const agora = new Date().getTime();

    //tempo faltante
    const tempoFaltante = lancamento - agora;

    //conversoes de ms -> dias horas minutos e segundos (padrao da funcao js é ms)
    const dias = Math.floor(tempoFaltante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoFaltante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoFaltante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoFaltante % (1000 * 60)) / (1000));

    //mostra os resultados
    divContagemRegressiva.innerHTML = `
        <div><b>${dias}<br><span>DIAS</b></span></div>
        <div><b>${horas}<br><span>HORAS</b></span></div>
        <div><b>${minutos}<br><span>MINUTOS</b></span></div>
        <div><b>${segundos}<br><span>SEGUNDOS</b></span></div>
    `;

    //se a data já chegou
    if (tempoFaltante < 0){
        //para a contagem
        clearInterval(intervalo);
        divContagemRegressiva.style.color = '#fff';
        divContagemRegressiva.innerHTML = 'Lançado!';
    }
}, 1000);