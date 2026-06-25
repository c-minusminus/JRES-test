namespace customStrings {
    //% jres
    export const helloWorld = hex``;
}

let res = "["
for (let i = 0; i < customStrings.helloWorld.length; i++) {
    res += customStrings.helloWorld[i] + ", "
}
res = res.slice(0, -2) + "]"
console.log(res) // prints [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
