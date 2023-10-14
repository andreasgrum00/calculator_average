function calcularNotaNecessaria() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);

    if (isNaN(nota1) || isNaN(nota2)) {
        document.querySelector(".resultado").textContent = "Por favor, informe as notas do 1º e 2º trimestres.";
    } else {
        var quantoPrecisa = 21 - (nota1 + nota2);
        if (quantoPrecisa <= 0) {
            document.querySelector(".resultado").textContent = "Você já atingiu a média necessária para passar!";
        } else {
            document.querySelector(".resultado").textContent = `Você precisa tirar ${quantoPrecisa.toFixed(2)} no 3º trimestre para passar.`;
        }
    }
}
