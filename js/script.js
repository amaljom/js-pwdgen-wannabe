const userName = prompt('Inserisci il tuo nome');
const userSurname = prompt('Inserisci il tuo cognome');
const userFavouriteColor = prompt('Inserisci il tuo colore preferito');

console.log(userFavouriteColor, userName, userSurname);

const correntYear= '22'
let userPassword= userName + userSurname + userFavouriteColor + correntYear

document.getElementById('generated-Password').innerHTML = userPassword;