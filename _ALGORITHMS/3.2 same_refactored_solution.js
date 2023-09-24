function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);


/*
// Moje resenje

const arr1 = [1, 2, 3];
const arr2 = [4, 1, 9];

const arr3 = [1, 2, 3];
const arr4 = [1, 9];

const arr5 = [1, 2, 1];
const arr6 = [4, 4, 1];

function same(arr1, arr2) {
    let temp_arr1 = arr1.slice();
    let temp_arr2 = arr2.slice();
    if (temp_arr1.length != temp_arr2.length) {
        console.log('Not the same!');
        return;
    }

    for (let i = 0; i < temp_arr1.length; i++) {
        let correctIndex = temp_arr2.indexOf(Math.pow(temp_arr1[i], 2));
        // console.log('Deleted index of arr2 is: ' + correctIndex);
        if (correctIndex === -1) {
            console.log(`Array ${arr1} and array ${arr2} are NOT the same...`);
            return;
        }
        temp_arr2.splice(correctIndex, 1);
    }
    console.log(`Array ${arr1} squared is the SAME with array ${arr2}`);
    return true;
}

same(arr1, arr2);
same(arr3, arr4);
same(arr5, arr6);
*/