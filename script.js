const numberOfCharacters = document.getElementById("NumberofCharacters");
const uppercaseCharacters = document.getElementById("uppercase");
const lowercaseCharacters = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const button = document.getElementById("submit");
const userInput = document.getElementById("Uname");
const passwordOutput = document.getElementById("password");
const clipboard = document.getElementById("fclipboard");
let mainString = "";
let count = 0;

function initialise(low, high) {
    let charArray = "";
    for (let index = low; index <= high; index++) {
        charArray += String.fromCharCode(index);
    }

    return charArray;
}

let upcharacters = initialise(65, 90);
let lccharacters = initialise(97, 122);
let numcharacters = initialise(48, 57);
let symcharacters = initialise(33, 47);

button.addEventListener("click", () => {

    if (uppercaseCharacters.checked) {
        mainString += upcharacters;
        count++;
    }
    if (lowercaseCharacters.checked) {
        mainString += lccharacters;
        count++;
    }
    if (numbers.checked) {
        mainString += numcharacters;
        count++;
    }
    if (symbols.checked) {
        mainString += symcharacters;
        count++;
    }

    generatePassword();
});

function generatePassword() {

    if (numberOfCharacters.value >= count + userInput.value.length) {

        let password = "";
        if (userInput.value != null) password += userInput.value;
        if (uppercaseCharacters.checked) password += upcharacters.charAt(Math.floor(Math.random()*27));
        if (lowercaseCharacters.checked) password += lccharacters.charAt(Math.floor(Math.random()*27));
        if (numbers.checked) password += numcharacters.charAt(Math.floor(Math.random()*numcharacters.length));
        if (symbols.checked) password += symcharacters.charAt(Math.floor(Math.random()*symcharacters.length));

        let size = password.length;
        while (size != numberOfCharacters.value) {
            password += mainString.charAt(Math.floor(Math.random()*mainString.length));
            size = size + 1;
        }

        passwordOutput.value = password;
        mainString = "";
        count = 0;
    }else{
        alert("Please increase the number of characters limit");
        count = 0;
    }

}

clipboard.addEventListener("click",()=>{
    if(passwordOutput.value != null){
        passwordOutput.select();
        document.execCommand("copy");
        alert("Copied the text: " + passwordOutput.value);
    }else{
        alert("Please generate a password to copy");
    }
});


