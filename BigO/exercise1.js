function anotherFunction() {
    return 0;
}

function funChallenge(input) {
    let a = 10; //O(1)
    a = 50 + 3; //O(1)

    for (let i = 0; i < input.length; i++) { //O(n)
        anotherFunction(); //O(n)
        let stranger = true; //O(n)
        a++; //O(n)
    }
    console.log(a);
    return a; //O(1)
}

funChallenge([1,2,3,4,5,6,7,8,9,10]);

// 3 + n + n + n + n
// O(3 + 4n)
// O(n)