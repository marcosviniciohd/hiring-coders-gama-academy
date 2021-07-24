//Busca binária

var valores = [5, 8, 10, 22, 38, 45, 45, 60, 68, 70, 71, 75, 80,];

function busca(num){
    for(i = 0; i <= 6; i++){
        if(num == valores[i]){
            return i;
        }
    }
    return -1;
}

function buscaBinaria(num){
    let inicio, fim, meio, passos;

    inicio = 0;
    fim = 13;
    passos = 0;
    while(inicio < fim){
        meio = parseInt((inicio + fim) / 2);
        passos += 1;
        if(num == valores[meio]){
            console.log("Achei em " + passos + " passos");
            return meio;
        }
        else{
            if(num > valores[meio]){
                inicio = meio + 1;
            }else{
                fim = meio -1;
            }
        }
    }
    console.log("Não achei " + passos + " passos");
    return -1;
}

// usando a nossa ferramenta de busca
console.log(buscaBinaria(10));
console.log(buscaBinaria(1));
console.log(buscaBinaria(13));
console.log(buscaBinaria(7));
console.log(buscaBinaria(69));