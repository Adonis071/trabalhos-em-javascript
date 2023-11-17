class Bicicleta{
    constructor(cor, marca){
        this.cor = cor;
        this.marca = marca;
    }
    descricao(){
        console.log(`cor da bicicleta e ${this.cor} e a marca e ${this.marca}.`)
    } 
}
const bicicleta1 = new Bicicleta(`preta`, `caloi`)
const bicicleta2 = new Bicicleta(`prata`, `howton`)
bicicleta2.descricao()
bicicleta1.descricao()