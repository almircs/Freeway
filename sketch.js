// O jogo só começa depois de uma tecla ou clique: os navegadores
// bloqueiam áudio que toca sem interação do usuário.
let jogoIniciado = false;

function setup() {
  const tela = createCanvas(500, 400);
  tela.parent("jogo");
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();

  if (!jogoIniciado) {
    mostraTelaInicial();
    return;
  }

  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}

function mostraTelaInicial() {
  fill(0, 0, 0, 170);
  noStroke();
  rect(0, 0, width, height);
  fill(255, 240, 0);
  textAlign(CENTER, CENTER);
  textSize(28);
  text("Pressione uma tecla para começar", width / 2, height / 2 - 12);
  fill(255);
  textSize(16);
  text("ou clique na tela", width / 2, height / 2 + 22);
}

function iniciaJogo() {
  if (jogoIniciado) return;
  jogoIniciado = true;
  userStartAudio();
  tocaSom(somDaTrilha, true);
}

function keyPressed() {
  iniciaJogo();
  // Evita que as setas rolem a página enquanto se joga
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
    return false;
  }
}

function mousePressed() {
  iniciaJogo();
}

function touchStarted() {
  iniciaJogo();
}
