// Referências aos elementos HTML
const carrosselSlides = document.querySelector(".carrossel-slides");
const player = document.getElementById('musica-fundo');

// Configurações
player.volume = 0.3; // Volume da música (de 0.0 a 1.0)
let musicaJaIniciada = false; // Variável de controle para o primeiro play

// Playlist de músicas. IMPORTANTE: A ordem deve corresponder à ordem das imagens!
const playlist = [
        'Snoop Dogg - Riders on the Storm (feat. The Doors).mp3', 
        'Styles of Beyond - Nine Thou - Need for Speed Most Wanted Soundtrack - 1080p.mp3', 
        'Lil Jon & The East Side Boyz - Get Low.mp3'
];

// Variável para controlar o slide/música atual
let indiceAtual = 0;

// Exibe o primeiro slide ao carregar a página
mostraSlideAtual();

// Função chamada pelos botões no HTML
function mudaSlide(direcao) {
    // Se a música ainda não começou, marca como iniciada
    if (!musicaJaIniciada) {
        musicaJaIniciada = true;
    }

    // Atualiza o índice (avança ou retrocede)
    indiceAtual += direcao;

    const totalDeSlides = playlist.length;

    // Lógica para o loop do carrossel
    if (indiceAtual >= totalDeSlides) {
        indiceAtual = 0; // Volta para o primeiro
    } else if (indiceAtual < 0) {
        indiceAtual = totalDeSlides - 1; // Vai para o último
    }
    
    // Chama a função que atualiza a tela e o som
    mostraSlideAtual();
}

// Função que atualiza a imagem e toca a música correspondente
function mostraSlideAtual() {
    // Move o carrossel para a imagem correta
    carrosselSlides.style.transform = `translateX(-${indiceAtual * 100}%)`;

    // Se a interação do usuário já aconteceu, toca a música
    if (musicaJaIniciada) {
        // Define a música correspondente ao galo atual
        player.src = playlist[indiceAtual];
        // Toca a música
        player.play();
    }
}

// Quando a música atual terminar, ela simplesmente para.
// A próxima só tocará quando o usuário clicar no botão novamente.
// Se quiser que ela recomece, adicione 'loop' à tag <audio> no HTML.