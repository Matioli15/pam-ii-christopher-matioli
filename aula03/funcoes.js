function msgTeste () {
    console.log("Funcionou minha função")
}

msgTeste()


function msgTesteArgumento (param) {
    console.log("O parâmetro passado foi:",
     param, "e o tipo dele é",
    typeof param )
      
}

msgTesteArgumento("Olá")
msgTesteArgumento(4)

function soma (n1, n2) {
    let result = 0

    if(typeof n1 ==  "number" && typeof n2 == "number") {
        return result = n1 + n2
    } 

    return "Deu bom não"
     

}

console.log(soma(29, 23))
console.log(soma("oi", 82))


const funcaoArrow = () => {

    console.log("Isso é uma arrow function!") }

    funcaoArrow()
