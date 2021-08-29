/* eslint-disable */
//tipos basicos (inferência de tipos)
let nome: string = '';
let idade: number = 10;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');

//tipos arrays
let arrayOfNumbers: Array<number> = [1, 2 , 3, 4];
let arrayOfNumbers2: number[] = [1, 2 , 3, 4];
let arrayOfStrings: Array<string> = ["a", "b", "c", "d"];
let arrayOfStrings2: string[] = ["a", "b", "c", "d"];

//tipos Objetos
// o simbolo de ? significa que o campo é opcional
let pessoa: {nome: string, idade: number, adulto?:boolean} = {idade: 21, nome: "qualquer"}


//tipos Funções

function soma(x: number, y: number): number {
    return x + y;
};
const result = soma(2, 2);

const soma2: (x: number, y: number) => number = (x, y) => x + y;

//quando o parametro não é defino, assume o type any
// quando definido aceita qualquer tipo
function tipoAny(type: any) {
    return type;
}

console.log(tipoAny("ola"));

// função sem retorna é definida com void
function semRetorno(...args: string[]): void {
    console.log("teste");
}

// objetos

const objetoA: {
    atributoA: string,
    atributoB: string,
    readonly atributoC: string
} = {
    atributoA: '',
    atributoB: '',
    atributoC: ''
}

objetoA.atributoA = 'novo valor'
objetoA.atributoB = 'novo valor'


//tupla
const tuplaUm: [number, number, number] = [1, 2, 3];
const tuplaDois: [number, string, string] = [1, 'josimar', 'rachetti'];


//tipo never
// nunca irá retornar nada
function errorExemplo(): never {
    throw new Error("Exemplo uso never");
}

//tipo Enum
enum Cores {
    VERMELHO, //0
    AZUL, //1
    AMARELO, //2
    ROXO = 'ROXO' //é impossível atribuir um valor de string
}

console.log(Cores);

//tipo unknown
// utilizado para quando nao se sabe o tipo que variavel irá receber
let y: unknown


//union type
//quando um função, por exemplo, pode retornar mais de um tipo e os parameters tambem recebe mais de um tipo
function addOrConcat(a: number|string, b: number|string){
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    if (typeof b === 'string' && typeof a == 'string')return a + b;
}
console.log(addOrConcat(1, 2));
console.log(addOrConcat('a','b'));
