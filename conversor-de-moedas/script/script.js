function converter() {
    var valueDolar = document.getElementById("valueinput");
    var dolar = valueDolar.value
    var valueReal = (parseFloat(dolar) * 5.5).toFixed(2);

    document.getElementById("valueconverted").innerHTML =
        "R$" + valueReal.replace(".", ",");
}