// for (let x = 0; x < 30; x = x + 2) {
//     console.log(x);
// }
// for (let i = 0; i < 30; i++) {
//     console.log(i)
// }
let = loop.querySelector("#loop")
for (let x = 1, y = 0; x, y < 31; x = x *= 2, y++) {
    console.log(x)
    let para = document.createElement("p")
    para.innerHTML = x
    document.querySelector('#loop').appendChild(para)
}