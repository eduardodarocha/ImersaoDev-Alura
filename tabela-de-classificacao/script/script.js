var paulo = {
    nome: "Paulo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};

var rafa = {
    nome: "Rafa",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};

var jogadores = [rafa, paulo];

function exibirJogadoresNaTela(jogadores) {
    var html = "";
    for (var i = 0; i < jogadores.length; i++) {
        html += "<tr><td>" + jogadores[i].nome + "</td>";
        html += "<td>" + jogadores[i].vitorias + "</td>";
        html += "<td>" + jogadores[i].empates + "</td>";
        html += "<td>" + jogadores[i].derrotas + "</td>";
        html += "<td>" + jogadores[i].pontos + "</td>";
        html +=
            "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";

        if (i == 0) {
            html += '<th rowspan="2"><button onClick="jogadores.forEach(adicionarEmpate)">Empate</button></th>';
            // html += "<td><button onClick='adicionarDerrota(" + (i+1) +  ")'>Derrota</button></td></th></tr>";
            // html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></th></tr>";
        }
         else {

            // html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>";
        }
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = html;
}

function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);

exibirJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    if (i == 0) {
    adicionarDerrota(i + 1);
    } else if (i == 1) {
        adicionarDerrota(i - 1);
    }
    exibirJogadoresNaTela(jogadores);
}

function adicionarEmpate(jogador) {
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibirJogadoresNaTela(jogadores);
}

function limpar() {
    for (var i = 0; i < jogadores.length; i++) {
        jogadores[i].vitorias = 0
        jogadores[i].derrotas = 0
        jogadores[i].empates = 0
        jogadores[i].pontos = 0
    }
    exibirJogadoresNaTela(jogadores)
}