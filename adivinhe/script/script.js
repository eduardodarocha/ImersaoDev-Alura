const characters = [{
        nome: "Sasuke",
        img: "https://s.aficionados.com.br/imagens/sasuke-0_cke.jpg"
    },
    {
        nome: "Kakashi",
        img: "https://s.aficionados.com.br/imagens/kakashi-3_cke.jpg"

    },
    {
        nome: "Jiraya",
        img: "https://s.aficionados.com.br/imagens/jiraya-0.jpg"
    },
    {
        nome: "Rock Lee",
        img: "https://s.aficionados.com.br/imagens/rock-lee-0_cke.jpg"
    },
    {
        nome: "Gaara",
        img: "https://s.aficionados.com.br/imagens/gaara-1_cke.jpg"
    },
    {
        nome: "Sakura",
        img: "https://s.aficionados.com.br/imagens/sakura-haruno_cke.jpg"
    },
    {
        nome: "Itachi",
        img: "https://s.aficionados.com.br/imagens/itachi-uchiha-0_cke.jpg"
    },
    {
        nome: "Orochimaru",
        img: "https://s.aficionados.com.br/imagens/orochimaru-1_cke.jpg"
    },
    {
        nome: "Hinata",
        img: "https://s.aficionados.com.br/imagens/hinata-byakugan_cke.jpg"
    },
    {
        nome: "Tsunade",
        img: "https://s.aficionados.com.br/imagens/tsunade-infobox_cke.jpg"
    },
    {
        nome: "Temari",
        img: "https://s.aficionados.com.br/imagens/temari-0_cke.jpg"
    },
    {
        nome: "Ino",
        img: "https://s.aficionados.com.br/imagens/ino-yamanak_cke.jpg"
    }
];

var indexNumber = 0;

function newCharacter() {
    var imagem = document.getElementById("imagem");
    var display = document.getElementById("resposta").style.display;
    indexNumber = Math.floor(Math.random() * characters.length);
    imagem.src = characters[indexNumber].img;
    if (display == "block") {
        changeDisplay("resposta")
    }
}

newCharacter();

function changeDisplay(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';

}

function discover() {
    var inputName = document.getElementById("inputname").value;


    if (inputName.length) {
        if (inputName.toLowerCase() == characters[indexNumber].nome.toLowerCase()) {
            document.getElementById("resposta").style.display = 'block';
            document.getElementById("resposta").innerHTML = "Você acertou だってばよ";

        } else {
            changeDisplay("resposta");
            document.getElementById("resposta").style.display = 'block';
            document.getElementById("resposta").innerHTML = "Tente outra vez";
        }
    } else {
        changeDisplay("resposta");
        document.getElementById("resposta").innerHTML = "Coloque algum nome válido";
    }

}