const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "Simara Conceição",
        imagem: "https://github.com/simaraconceicao.png",
        minibio: "desenvolvedora"
    },
    {
        nome: "Ilana Chang",
        imagem: "https://bit.ly/3JCXBqP",
        minibio: "fundadora"
    }
]

function mostraMulheres(request, response) {
 response.json(mulheres)
}

function mostraPorta() {
    console.log("servidor criado e rodando na porta", porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)