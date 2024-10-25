function calcularNotas() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    // Validaciones
    if (isNaN(nota1) || nota1 < 0 || nota1 > 30) {
        alert("Por favor, ingrese una nota válida para el primer parcial (0-30).");
        return;
    }
    if (isNaN(nota2) || nota2 < 0 || nota2 > 30) {
        alert("Por favor, ingrese una nota válida para el segundo parcial (0-30).");
        return;
    }
    if (isNaN(nota3) || nota3 < 0 || nota3 > 40) {
        alert("Por favor, ingrese una nota válida para el tercer parcial (0-40).");
        return;
    }

    // Cálculo de la nota final
    const notaFinal = nota1 + nota2 + nota3;
    let message;

    // Determinar el mensaje según la nota final
    if (notaFinal < 60) {
        message = "Reprobado";
    } else if (notaFinal < 80) {
        message = "Bueno";
    } else if (notaFinal < 90) {
        message = "Muy Bueno";
    } else {
        message = "Sobresaliente";
    }

    // Mostrar el resultado
    document.getElementById('result').innerText = `Nota Final: ${notaFinal} - ${message}`;
}

function limpiarCampos() {
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
    document.getElementById('resultado').innerText = '';
}