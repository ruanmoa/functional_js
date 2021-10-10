const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true},
]

// 1. fragil: true
const getFragil = item => item.fragil
const fragilElements = carrinho.filter(getFragil)
console.log(fragilElements)

// 2. qtde: 4, preco: 27.10
const getTotalbyItem = item => item.qtde * item.preco
const totalByItem = fragilElements.map(getTotalbyItem)
console.log(totalByItem)

// 3. medias totais
const getTotal = (acc, el) => acc + el
const total = totalByItem.reduce(getTotal)
const mean = total / totalByItem.length
console.log(total)
console.log(mean)

// Resposta compacta
const media = carrinho
    .filter(item => item.fragil)
    .map(item => item.qtde * item.preco)
    .reduce((acc, el) => {
        const novaQtde = acc.qtde + 1
        const novoTotal = acc.total + el
        return {
            qtde: novaQtde,
            total: novoTotal,
            media: novoTotal / novaQtde
        }
    }, { qtde: 0, total: 0, media: 0})

console.log(media.media)