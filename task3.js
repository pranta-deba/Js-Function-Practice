function make_avg(arr){
    let sum = 0;
    for (const i of arr) {
        sum += i;
    }
    return sum / arr.length;
}

let array = [12,34,65,77,12,99];
let result = make_avg(array);
console.log(result);