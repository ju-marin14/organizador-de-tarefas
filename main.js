const botoes = document. querySelectorAll(".botao");

for(let i=0; i <botoes.length; i++){
    botoes[i].onclick = function(){

        for(let j=0; j<botoes.length; j++){
            botoes[j].classList.remove("ativo");

        }

        botoes[i].classlit.add("ativo");
    }
} const contadores = document.querySelectorAll(".contador");
  const tempoObjetivo1 = new Date("2024-10-05t00:00:00");
  const tempoObjetivo2 = new Date("2024-12-05t00:00:00");
  const tempoObjetivo3 = new Date("2024-12-30t00:00:00");
  const tempoObjetivo4 = new Date("2025-02-01t00:00:00");

  const tempos = [tempo tempoObjetivo1,tempoObjetivo2,tempo
