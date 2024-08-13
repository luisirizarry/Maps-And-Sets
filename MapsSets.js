// ------------ What does the following code return? ------------

// new Set([1,1,2,2,3,4])
// {1, 2, 3, 4}

// [...new Set("referee")].join("")
// ref

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// It gets updated
// {[1,2,3], false}

const hasDuplicate = (arr) => {
    const arrSet = new Set(arr);
    if(arrSet.size !== arr.length){
        return true;
    }
    return false;
}

const vowelCount = (string) => {
    const vowels = 'aeiou';
    const vowelMap = new Map();
    string = string.toLowerCase();
    for(let letter of string){
        if(vowels.includes(letter)){
            if(vowelMap.has(letter)){
                let count = vowelMap.get(letter);
                count++;
                vowelMap.set(letter, count);
            } else {
                vowelMap.set(letter, 1);
            }    
        }
    }
    return vowelMap;
}