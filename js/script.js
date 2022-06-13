const userName = prompt('Inserisci il tuo nome');
console.log(userName);

const userSurname = prompt('Inserisci il tuo cognome');
console.log(userSurname);

const userFavouriteColor = prompt('Inserisci il tuo colore preferito');
console.log(userFavouriteColor);

let userPassword= userName + userSurname + userFavouriteColor + 22
document.getElementById('generated-Password').innerHTML = userPassword;