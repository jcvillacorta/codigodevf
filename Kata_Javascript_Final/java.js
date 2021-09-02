const users = [
  {   
      name: "usuario1",
      nombre: "Fátima",
      password: "1234",
      amount: 300,
  },
  {
      name: "Diego123",
      nombre: "Diego",
      password: '1234',
      amount: 300,
  },
  {
      name: "Juan123",
      nombre: "Juan Carlos",
      password: '1234',
      amount: 300,
  },
  {
      name: "Pedro123",
      nombre: "Pedro",
      password: '1234',
      amount: 300,
  }
] 
function obtenerLocalStorage(key='indexUser') {
  return localStorage.getItem(key);
}
function save_storage(i) {
  localStorage.setItem('indexUser', i)
}
var indexUser = obtenerLocalStorage();
document.getElementById('name').innerHTML = `${users[indexUser].nombre}`;
document.getElementById('saldo-actual').innerHTML = `${users[indexUser].amount}`;
function getNameAndPass (username, key) {
  for (let i = 0; i < users.length; i++) {
      if (users[i].name == username && users[i].password == key) {
          save_storage(i);
          return true;
      }
  } return false;
}
function validacion() {
  var usuario = document.getElementById("exampleInputUser").value
  var contraseña = document.getElementById("exampleInputPassword").value
  if (getNameAndPass(usuario, contraseña)) {
      window.alert ("Inicio exitoso");
      window.location = "usuario1.html";
      console.log(obtenerLocalStorage(key='indexUser'));
  } else {
      alert ("Ingrese usuario y contraseña válidos");
  }
}
//Boton Depósito event handler
const deposito_btn = document.getElementById('depositar');
const saldo = document.getElementById("saldo-actual");
deposito_btn.addEventListener('click', function(){
  const depositStringToInt = getInputNumb("monto-deposito");
  if (users[indexUser].amount + depositStringToInt <= 990) {
      updateSpanTest("saldo-actual", depositStringToInt);
      users[indexUser].amount += depositStringToInt;
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
  console.log(retiroNumb)
  if (users[indexUser].amount - retiroNumb >= 10) {
      updateSpanTest("saldo-actual", -1 * retiroNumb);
      users[indexUser].amount -= retiroNumb;
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














