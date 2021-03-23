function calcular() {
    var value1 = parseFloat(document.getElementById("inputvalue1").value);
    var value2 = parseFloat(document.getElementById("inputvalue2").value);
    var operacao = document.getElementById("operacao").value;
    if (operacao == "+") {
        var result = (value1 + value2).toFixed(4);
        document.getElementById("resultado").innerHTML = result;

    } else if (operacao == "-") {
        var result = value1 - value2;
        document.getElementById("resultado").innerHTML = result;

    } else if (operacao == "*") {
        var result = value1 * value2;
        document.getElementById("resultado").innerHTML = result;

    } else if (operacao == "/") {
        var result = value1 / value2;
        document.getElementById("resultado").innerHTML = result.toFixed(4);
    } else {
        result = "OPERAÇÃO INVÁLIDA"
        document.getElementById("resultado").innerHTML = result;
    }

}