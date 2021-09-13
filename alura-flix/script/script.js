var listaFilmes = [
    "https://m.media-amazon.com/images/M/MV5BNTQ5YjkyZWYtNzUyNC00MjM3LWFhNWUtNDcxNzNiZGFlNzI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNzA4MjEzMTktZWMxYS00YWQ1LWJhMWItZTUyMGFmZjFmMjE4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMmE1ZTA3MjQtY2E1My00NzM0LWIzN2EtMWJlZjc5ZTgzZTkwXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNTMxOGI4OGMtMTgwMy00NmFjLWIyOTUtYjQ0OGQ4Mjk0YjNjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTUzYTY4OTctNDg3NS00ZjY1LWE5Y2YtMTBiODU5OTViOTE0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR1,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZWQ1YjNiMTItZjkwZS00NDMyLThiOWEtNzBkMzAzMWU2ZDUwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BYWVhZjZkYTItOGIwYS00NmRkLWJlYjctMWM0ZjFmMDU4ZjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BODNiODVmYjItM2MyMC00ZWQyLTgyMGYtNzJjMmVmZTY2OTJjXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg"

];

var listaFilmesVideos = [
    "https://www.youtube.com/embed/aHmDi6CUQ3M",

    "https://www.youtube.com/embed/K1TloEu4EXA",

    "https://www.youtube.com/embed/dnBpZuSUISQ",
    
    "https://www.youtube.com/embed/BAjP9eBskcw",
    
    "https://www.youtube.com/embed/OqhECMyn7TA",

    "https://www.youtube.com/embed/gBKx63Y6rG4",

    "https://www.youtube.com/embed/mbbPSq63yuM",

    "https://www.youtube.com/embed/aSK8owZEbDk",

    "https://www.youtube.com/embed/p78Y5-zS3kY",

    "https://www.youtube.com/embed/2KnZac176Hs",

    "https://www.youtube.com/embed/r5m52kbw0cU",

    "https://www.youtube.com/embed/AkPVYhf5ZeI",

    "https://www.youtube.com/embed/0i86oM1nHjM",

    "https://www.youtube.com/embed/VyHV0BRtdxo",

    "https://www.youtube.com/embed/8sB1HTghkg4",

    "https://www.youtube.com/embed/0OGq4ld-CLU",

    "https://www.youtube.com/embed/ejvK2jW8dh8",

    "https://www.youtube.com/embed/SgZI655GgHk",

    "https://www.youtube.com/embed/SS6ABPkfmBE",

    "https://www.youtube.com/embed/q8ncjHylG6c"

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