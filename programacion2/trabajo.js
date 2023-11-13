let sumar = (num1, num2) => num1 + num2;
let cuadradoo = (num3) => num3 * num3;
let esPar = (num4) => num4 % 2 === 0;
let saludar = (nom) => `Hola, ${nom}!`;

function suma() {
    let a = parseInt(document.getElementById("suma1").value);
    let b = parseInt(document.getElementById("suma2").value);
    let resultado1 = document.getElementById("resultado1");

    let resul1 = sumar(a, b);

    if (resultado1.style.display === "none") {

        resultado1.style.display = "block";
        const total1 = document.createElement("p");
        total1.textContent = `Tus numeros ${a} y ${b} sumados son: ${resul1}.`;
        resultado1.appendChild(total1);

      } else {

        resultado1.style.display = "none";
    }
}

function cuadrado() {
    let c = document.getElementById("cuadrado1").value;
    let resultado2 = document.getElementById("resultado2");

    let resul2 = cuadradoo(c);

    if (resultado2.style.display === "none") {
        
        resultado2.style.display = "block";
        const total2 = document.createElement("p");
        total2.textContent = `Tu número ${c} al cuadrado es: ${resul2}.`;
        resultado2.appendChild(total2);

      } else {

        resultado2.style.display = "none";
    }
}

function par() {
    let d = document.getElementById("par").value;
    let resultado3 = document.getElementById("resultado3");

    if (resultado3.style.display === "none") {

        resultado3.style.display = "block";
        if (esPar(d)) {

            const total3 = document.createElement("p");
            total3.textContent = `Tu número ${d} es par.`;
            resultado3.appendChild(total3);
        } else {

            const total31 = document.createElement("p");
            total31.textContent = `Tu número ${d} no es par.`;
            resultado3.appendChild(total31);
        }

      } else {

        resultado1.style.display = "none";
    }
}

function saludo() {
    let nombre = document.getElementById("nombre").value;
    let resultado4 = document.getElementById("resultado4");

    if (resultado4.style.display === "none") {
        
        resultado4.style.display = "block";
        const total4 = document.createElement("p");
        total4.textContent = saludar(nombre);
        resultado4.appendChild(total4);

      } else {

        resultado4.style.display = "none";
    }
}