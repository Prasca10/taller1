function contadorParImpar(num) {
    contadorPar = 0;
    contadorImpar = 0;

    for (let i = 1; i <= num; i++) {
        i % 2 == 0 ? contadorPar++ : contadorImpar++;
    }
    return "Pares: " + contadorPar + ", Impares: " + contadorImpar;
}

function factorial(num) {
    return num == 1 ? 1 : num * factorial(num - 1)
}

function validacionContraseña(input) {
    return input === "contraseña" ? true : false
}

function generadorTabla(num) {
    tabla = "";
    for (let i = 1; i <= 10; i++) {
        tabla = tabla + `\n ${num} * ${i} = ${num * i} `
    }
    return tabla
}

function esPrimo(num) {
    divisores = 0
    for (let i = 1; i <= Math.ceil(num / 2) + 1; i++) {
        if (divisores < 2) {
            if (num % i == 0) {
                divisores++
            }
        } else return false
    }
    return true
}

function sumarPrimos(num) {
    sum = 0;
    for (let i = 0; i <= num; i++) esPrimo(i) ? sum += i : sum = sum;
    return sum;
}

function fibonacci(pos) {
    if (pos == 2) return 1
    if (pos == 1) return 0
    return fibonacci(pos - 1) + fibonacci(pos - 2)
}

function serieFibonacci(num) {
    str = ""
    for (let i = 1; i <= num; i++) { str = str + fibonacci(i) + ", " }
    return str.slice(0, str.length - 2);
}

function convertirTemperatura(opt, value) {
    return opt == 2 ? ((value - 32) * 5 / 9) + "°C" : ((value * 9 / 5) + 32) + "°F";
}

function potencia(num, pot) {
    return Math.pow(num, pot);
}


menu = ['1. Contador números pares e impares','2. Calculadora factorial','3. Validación contraseña','4. Generador de tablas de multiplicar','5. Suma de números primos','6. Secuencia fibonacci','7. Convertidor de temperatura','8. Calculadora de potencias','9. SALIR']
usos = [0,0,0,0,0,0,0,0,0]
do {
    opcionMenu = Number(prompt(
        "-------- Menú de opciones --------\n \n1. Contador números pares e impares\n2. Calculadora factorial\n3. Validación contraseña\n4. Generador de tablas de multiplicar\n5. Suma de números primos\n6. Secuencia fibonacci\n7. Convertidor de temperatura\n8. Calculadora de potencias\n9. SALIR\n \nDigite el número de su opción: "))

    if(window.confirm("Escogiste la opción:\n"+menu[opcionMenu-1]+"\n¿Desea continuar?")){
        if(opcionMenu>0 &&opcionMenu<10) usos[opcionMenu-1] = usos[opcionMenu-1]+1
        switch (opcionMenu) {
            case 1:
                num = Number(prompt("1. Contador números pares e impares\nDigita un número y te mostraremos la cantidad de números pares e impares dentro del rango desde 1 hasta ese número.\nIngrese un valor:"))
                alert(contadorParImpar(num));
                break;
            case 2:
                num = Number(prompt("2. Calculadora factorial\nCalcula el factorial de un número ingresado \nIngrese un valor:"))
                alert(num + "! =" + factorial(num));
                break;
            case 3:
                contra = String(prompt("3. Validación contraseña\n Ingrese una contraseña. Si la contraseña coincide con la contraseña secreta, muestra un mensaje de acceso concedido; de lo contrario, muestra un mensaje de acceso denegado\nIngrese una contraseña:"))
                alert(validacionContraseña(contra) ? "Acesso concedido" : "Acceso denegado");
                break;
            case 4:
                num = Number(prompt("4. Generador de tablas de multiplicar\nIngrese un número y luego se muestra la tabla de multiplicar correspondiente a ese número.\nIngrese un valor:"))
                alert(generadorTabla(num));
                break;
            case 5:
                num = Number(prompt("5. Suma de números primos\nDigite un número y se muestra la suma de los números primos que existen hasta el valor dado.\nIngrese un valor:"))
                alert("la suma de los primos hasta el " + num + " es :" + sumarPrimos(num));
                break;
            case 6:
                num = Number(prompt("6. Secuencia fibonacci\nGenere la secuencia de Fibonacci hasta el término dado\nIngrese un valor:"))
                alert(serieFibonacci(num));
                break;
            case 7:
                opt = Number(prompt("7. Convertidor de temperatura\n\n1. Celsius a fahrenheit\n2. Fahrenheit a celsius\nDigite el número de su opción:"))
                num = Number(prompt("7. Convertidor de temperatura\nIngrese un valor:"))
                alert(convertirTemperatura(opt, num));
                break;
            case 8:
                num = Number(prompt("8. Calculadora de potencias\nDigite el número a elevar:"))
                pot = Number(prompt("8. Calculadora de potencias\nDigite la potencia:"))
                alert(potencia(num, pot));
                break;
            case 9:
                str = "Recuento de usos:\n"
                menu.forEach((opt,i) => {
                    str = str + opt + " : "+ usos[i] +" usos"+ "\n"
                });
                str = str+ "\nLa opcion mas usada : " + menu[usos.indexOf(Math.max(...usos))]+"\n"
                str = str+ "La opción menos usada : " + menu[usos.indexOf(Math.min(...usos))]+"\n"

                alert(str+"\nGracias, nos vemos en la proxima:)")
                break;
            default:
                alert("Opción inválida")
                break
        }
    }    
} while (opcionMenu != 9)