﻿function converterEmKm() {
    var valueInputLy = document.getElementById("inputvaluely").value;
    if (valueInputLy == "") {
        alert("Digite um valor");
    } else{
    var valueEmKm = (parseFloat(valueInputLy) * 9460528404879.4).toExponential(4);

    document.getElementById("valuekmconverted").innerHTML = " " +
        valueEmKm + " Km";
    }
}