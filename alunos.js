let numAlunos = 11;

for (let contador = 0; contador <= numAlunos; contador++) {
    console.log (contador)
}

if (numAlunos == 0) {
    console.log ("O número é zero ")
} else if (numAlunos % 2 == 0) {
    console.log (`O número ${numAlunos} é par`)
} else {
    console.log (`O número ${numAlunos} é ímpar`)
}


let listaAlunos = ["Caique", "João", "Thiago", "Gabriel"]

for(let nome of listaAlunos) {
    console.log (`Esta pessoa se chama ${nome}`)

}