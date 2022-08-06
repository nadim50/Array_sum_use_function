/// declare function

var sum = 0

function array_sum(array_elements) {
    console.log(array_elements.length);
    for (let i = 0; i < array_elements.length; i++) {
        let index = i;
        let array_num = array_elements[i];
        sum = sum + array_num;
        console.log(index, array_num, sum);
    }

    return sum;

}


/// called function

const elements = [2, 3, 5, 7, 9, 8];
console.log(array_sum(elements));