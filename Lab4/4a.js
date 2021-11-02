function getFactorialRecursively(n){
    if (n <= 1){
        return 1;
    }
    else{
        return n * getFactorialRecursively(n-1);
    }
}
    function getFactorialIterative(n){
        let answer = 1;
        if (n === 0){
          return answer;
        }else{
          for(var i = n; i >= 1; i--){
            answer = answer * i;
          }
          return answer;
        }  
      }


console.log("Recursive Factorial : " +getFactorialRecursively(6));
console.log("Iterative Factorial : " +getFactorialIterative(6));
    