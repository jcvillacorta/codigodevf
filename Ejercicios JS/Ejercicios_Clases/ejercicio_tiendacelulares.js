/**
 * Enunciado ejercicio tienda celulares
 */

class celular {
    constructor(modelo, color, peso, pantalla, camara, ram){
        this.modelo = modelo
        this.color = color
        this.peso = peso
        this.pantalla = pantalla
        this.camara = camara
        this.ram = ram
        this.encendido = false
    }
    verInfo(){
        document.write(`------<br> Celular: ${this.modelo} <br> ------<br> 
        Color: ${this.color} <br>
        Peso: ${this.peso} <br> 
        Resolución de Pantalla: ${this.pantalla}<br>
        Resolución de cámara: ${this.camara}<br>
        Memoria RAM: ${this.ram}<br><br>`)
    }
    presionarBotonEncendido(){
        if (this.encendido == false) {
            document.write(this.modelo + " Encendiendo... listo <br>")
            this.encendido = true
        } else {
            document.write(this.modelo + " Apagando... listo <br>")
            this.encendido = false
        }
        
    }
    reiniciar(){
        document.write(this.modelo + " Reiniciando... listo <br>")
    }
    tomarFotos(){
        document.write(this.modelo + " Click, click madafaka a una resolución de: " + this.camara + "<br>")
    }
    grabar(){
        document.write(this.modelo + " Grabando... a una resolución de: " + this.pantalla + "<br>")
    }
}

class altaGama extends celular {
    constructor (modelo, color, peso, pantalla, camara, ram, camaraExtra){
        super(modelo, color, peso, pantalla, camara, ram)
        this.camaraExtra = camaraExtra
    }
    grabarVideoLento(){
        document.write(this.modelo + " está grabando a cámara lenta<br>")
    }
    reconocimientoFacial(){
        document.write(this.modelo + " iniciando reconocimiento facial<br>")
    }
    infoAltaGama(){
         return this.verInfo() + document.write(`Con ${this.camaraExtra} <br><br>`)
    }
}

// Herencia hacer una clase nueva pero que herede las características de la clase anterior

/*class doggie extends animal {   //hereda la clase animal
    constructor(especie, edad, color, raza){ //se añade raza
        super(especie,edad,color)   //con esto hereda lo del constructor anterior y ya no hace falta escribirlo de nuevo
        this.raza = raza //añade el nuevo elemento
    }
    static ladrar (){ //static es un método que puede funcionar aunque la clase no se haya instanciado
        alert("Guau!")
    }
}

doggie.ladrar() // aquí me saldría la alerta guau sin haber creado todavía la variable perro porque uso static*/

const samsung = new celular("Samsung", "blanco", 0.1, "4k, 500ppp", "15 MPX", "16 GB")
const huawei = new celular("Huawei", "plata",  0.2, "4k, 300ppp", "20 MPX", "32 GB" )
const iphone = new celular("iPhone", "negro", 0.2, "2k, 500ppp", "12 MPX", "16 GB" )

const iphoneXR = new altaGama("iPhoneXR", "oro", 0.2, "4k, 600ppp", "25 MPX", "32 GB", "Cámara extra")
const samsungGalaxy = new altaGama("Galaxy X20", "azul", 0.2, "4k, 600ppp", "30 MPX", "32 GB", "Cámara extra")

samsung.verInfo()
huawei.verInfo()
iphone.verInfo()
iphoneXR.infoAltaGama()
samsungGalaxy.infoAltaGama()

samsungGalaxy.reconocimientoFacial()
iphoneXR.grabarVideoLento()

iphone.presionarBotonEncendido()
iphone.presionarBotonEncendido()
iphone.presionarBotonEncendido()
iphone.tomarFotos()
iphone.grabar()
iphone.reiniciar()
iphone.presionarBotonEncendido()