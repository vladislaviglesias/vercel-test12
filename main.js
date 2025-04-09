
// Функция для получения данных о монетах и их обновления
async function fetchCoinData() {
    const response = await axios.get('https://api.binance.com/api/v3/ticker/24hr');
    const data = response.data;

    const btc = data.find(coin => coin.symbol === 'BTCUSDT');
    const eth = data.find(coin => coin.symbol === 'ETHUSDT');
    const bnb = data.find(coin => coin.symbol === 'BNBUSDT');
    const xrp = data.find(coin => coin.symbol === 'XRPUSDT');
    const sol = data.find(coin => coin.symbol === 'SOLUSDT');

    document.getElementById('btc-price').textContent = btc.lastPrice;
    document.getElementById('btc-change').textContent = btc.priceChangePercent + '%';
    document.getElementById('eth-price').textContent = eth.lastPrice;
    document.getElementById('eth-change').textContent = eth.priceChangePercent + '%';
    document.getElementById('bnb-price').textContent = bnb.lastPrice;
    document.getElementById('bnb-change').textContent = bnb.priceChangePercent + '%';
    document.getElementById('xrp-price').textContent = xrp.lastPrice;
    document.getElementById('xrp-change').textContent = xrp.priceChangePercent + '%';
    document.getElementById('sol-price').textContent = sol.lastPrice;
    document.getElementById('sol-change').textContent = sol.priceChangePercent + '%';
}

// Обновление данных каждые 30 секунд
setInterval(fetchCoinData, 30000);
fetchCoinData();
