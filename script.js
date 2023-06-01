
const contador = [0, 0, 0, 0, 0, 0];

let repetir = true

while(repetir){
    const menu = parseInt(prompt('Seleccione el ejercicio a ejecutar: \n 1. Ordenar números \n 2. Calcular área de una circunferencia \n 3. Determinar tipo de triángulo \n 4. Verificar números amigos \n 5. Calcular valor de compra \n 6. Calcular nota final del estudiante \n 7. Salir' ))
    
    switch(menu){
        case 1:
            contador[0]++;
            let numero1 = parseInt(prompt('Ingrese un número: '))
            let numero2 = parseInt(prompt('Ingrese un número: '))
            let numero3 = parseInt(prompt('Ingrese un número: '))

            let numeros = [numero1, numero2, numero3]

            let mayor = numeros.sort((a, b) => b - a);
            console.log("Ordenado de mayor a menor:", mayor);

            let menor = numeros.sort((a, b) => a - b);
            console.log("Ordenado de menor a mayor:", menor);
            break;
        case 2:
            contador[1]++;
            let radio = parseFloat(prompt("Ingrese el radio de la circunferencia:"));
            const pi = 3.14159; 
            let area = pi * radio * radio; 
            console.log("El área de la circunferencia es: " + area);
            break;
        case 3:
            contador[2]++;
            let lado1 = parseFloat(prompt("Ingrese el primer lado del triángulo:"));
            let lado2 = parseFloat(prompt("Ingrese el segundo lado del triángulo:"));
            let lado3 = parseFloat(prompt("Ingrese el tercer lado del triángulo:"));

            if (lado1 === lado2 && lado2 === lado3) {
                console.log("El triángulo es equilátero.");
              } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
                console.log("El triángulo es isósceles.");
              } else {
                console.log("El triángulo es escaleno.");
              }
            break;
        case 4:
            contador[3]++;
            let num1= parseInt(prompt('Ingrese un número: '));
            let num2 = parseInt(prompt('Ingrese un número: '));

            function numAmigos(numero) {
                let suma = 0;
                for (let i = 1; i <= numero / 2; i++) {
                  if (numero % i === 0) {
                    suma += i;
                  }
                }
                return suma;
              }
            
              const div1 = numAmigos(num1);
              const div2 = numAmigos(num2);
            
              if (div1 === num2 && div2 === num1) {
                console.log(num1 + " y " + num2 + " son números amigos.");
              } else {
                console.log(num1 + " y " + num2 + " no son números amigos.");
              }
            
            break;
        case 5:
            contador[4]++;
            let valor = parseFloat(prompt("Ingrese el valor de compra:"));
            let cantidad = parseInt(prompt("Ingrese la cantidad:"));

            let subtotal = valor * cantidad; 
            let iva = subtotal * 0.19; 
            let total;

            if (subtotal > 500000 && subtotal < 1000000) {
            total = subtotal - iva; 
            console.log("Valor de compra: $" + subtotal);
            console.log("Devolución iva (19%): $" + iva);
            } else if (subtotal > 1000000) {
            let descuento = subtotal * 0.1; 
            total = subtotal - descuento; 
            console.log("Valor de compra: $" + subtotal);
            console.log("Descuento (10%): $" + descuento);
            } else {
            total = subtotal + iva; 
            console.log("Valor de compra: $" + subtotal);
            console.log("IVA (19%): $" + iva);
            }

            console.log("Total a pagar: $" + total); 
            break;
        case 6:
            contador[5]++;
            function ingNota(mensaje) {
                let nota;
                do {
                  nota = parseFloat(prompt(mensaje));
                  if (nota > 5) {
                    console.log("El rango de notas es desde 0 hasta 5. Por favor, ingrese nuevamente la nota.");
                  }
                } while (nota > 5);
                return nota;
              }
              
              let nota1 = ingNota("Ingrese la primera nota (0-5):");
              let nota2 = ingNota("Ingrese la segunda nota (0-5):");
              let nota3 = ingNota("Ingrese la tercera nota (0-5):");
              let nota4 = ingNota("Ingrese la cuarta nota (0-5):");
              
              if (nota4 === 5) {
                nota4++;
                nota1++;
                nota2++;
                nota3++;
              }
              
              let notaF = nota1 * 0.1 + nota2 * 0.2 + nota3 * 0.3 + nota4 * 0.4;
              
              if (notaF > 3.5) {
                console.log("El estudiante ganó.");
              } else {
                console.log("El estudiante perdió.");
              }              
            break;
        case 7: 
            repetir = false
            for (let v = 0; v < contador.length; v++) {
                console.log("Ejercicio " + (v + 1) + ": " + contador[v] + " veces");
              }
              
              const max = contador.indexOf(Math.max(...contador)) + 1;
              const min = contador.indexOf(Math.min(...contador)) + 1;
              
              console.log("\nEjercicio más ejecutado: " + max);
              console.log("Ejercicio menos ejecutado: " + min);
            break;

        default:
            console.log ('Opción invalida')
            break;
    }
    }

