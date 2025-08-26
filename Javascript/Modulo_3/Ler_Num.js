let i = 0;
while (true) { //por mais que esse loop tenha a condição true
    i++;
    if ((i%2) == 1) continue; // isso parar e realizar todo loop novamente caso a variavel i for ímppar
    if (i==30) break; // isso faz o loop parar imediatamente se i for 30 (se não ficaria infinitamente imprimindo números pares.)
    console.log(i);
}