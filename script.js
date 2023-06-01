
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

    }
    }

