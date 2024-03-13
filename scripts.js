


const Api = "37b63df2851e818c3eab3f0cf7e846fc"


function colocarDadosNatela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "tempo em " + dados.name
    document.querySelector(".tempo").innerHTML = Math.floor(dados.main.temp) + '°C'
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + '% Umidade'
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${Api}&lang=pt_br&unit=metric`).then( resposta => resposta.json())
    colocarDadosNatela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value
    
    buscarCidade(cidade)
}