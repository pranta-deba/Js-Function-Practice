function count_zero(num){
    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        if (num[i] == 0) {
            count1++;
        }else if (num[i] == 1) {
            count2++;
        }
    }
    return `0 ache : ${count1} ta ,  Ar 1 ache : ${count2} ta.`;
}

const binaryNum = "011101010010111100";
let result = count_zero(binaryNum);
console.log(result);