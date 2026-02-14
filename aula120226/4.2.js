let veiculo = {
    marca : "BMW",
    modelo : "M3 Sport",
    ano : 2023,
    disponivel : true
}

console.log("Marca: " , veiculo.marca)
console.log("Modelo: ", veiculo.modelo)
console.log("Ano: ", veiculo["ano"])
console.log("Disponivel: ", veiculo["disponivel"])

veiculo.cor = "Azul Royal"

console.log("Cor: ",veiculo.cor)