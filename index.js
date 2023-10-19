function classificador(){

var nome = "nome";
var xp = 0;
var nivel = "";

let nivel = Ferro;
do {console.log("O Herói de nome " + nome + " está no nível Ferro");
} while (xp <= 1000);

let nivel = Bronze;
do {console.log("O Herói de nome " + nome + " está no nível Bronze");
} while (xp > 1001 && xp < 2000);

let nivel = Prata;
do {console.log("O Herói de nome " + nome + " está no nível Prata");
} while (xp > 2001 && xp < 5000);

let nivel = Ouro;
do {console.log("O Herói de nome " + nome + " está no nível Ouro");
} while (xp > 6001 && xp < 7000);

let nivel = Platina;
do {console.log("O Herói de nome " + nome + " está no nível Platina");
} while (xp > 7001 && xp < 8000);

let nivel = Ascendente;
do {console.log("O Herói de nome " + nome + " está no nível Ascendente");
} while (xp > 8001 && xp < 9000);

let nivel = Imortal;
do {console.log("O Herói de nome " + nome + " está no nível Imortal");
} while (xp > 9001 && xp < 10000);

let nivel = Radiante;
do {console.log("O Herói de nome " + nome + " está no nível Radiante");
} while (xp >= 10001);

}
