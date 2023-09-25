function validAnagram(first, second) {
    if (first.length !== second.length) {
        console.log('Array lengths are different...');
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log('before: ', lookup);

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            console.log('false! remaining letters: ', lookup);
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    console.log('after: ', lookup);
    console.log('true');
    return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagarams');
validAnagram('anagrams', 'nagaramm');

/*
// Moje resenje
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        console.log('false');
        return false;
    }
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < str1.length; i++) {
        // obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
        obj1[str1[i]] = obj1[str1[i]] ? obj1[str1[i]] + 1 : 1;
    }
    for (let i = 0; i < str2.length; i++) {
        obj2[str2[i]] = obj2[str2[i]] ? obj2[str2[i]] + 1 : 1;
    }
    // console.log(obj1);
    // console.log(obj2);

    for (let key in obj2) {
        if (!(key in obj2)) {
            console.log('false');
            return false;
        }
        if (obj1[key] !== obj2[key]) {
            console.log('false');
            return false;
        }
    }

    console.log('true');
}

validAnagram('', '');
validAnagram('azz', 'aaz');
validAnagram('anagram', 'nagaram');
validAnagram('rat', 'car');
validAnagram('awesomeeeeeeeeeeee', 'awesome');
validAnagram('qwerty', 'qeywrt');
validAnagram('texttwisttime', 'timetwisttext');
*/