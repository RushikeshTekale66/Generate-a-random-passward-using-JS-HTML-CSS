// Declare all the character to be in our passward
const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const numberset = "1234567890";
const symbolset = "!@#$%^&*()_+";

// GEt/call all the ids from html 
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("number");
const symbolInput = document.getElementById("symbols");
const totalchar = document.getElementById("total-char");
const passwardInput = document.getElementById("pass-box");

// Create a random function to generate the random data for our passward 
const getrandomdata = (dataset) =>{
    return dataset[Math.floor(Math.random() * dataset.length)];
}

// Creating a function to check the checkbox and generate a passward 
const generatepassward = (passward = "") =>{
    if(upperInput.checked){
        passward += getrandomdata(upperset);
    }
    if(lowerInput.checked){
        passward += getrandomdata(lowerset);
    }
    if(numberInput.checked){
        passward += getrandomdata(numberset);
    }
    if(symbolInput.checked){
        passward += getrandomdata(symbolset);
    }

    if(passward.length<totalchar.value){
        return generatepassward(passward);
    }

   passwardInput.innerText = truncateString(passward, totalchar.value);
}

//Creating a treem function to get an actual length passward 
function truncateString (str, num){
    if(str.length > num){
        let substring = str.substring(0, num);
        return substring;
    }
    else{
        return str;
    }
}

//Creating a function so we can generate a random passward by clicking on it
document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatepassward();
    }
)

//Calling a function directly so we can get the first random passward by previous condition
generatepassward();