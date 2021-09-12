var numeroSecreto = parseInt(Math.random() * 101);
var tentativas = 0;
console.log("numero secreto " + numeroSecreto);

function discover() {
    var palpite = parseInt(document.getElementById("inputguess").value);
    console.log(palpite);
    console.log("numero secreto " + numeroSecreto);

    if (numeroSecreto != palpite) {
        // var palpite = parseInt(prompt("Digite um número"));
        if (palpite > numeroSecreto) {
            tentativas += 1;
            document.getElementById("dica").innerHTML = "O número secreto é menor.";
            document.getElementById("numTentativas").innerHTML = "Você usou " + tentativas + " tentativa(s)";

        } else if (palpite < numeroSecreto) {
            //alert("O número secreto é maior");
            tentativas += 1;
            document.getElementById("dica").innerHTML = "O número secreto é maior.";
            document.getElementById("numTentativas").innerHTML = "Você usou " + tentativas + " tentativa(s)";
        }
    } else {
        document.getElementById("dica").innerHTML = "você acertou o número secreto";
        document.getElementById("numTentativas").innerHTML = "Você acertou na " +
            (tentativas+1) + "ª tentativa";
    }
    document.getElementById("inputguess").value = "";
}