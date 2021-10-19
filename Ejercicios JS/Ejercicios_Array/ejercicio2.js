/**
 * Crear un minisistema que nos permita ingresar los alumnos que están presentes y ausentes en clase.
 * Pasados los 30 días mostrar la situación final de todos los alumnos (Número total de presentes y ausentes).
 * Se puede tener un máximo de 10% de inasistencias por semestre, sino está jalado.
 */

let cantidad = prompt("¿Cuántos alumnos son?")
let alumnosTotales = []

for (let i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt ("Nombre del alumno " + (i+1)),0] // el i+1 es para que en el prompt salga alumno 1, alumno 2, etc.
}

const tomarAsistencia = (nombre,p)=>{
    let presencia =  prompt(nombre)
    if (presencia == "p") {
        alumnosTotales[p][1]++ // estoy seleccionando un elemento del array y un elemento del otro array anidado que está en la posicion 1
    }
}

//Creamos for para que tome lista durante 30 días

for (i=0; i<30; i++){ 
    for (alumno in alumnosTotales) { // es un for in para que in me marque la posicion del array
        tomarAsistencia(alumnosTotales[alumno][0],alumno)
    }
}

// Mostrar situación final de todos los alumnos. Calcular desaprobados

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br> 
    ______Presentes: ${alumnosTotales[alumno][1]}<br>
    ______Ausentes: ${30 - parseInt(alumnosTotales[alumno][1])}`//en alumno0 está el nombre, en alumno1 el número de asistencias, 30 son los días totales 
    if (30 - alumnosTotales[alumno][1] > 18){ //18 = 90% de asistencia
        resultado+= "Reprobado por Inasistencias <br><br>"
    } else {
        resultado+= "<br><br>" //supongo que estoy concatenando aquí
        }
        document.write(resultado)
}