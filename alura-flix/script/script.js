var listaFilmes = [
    "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTUzYTY4OTctNDg3NS00ZjY1LWE5Y2YtMTBiODU5OTViOTE0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR1,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZWQ1YjNiMTItZjkwZS00NDMyLThiOWEtNzBkMzAzMWU2ZDUwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BYWVhZjZkYTItOGIwYS00NmRkLWJlYjctMWM0ZjFmMDU4ZjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
];

var listaFilmesVideos = [
    "https://www.youtube.com/embed/gBKx63Y6rG4",

    "https://www.youtube.com/embed/mbbPSq63yuM",

    "https://www.youtube.com/embed/aSK8owZEbDk",

    "https://www.youtube.com/embed/p78Y5-zS3kY",

    "https://www.youtube.com/embed/2KnZac176Hs",

    "https://www.youtube.com/embed/r5m52kbw0cU",

    "https://www.youtube.com/embed/AkPVYhf5ZeI",

    "https://www.youtube.com/embed/0i86oM1nHjM",

    "https://www.youtube.com/embed/VyHV0BRtdxo",

    "https://www.youtube.com/embed/8sB1HTghkg4?t=99"

];

function postaFilmes(endereço, index) {

    var listaFilmes = document.querySelector("#filmesimagens")
    var elementoFilme = "<img src=" + endereço + " onclick='videoFilme(" + index + ")'>"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}

function videoFilme(indexVideo) {
    document.getElementById('filmesimagens').innerHTML = "<iframe src=" + listaFilmesVideos[indexVideo] + " width=640' height='360'></iframe>"
    document.getElementById('voltar').innerHTML = '<button onclick="inicio()">Voltar</button>'
}

function inicio() {
    document.getElementById('filmesimagens').innerHTML = ""
    document.getElementById('voltar').innerHTML = ""
    for (var i = 0; i < listaFilmes.length; i++) {
        postaFilmes(listaFilmes[i], i);
    }
}

inicio();