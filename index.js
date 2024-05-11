let vitorias = Math.round(Math.random() * 150);
let derrotas = Math.round(Math.random() * 150);

function playerRankedCalculator(vitoriasPlayer, derrotasPlayer) {
  let saldoRank = vitoriasPlayer - derrotasPlayer;
  let playerRank = "Ferro";

  if (saldoRank < 0) {
    saldoRank = derrotasPlayer - vitoriasPlayer;
  }

  if (saldoRank <= 10) {
    playerRank = "Ferro";
  } else if (saldoRank >= 11 && saldoRank <= 20) {
    playerRank = "Bronze";
  } else if (saldoRank >= 21 && saldoRank <= 50) {
    playerRank = "Prata";
  } else if (saldoRank >= 51 && saldoRank <= 80) {
    playerRank = "Ouro";
  } else if (saldoRank >= 81 && saldoRank <= 90) {
    playerRank = "Diamante";
  } else if (saldoRank >= 91 && saldoRank <= 100) {
    playerRank = "Lendário";
  } else if (saldoRank >= 101) {
    playerRank = "Imortal";
  }

  return {
    playerRank: playerRank,
    saldoRank: saldoRank,
  };
}

let playerStatus = playerRankedCalculator(vitorias, derrotas);

console.log(
  `O Herói tem um saldo de ${playerStatus.saldoRank} e está no nível de ${playerStatus.playerRank}`
);
