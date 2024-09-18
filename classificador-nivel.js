//Criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói.

//Se XP <= 1.000 = Ferro
//Se XP >= 1.001 <= 2.000 = Bronze
//Se XP >= 2.001 <= 5.000 = Prata
//Se XP >= 5.001 <= 7.000 = Ouro
//Se XP >= 7.001 <= 8.000 = Platina
//Se XP >= 8.001 <= 9.000 = Ascendente 
//Se XP >= 9.001 <= 10.000 = Imortal
//Se XP >- 10.001 = Radiante

let nomeHeroi = "Caio Lopes";
let xpHeroi = 9684;

const nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];
const notificacao1 = "O Herói de nome: ";
const notificacao2 = " está no nível: ";

if (xpHeroi <= 1000) {
    console.log(notificacao1 + nomeHeroi + notificacao2 + nivel[0]);
}
else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    console.log(notificacao1 + nomeHeroi + notificacao2 + nivel[1]);
}
else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    console.log(notificacao1 + nomeHeroi + notificacao2 + nivel[2]);
}
else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    console.log(notificacao1 + nomeHeroi + notificacao2 + nivel[3]);
}
else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    console.log(notificacao1 + nomeHeroi + notificacao2 + nivel[4]);
}
else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    console.log(notificacao1 + nomeHeroi + notificacao2 + nivel[5]);
}
else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    console.log(notificacao1 + nomeHeroi + notificacao2 + nivel[6]);
}
else if (xpHeroi >= 10001) {
    console.log(notificacao1 + nomeHeroi + notificacao2 + nivel[7]);
}

