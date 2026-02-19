let app = "MeuApp"

function infos (){
    let versao = 1.0
    console.log(app + " Versão: " +  versao)
}

infos()

console.log("Versão do meu app: " + versao)

//Isso acontece porque 'versao' foi declarada com 'let'dentro da função, ou seja, tem escopo local.