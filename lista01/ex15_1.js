const catalogo = [
  { id: 1, nome: "Teclado Mecânico", preco: 150.00 },
  { id: 2, nome: "Mouse Gamer", preco: 85.00 },
  { id: 3, nome: "Monitor 24'", preco: 899.00 },
  { id: 4, nome: "Mousepad XL", preco: 45.00 },
  { id: 5, nome: "Fone de Ouvido", preco: 120.00 }
];

console.log("--- Questão A (.find) ---");
const produtoId3 = catalogo.find(produto => produto.id === 3);
console.log(produtoId3);

console.log("\n--- Questão B (.filter) ---");
const produtosCaros = catalogo.filter(produto => produto.preco > 100);
console.log(produtosCaros);

console.log("\n--- Questão C (.map) ---");
const nomesProdutos = catalogo.map(produto => produto.nome);
console.log(nomesProdutos);

console.log("\n--- Questão D (.forEach) ---");
catalogo.forEach(produto => {
  console.log(`Produto [ID ${produto.id}]: ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
});