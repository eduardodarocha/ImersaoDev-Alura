function converte() {
    const url = 'https://economia.awesomeapi.com.br/last/USD-BRL';
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            var valor = parseFloat(data.USDBRL.bid);
            let valueDolar = document.getElementById("valueinput");
            let dolar = valueDolar.value;
            let valueReal = (parseFloat(dolar) * valor).toFixed(2);
            document.getElementById("valueconverted").innerHTML =
                "R$" + valueReal.replace(".", ",");
        })
        .catch(function (error) {
            console.log(error);
        });
}