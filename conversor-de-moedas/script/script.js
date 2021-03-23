    // var valorEmDolar = parseFloat(prompt("Qual é o valor em Dolars U$ da sua viagem?"));

    function converter() {
        var valueDolar = document.getElementById("valueinput").value
        var valueReal = (parseFloat(valueDolar) * 5.50).toFixed(2)

        document.getElementById("valueconverted").innerHTML = "R$" + (valueReal).replace(".", ",");

    }