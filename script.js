/*function myName(){
    let message;
    let name = prompt('Insert name:', 'alberto');
    message = 'Hello ' + name;
    document.getElementById('view').innerHTML = message;
}*/

const yourName = prompt('Tell us about you. What is your name?')
console.log(yourName)

const yourSurname = prompt('And your surname?')
console.log(yourSurname)

const yourColor = prompt('What is your favourite color?')
console.log(yourColor)

const datiHTML = document.getElementById('data')
datiHTML.innerHTML = `Hello ${yourName} ${yourSurname} your favourite color is ${yourColor}.`
console.log(datiHTML)

const userPassword = document.getElementById('password')
console.log(userPassword)

userPassword.innerHTML = `Your password is: ${yourName}${yourSurname}${yourColor}20`
