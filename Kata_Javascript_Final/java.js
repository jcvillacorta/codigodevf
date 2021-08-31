function validacion() {
    var usuario = document.getElementById("exampleInputUser").value
    var contraseña = document.getElementById("exampleInputPassword").value

    if (usuario == "usuario1" && contraseña == "12345"){
      window.alert ("Inicio exitoso");
      window.location = "usuario1.html";
    } else if (usuario == "usuario2" && contraseña == "12345"){
        window.alert ("Inicio exitoso");
        window.location.replace ("usuario2.html");
    } else if (usuario == "usuario3" && contraseña == "12345"){
        window.alert ("Inicio exitoso");
        window.location.replace ("usuario3.html");
    }
    else {
      alert ("Ingrese usuario y contraseña válidos")
    }
  }

  const usuario1 = 
    {   
        name: "Fátima",
        amount: 300,
    }  
document.getElementById("name").innerHTML = usuario1.name;
document.getElementById("saldo-actual").innerHTML = usuario1.amount;

//Boton Depósito event handler
const deposito_btn = document.getElementById('depositar');
var saldo = document.getElementById("saldo-actual");
deposito_btn.addEventListener('click', function(){

    const depositStringToInt = getInputNumb("monto-deposito");
    if (usuario1.amount + depositStringToInt <= 990) {
    updateSpanTest("saldo-actual", depositStringToInt);
    usuario1.amount += depositStringToInt;
  } else {
    alert("El saldo total no puede ser mayor a US$990.");
  }
  //setting up the input field blank when clicked
  document.getElementById('monto-deposito').value = "";
  
}) 


//Boton Retiro event handler
const retiro_btn = document.getElementById('retirar');
retiro_btn.addEventListener('click', function(){

    const retiroNumb = getInputNumb("monto-retiro");

    if (usuario1.amount - retiroNumb >= 10) {
  updateSpanTest("saldo-actual", -1 * retiroNumb);
  usuario1.amount -= retiroNumb;
} else {
  alert("El saldo total no puede ser inferior a US$10.");
}

    //setting up the input field blank when clicked
    document.getElementById('monto-retiro').value = "";

})

  //function to parse string input to int
function getInputNumb(idName){
  const amount = document.getElementById(idName).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}

function updateSpanTest(idName, addedNumber){
  //x1.1 updating balance the same way
  const current = document.getElementById(idName).innerText;
  const currentStringToInt = parseFloat(current);

  const total = currentStringToInt + addedNumber;

  //x1.2 setting this value in balance
  document.getElementById(idName).innerText = total;
}
/*
const users = [
  {   
      name: "Fatima123",
      password: "1234",
      amount: 300,
  },
  {
      name: "Diego123",
      password: '1234',
      amount: 300,
  },
  {
      name: "Juan123",
      password: '1234',
      amount: 300,
  },
  {
      name: "Pedro123",
      password: '1234',
      amount: 300,
  }
]
var indexUser;
function getNameAndPass (username, key) {
  for (let i = 0; i < users.length; i++) {
      if (users[i].name == username && users[i].password == key) {
          indexUser = i;
          //document.getElementById('name').innerHTML = `${users[indexUser].name}`;
          //document.getElementById('saldo-actual').innerHTML = `${users[indexUser].amount}`;
          return true;
      }
  } return false
}
function validacion() {
  var usuario = document.getElementById("exampleInputUser").value
  var contraseña = document.getElementById("exampleInputPassword").value
  if (getNameAndPass(usuario, contraseña)) {
      window.alert ("Inicio exitoso");
      window.location.replace ("usuario1.html");
  } else {
      alert ("Ingrese usuario y contraseña válidos");
  }
}

//Boton Depósito event handler
const deposito_btn = document.getElementById('depositar');
const saldo = document.getElementById("saldo-actual");
deposito_btn.addEventListener('click', function(){
  const depositStringToInt = getInputNumb("monto-deposito");
  if (users[i].amount + depositStringToInt < 990) {
      updateSpanTest("saldo-actual", depositStringToInt);
  } else {
      alert("El saldo total no puede superar los US$990.");
  }
//setting up the input field blank when clicked
document.getElementById('monto-deposito').value = "";
}) 
//Boton Retiro event handler
const retiro_btn = document.getElementById('retirar');
retiro_btn.addEventListener('click', function(){
  const retiroNumb = getInputNumb("monto-retiro");
  if (users[i].amount - retiroNumb > 10) {
      updateSpanTest("saldo-actual", -1 * retiroNumb);
  } else {
      alert("El saldo total no puede ser inferior a US$10.");
  }
  //setting up the input field blank when clicked
  document.getElementById('monto-retiro').value = "";
})
//function to parse string input to int
function getInputNumb(idName){
const amount = document.getElementById(idName).value;
const amountNumber = parseFloat(amount);
return amountNumber;
}
function updateSpanTest(idName, addedNumber){
//x1.1 updating balance the same way
const current = document.getElementById(idName).innerText;
const currentStringToInt = parseFloat(current);
const total = currentStringToInt + addedNumber;
//x1.2 setting this value in balance
document.getElementById(idName).innerText = total;
}

*/















