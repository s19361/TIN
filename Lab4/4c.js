const CheckPalindrome = str => {
    removeAlphanumericChar = /[^a-zA-Z0-9]+/g;
    
    cstr = str.toLowerCase().replace(removeAlphanumericChar, '');
    reverse = cstr.split("").reverse().join("");
    
    if(cstr == reverse){
    return console.log(str + " =>This is Palindrome!");
    }else{
    return console.log(str + " =>Not a Palindrome!");
    }
    
    }
    CheckPalindrome("I did, did I?");
    CheckPalindrome("Ulas Tezgor ");
    CheckPalindrome("Wow");

