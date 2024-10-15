document.getElementById('convertBtn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }
  
    // Пример фиксированных курсов валют (в реальных условиях можно использовать API)
    const exchangeRates = {
      USD: { KZT: 470, EUR: 0.93, GBP: 0.77 },
      EUR: { USD: 1.08, KZT: 500, GBP: 0.83 },
      KZT: { USD: 0.0021, EUR: 0.002, GBP: 0.0017 },
      GBP: { USD: 1.3, EUR: 1.2, KZT: 580 }
    };
  
    let convertedAmount;
  
    if (fromCurrency === toCurrency) {
      convertedAmount = amount; // Если выбраны одинаковые валюты
    } else {
      const rate = exchangeRates[fromCurrency][toCurrency];
      convertedAmount = amount * rate;
    }
  
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
  });
  