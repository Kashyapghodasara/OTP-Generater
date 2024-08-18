//This is an OTP Generater Logic

let input = document.getElementById("input")
let get = document.getElementsByClassName("Verify")
let Clear = document.getElementsByClassName("cler")

function Getotp() {
    let number = Math.floor(Math.random() * (9999 - 1001) + 1000)
    input.value = number;
}   
console.log(Getotp());