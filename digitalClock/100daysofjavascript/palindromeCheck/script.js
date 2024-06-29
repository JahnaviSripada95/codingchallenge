const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome(){
    /*
    console.log("clicked");
    const word = document.querySelector(".input-text").value;
    console.log(word);
    let len = word.length;
    console.log(len);
    let start = word.substring(0, Math.floor(len/2)).toLowerCase();
    console.log(start);
    let end = word.substring(len-Math.floor(len/2)).toLowerCase();
    console.log(end);
    */
    const word = document.querySelector(".input-text").value;
    let len = word.length;
    let start = word.substring(0, Math.floor(len/2)).toLowerCase();
    let end = word.substring(len-Math.floor(len/2)).toLowerCase();

    let flip = [...end].reverse().join("");
    if(start == flip){
        result.innerHTML = `${word.toUpperCase()} is a palindrome`;
    }else{
        result.innerHTML = `${word.toUpperCase()} is Not a palindrome`;
    }
        

}