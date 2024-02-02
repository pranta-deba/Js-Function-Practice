function odd_even(num){
    if (num % 2 == 0) {
        return "Even";
    }else if (num % 2 == 1) {
        return "Odd";
    }
}

let result = odd_even(29);
console.log(result);