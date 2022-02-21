const divided = num => num / 5;
// console.log(divided(25));

// declare two parameter arrow function
const twoParameter = (num1, num2) => (num1 + 2) * (num2 +2);
// console.log(twoParameter(5, 5))

// three parameter arrow function

const threeParameter = (num1, num2, num3) => num1 * num2 * num3;
// console.log(threeParameter(2, 2, 2))


// declare multiple line arrow function
const multipleArrow =(num1, num2) =>{
    const number1 = num1 + 2;
    const number2 = num2 + 2;
    const total = number1 * number2;
    return total;
}
// console.log(multipleArrow(5, 5))