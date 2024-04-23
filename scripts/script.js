function loadCoins() {
    const requisicaoHttp = new XMLHttpRequest();
    requisicaoHttp.open("GET", "https://economia.awesomeapi.com.br/last/USD-BRL,BTC-USD,BTC-BRL", false);
    requisicaoHttp.send();
    
    const resposta = JSON.parse(requisicaoHttp.responseText);
 
    let coins = [
        {
            coin: resposta.USDBRL.bid, 
            name: resposta.USDBRL.name,
        },
        {
            coin: resposta.BTCUSD.bid, 
            name: resposta.BTCUSD.name,
        },
        {
            coin: resposta.BTCBRL.bid, 
            name: resposta.BTCBRL.name,
        }
    ];

    addCoins(coins);
}

function addCoins(coins) {
    const divElemento = document.getElementById("coins-content");

    coins.forEach(function(coin) {
        const divElementCoin = document.createElement("div");
        divElementCoin.classList.add("card");

        const elementText = document.createElement("h1");
        elementText.innerHTML = coin.name + ": " + coin.coin;

        divElementCoin.appendChild(elementText);
        divElemento.appendChild(divElementCoin);
    });
}

