// Time complexity O(n^2)
// Space complexity O(1)

function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                console.log(`The pairs are: (${arr[i]} | ${arr[j]})`);
                // return [arr[i], arr[j]];
            }
        }
    }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);