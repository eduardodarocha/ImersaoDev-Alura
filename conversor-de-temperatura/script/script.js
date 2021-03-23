function converterEmFahrenheit() {
    var valueInputCelsius = document.getElementById("inputvaluecelsius").value;
    var valueFahrenheit = (parseFloat(valueInputCelsius) * 1.8 + 32).toFixed(2);

    document.getElementById("valuefahrenheitconverted").innerHTML = " " +
        valueFahrenheit + "°F";
}

function converterEmCelsius() {
    var inputValueFahrenheit = document.getElementById("inputvaluefahrenheit").value;
    var valueCelsius = ((parseFloat(inputValueFahrenheit) - 32) / 1.8).toFixed(2);

    document.getElementById("valuecelsiusconverted").innerHTML = " " +
        valueCelsius + "°C";
}