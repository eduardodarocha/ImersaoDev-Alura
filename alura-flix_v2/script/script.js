var listImagens = []
var listTrailers = []

// var filmImage = '<input type="text" id="inputfilmimageaddress" name="inputfilmimageaddress" placeholder="Insira endereço de imagem">';
// var filmTrailer = '<input type = "text" id = "inputfilmtraileraddress" name = "inputfilmtraileraddress" placeholder="Insira endereço do trailer" >';


function inicio() {
    document.getElementById("showfilmesimagens").innerHTML = "";
    document.getElementById("voltar").innerHTML = "";

    for (var i = 0; i < listImagens.length; i++) {
        postaFilmes(listImagens[i], i);
    }
}

function adicionarFilme() {


    var addImage = document.querySelector("#inputfilmimageaddress");
    if (addImage == "") {
        alert("imagem inválida")
    } else {

        listImagens.push(addImage.value)
        var addTrailertemp = document.querySelector("#inputfilmtraileraddress");
        listTrailers.push(addTrailertemp.value.replace("watch?v=", "embed/"))
    }
    inicio()
}


function postaFilmes(filmeaddress, filmindex) {
    var showlistaFilmes = document.querySelector("#showfilmesimagens");
    var elementoFilme = "<img src=" + filmeaddress + " onclick='videoFilme(" + filmindex + ")'>";
    showlistaFilmes.innerHTML = showlistaFilmes.innerHTML + elementoFilme;
    document.getElementById('inputfilmimageaddress').value = '';
    document.getElementById('inputfilmtraileraddress').value = '';

}


function videoFilme(filmindex) {

    document.getElementById("showfilmesimagens").innerHTML = "<iframe width='640' height='360' src=" + listTrailers[filmindex] + " title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
    document.getElementById("voltar").innerHTML = '<button onclick="inicio()">Voltar</button>';
}

function openform() {

    var addImage = document.querySelector("#filmimage");
    var addTrailer = document.querySelector("#filmtrailer");
    var btn2 = document.querySelector("#btn2");
    var filmImage = '<input type="text" id="inputfilmimageaddress" name="inputfilmimageaddress" placeholder="Insira endereço de imagem">';
    var filmTrailer = '<input type = "text" id = "inputfilmtraileraddress" name = "inputfilmtraileraddress" placeholder="Insira endereço do trailer" >';

    addImage.innerHTML = filmImage;
    addTrailer.innerHTML = filmTrailer;

    document.getElementById("btn").style.display = 'none';
    btn2.innerHTML = '<button onClick="adicionarFilme()" id="addbtn2">Adicionar Filme</button>';


}
inicio()