/**
 * Hay que crear un detector de mentiras, si miente, descarga, si no miente, no hacer nada, si no se decide, aclarar.
 */

 interrogatorio = prompt ("¿Mataste a fulanito?")
 
 if (interrogatorio == "sí") {
     document.write ("Mentiroso, te cae una descarga")
 } else if (interrogatorio == "no") {
    document.write ("Ok, haz dicho la verdad, sales libre")
}  else {
    document.write ("No se entiende tu respuesta, responde con sí o no")
}