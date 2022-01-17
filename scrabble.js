// Necesito una función que,dado un string, interprete letra por letra ese string, y, dado un valor numérico a cada letra, haga suma del valor total, y lo reporte en la consola.

/*
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
*/

const [A, a, E, e, I, i, O, o, U, u, L, l, N, n, R, r, S, s, T, t ] = Array(20).fill(1)
const [D, d, G, g] = Array(4).fill(2)
const [B, b, C, c, M, m, P, p] = Array(8).fill(3)
const [F, f, H, h, V, v, W, w, Y, y ] = Array(10).fill(4)
const [K, k] = Array(2).fill(5)
const [J, j, X, x] = Array(4).fill(8)
const [Q, q, Z, z] = Array(4).fill(10)


function scrabbleScore(str) {
    var score = 0;

    if (str === "") {
        score = 0
    } else {
        let string = str
        string = string.split("").join("+")
        score = eval(string)
    }

    return score
}

console.log(scrabbleScore("cabbage")); // 14
//console.log(scrabbleScore("")); // 0
//console.log(scrabbleScore("STREET")); // 6
//console.log(scrabbleScore("st re et")); // 6 
