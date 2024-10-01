/*exemplo 1 - imprimindop cada linha sem loop

console.log(10)
console.log(9)
console.log(8)
console.log(7)
console.log(6)
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log("feliz ano novo")
*/

/*exemplo 02 - em ordem crenscente*/

/*let contador = 0;

while ( contador< 11){
      console.log(contador)
      contador++;
}
console.log("feliz ano novo")*/

/*exemplo 03 - em ordem crenscente imprimindo cada linha com loop while*/

/*let contador = 0

    while ( contador< 500){
      console.log(contador)
      contador+=20;
}
console.log("feliz ano novo");*/

//solicite o numero do usuario
let numeroinicial = parseInt(prompt("digite um numero inicial para iniciar a contagem decrescente de sdois numeros"));

//verifique se o numero é valido
if(!isNaN(numeroinicial) && numeroinicial >=0){

    //inicia a contagem
    let contador = numeroinicial;

    //iniciar a contagem crescente de dois em dois
    while (contador <=10){
    console.log(contador);
    contador += 2; // incrementa de dois em dois
    }
    //imprime uma mensagem de finalização
    console.log("feliz ano novo");
    }else{
    //imprime uma mensagem de erro
    console.log("numero invalido, por favor digite um numero valido maior ou igual a 0")
    }
    

