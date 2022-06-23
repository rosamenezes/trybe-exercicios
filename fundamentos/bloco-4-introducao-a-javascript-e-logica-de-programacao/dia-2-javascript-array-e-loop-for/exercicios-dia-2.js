// exercicio 1 //

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//  for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index])
//} 
    
// exercicio 2 //

 let resultado = 0;

  for (let index = 0; index < numbers.length; index += 1) {
      resultado = numbers[index] + resultado;
  }
  console.log(resultado)

// exercicio 3 //

let mediaAritimetica = resultado / numbers.length;

console.log(mediaAritimetica)

// exercicio 4 // 

// exercicio 5 //

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
        higherNumber = numbers[index]
    }
}
console.log(higherNumber)
